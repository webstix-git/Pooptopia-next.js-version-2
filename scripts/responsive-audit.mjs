import puppeteer from "puppeteer-core";
import { mkdirSync } from "node:fs";

const BASE = process.env.BASE_URL || "http://localhost:3000";
const SHOTS = process.env.SHOTS_DIR || "";
const pages = [
  "/",
  "/services",
  "/services/new-request",
  "/reviews",
  "/faq",
  "/contact",
  "/gallery",
  "/about",
  "/about/our-why",
  "/about/videos",
  "/about/blog",
  "/about/blog/can-you-put-neosporin-on-a-dog",
  "/about/blog/why-do-dogs-sigh",
  "/service-index",
  "/our-terms-of-service",
  "/ai-policy",
  "/sitemap",
  "/search?q=dog",
  "/this-page-does-not-exist",
];

const viewports = [
  { name: "mobile-360", width: 360, height: 780, mobile: true },
  { name: "mobile-390", width: 390, height: 844, mobile: true },
  { name: "tablet-768", width: 768, height: 1024, mobile: true },
  { name: "tablet-1024", width: 1024, height: 768, mobile: false },
  { name: "desktop-1280", width: 1280, height: 800, mobile: false },
  { name: "desktop-1440", width: 1440, height: 900, mobile: false },
];

if (SHOTS) mkdirSync(SHOTS, { recursive: true });

const browser = await puppeteer.launch({
  executablePath: "/usr/bin/google-chrome",
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});

const results = [];

for (const vp of viewports) {
  const page = await browser.newPage();
  const consoleErrors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text().slice(0, 160));
  });
  page.on("pageerror", (err) => consoleErrors.push(String(err).slice(0, 160)));
  await page.setViewport({
    width: vp.width,
    height: vp.height,
    deviceScaleFactor: 1,
    isMobile: vp.mobile,
    hasTouch: vp.mobile,
  });

  for (const path of pages) {
    consoleErrors.length = 0;
    const url = `${BASE}${path}`;
    try {
      await page.goto(url, { waitUntil: "networkidle2", timeout: 60000 });
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 600) {
          window.scrollTo(0, y);
          await new Promise((r) => setTimeout(r, 40));
        }
        window.scrollTo(0, 0);
      });
      await new Promise((r) => setTimeout(r, 400));
      const info = await page.evaluate((isMobile) => {
        const vw = window.innerWidth;
        const label = (el) => {
          const tag = el.tagName.toLowerCase();
          const cls =
            el.className && typeof el.className === "string"
              ? el.className.trim().split(/\s+/).slice(0, 2).join(".")
              : "";
          return cls ? `${tag}.${cls}` : tag;
        };
        const clippedByAncestor = (el) => {
          for (let p = el.parentElement; p && p !== document.body; p = p.parentElement) {
            const s = getComputedStyle(p);
            if (/(hidden|clip|auto|scroll)/.test(s.overflowX)) {
              const r = p.getBoundingClientRect();
              if (r.left >= -1 && r.right <= vw + 1) return true;
            }
          }
          return false;
        };
        const visible = (el) => {
          const s = getComputedStyle(el);
          if (s.display === "none" || s.visibility === "hidden" || Number(s.opacity) === 0) return false;
          const r = el.getBoundingClientRect();
          return r.width >= 1 && r.height >= 1;
        };
        const inHiddenMenu = (el) => !!el.closest("[aria-hidden='true'], [inert], .sr-only");

        const doc = document.documentElement;
        const overflowX = Math.max(doc.scrollWidth, document.body.scrollWidth) - vw;

        const offenders = [];
        const clipped = [];
        const tiny = [];
        const smallTaps = [];
        for (const el of document.querySelectorAll("body *")) {
          if (!visible(el) || inHiddenMenu(el)) continue;
          const r = el.getBoundingClientRect();
          if ((r.right > vw + 1 || r.left < -1) && !clippedByAncestor(el)) {
            offenders.push(`${label(el)} [${Math.round(r.left)}..${Math.round(r.right)}]`);
          }
          const s = getComputedStyle(el);
          const ownText = Array.from(el.childNodes).some(
            (n) => n.nodeType === 3 && n.textContent.trim().length > 1,
          );
          if (ownText) {
            const fs = parseFloat(s.fontSize);
            if (fs < 12) tiny.push(`${label(el)} ${fs}px "${el.textContent.trim().slice(0, 30)}"`);
            if (
              /(hidden|clip)/.test(s.overflowX) &&
              s.textOverflow !== "ellipsis" &&
              el.scrollWidth > el.clientWidth + 2
            ) {
              clipped.push(`${label(el)} "${el.textContent.trim().slice(0, 40)}"`);
            }
          }
          if (isMobile && el.matches("a, button, [role='button'], input, select, textarea")) {
            const inline = s.display === "inline" && el.closest("p, li, td");
            if (!inline && (r.height < 32 || r.width < 32)) {
              smallTaps.push(`${label(el)} ${Math.round(r.width)}x${Math.round(r.height)} "${(el.textContent || el.getAttribute("aria-label") || "").trim().slice(0, 24)}"`);
            }
          }
        }
        const brokenImages = Array.from(document.images)
          .filter((img) => img.complete && img.naturalWidth === 0 && img.getAttribute("src"))
          .map((img) => img.getAttribute("src"));
        const uniq = (a) => [...new Set(a)].slice(0, 10);
        return {
          overflowX: Math.round(overflowX),
          offenders: uniq(offenders),
          clipped: uniq(clipped),
          tinyText: uniq(tiny),
          smallTaps: uniq(smallTaps),
          brokenImages: uniq(brokenImages),
        };
      }, vp.mobile);
      if (SHOTS) {
        const file = `${SHOTS}/${vp.name}${path.replace(/[/?=]/g, "_") || "_home"}.png`;
        await page.screenshot({ path: file, fullPage: true });
      }
      results.push({ viewport: vp.name, path, ...info, consoleErrors: [...new Set(consoleErrors)].slice(0, 5) });
    } catch (err) {
      results.push({ viewport: vp.name, path, error: String(err).slice(0, 200) });
    }
  }
  await page.close();
}

await browser.close();

const issues = results
  .map((r) => {
    const out = { viewport: r.viewport, path: r.path };
    if (r.error) out.error = r.error;
    if (r.overflowX > 2) out.overflowX = r.overflowX;
    for (const key of ["offenders", "clipped", "tinyText", "smallTaps", "brokenImages", "consoleErrors"]) {
      if (r[key]?.length) out[key] = r[key];
    }
    return out;
  })
  .filter((r) => Object.keys(r).length > 2);

console.log(JSON.stringify({ checked: results.length, issues }, null, 2));
