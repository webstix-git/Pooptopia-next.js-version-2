import Link from "next/link";
import { FooterNewsletter } from "@/components/FooterNewsletter";
import { IconCalendarPlain, IconMail, IconPhone, IconPin, IconFacebook, IconInstagram, IconX, IconYelp, IconYouTube } from "@/components/Icons";
import { ADDRESS_MAPS_URL, socials } from "@/lib/site";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/about/our-why", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/services", label: "Pooptopia Services" },
  { href: "/about/service-area", label: "Service Area" },
  { href: "/gallery", label: "Gallery" },
  { href: "/faq", label: "FAQs" },
  { href: "/contact", label: "Contact" },
];

const socialIcons = {
  Facebook: IconFacebook,
  Instagram: IconInstagram,
  X: IconX,
  Yelp: IconYelp,
  YouTube: IconYouTube,
};

export function Footer() {
  return (
    <footer id="contact" className="site-footer">
      <div className="footer-inner">
        <div className="footer-grid">
          <div className="footer-brand">
            <span className="footer-logo-lockup">
              <img
                src="/images/logo-header-wordmark.png"
                alt="Pooptopia"
                width={903}
                height={222}
                className="footer-logo-wordmark"
              />
              <img
                src="/images/logo-header-mark.png"
                alt=""
                width={698}
                height={698}
                className="footer-logo-mark"
              />
            </span>
            <span className="footer-blurb">
              Family-owned dog waste removal in southeastern Wisconsin and northern Illinois. We scoop,
              sanitize, and haul it away,
              <br />
              so your yard is yours again.
            </span>
            <div className="footer-reach">
              <div className="footer-socials">
                {socials.map((item) => {
                  const Icon = socialIcons[item.label as keyof typeof socialIcons];
                  return (
                    <a key={item.label} href={item.href} aria-label={item.label} target="_blank" rel="noreferrer">
                      <Icon />
                    </a>
                  );
                })}
              </div>
              <div className="footer-reach-lines">
                <a className="footer-contact-item" href="tel:2623512147">
                  <IconPhone size={18} />
                  <span>(262) 351-2147</span>
                </a>
                <a className="footer-contact-item" href="mailto:admin@pooptopia.dog">
                  <IconMail size={18} />
                  <span>admin@pooptopia.dog</span>
                </a>
                <span className="footer-contact-item">
                  <IconCalendarPlain size={18} />
                  <span>Mon–Fri, 9:00 am – 5:00 pm</span>
                </span>
              </div>
            </div>
          </div>
          <div className="footer-col">
            <strong>Quick Links</strong>
            {quickLinks.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div className="footer-col">
            <strong>Address</strong>
            <a
              className="footer-contact-item"
              href={ADDRESS_MAPS_URL}
              target="_blank"
              rel="noreferrer"
            >
              <IconPin size={18} />
              <span>
                6806 55th St.
                <br />
                Kenosha, WI 53144
              </span>
            </a>
            <div className="footer-newsletter-block">
              <strong>Newsletter</strong>
              <FooterNewsletter />
            </div>
          </div>
        </div>
        <div className="footer-bar">
          <span>© 2026 Pooptopia. All rights reserved.</span>
          <div className="footer-links">
            <Link href="/sitemap">Sitemap</Link>
            <Link href="/service-index">AI Readiness Service Index</Link>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/ai-policy">AI Policy</Link>
            <a
              className="footer-credit"
              href="https://www.webstix.com/"
              target="_blank"
              rel="noreferrer"
            >
              Website Designed by
              <img src="/images/wsx-logo.png" alt="webstix" width={1039} height={227} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
