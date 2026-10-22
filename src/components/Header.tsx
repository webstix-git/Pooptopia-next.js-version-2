"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useId, useState, type FormEvent } from "react";
import { IconPhone, IconSearch } from "@/components/Icons";
import { headerNav, REQUEST_URL, type NavItem } from "@/lib/site";

function isCurrent(href: string, pathname: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

function itemIsCurrent(item: NavItem, pathname: string, exact = false) {
  if (!item.href || item.href.startsWith("http")) return false;
  if (exact) return pathname === item.href;
  if (isCurrent(item.href, pathname)) return true;
  return (
    item.children?.some(
      (child) => child.href && !child.href.startsWith("http") && isCurrent(child.href, pathname),
    ) ?? false
  );
}

function NavAnchor({
  item,
  pathname,
  onNavigate,
  exact = false,
}: {
  item: NavItem;
  pathname: string;
  onNavigate?: () => void;
  exact?: boolean;
}) {
  if (!item.href) {
    return (
      <button type="button">
        {item.label}
      </button>
    );
  }

  if (item.href.startsWith("http")) {
    return (
      <a href={item.href} target="_blank" rel="noreferrer" onClick={onNavigate}>
        {item.label}
      </a>
    );
  }

  return (
    <Link
      href={item.href}
      aria-current={itemIsCurrent(item, pathname, exact) ? "page" : undefined}
      onClick={onNavigate}
    >
      {item.label}
    </Link>
  );
}

function NavLinks({
  items,
  pathname,
  onNavigate,
}: {
  items: NavItem[];
  pathname: string;
  onNavigate?: () => void;
}) {
  return items.map((item) => (
    <div
      key={item.href ?? item.label}
      className={item.children ? "nav-group" : undefined}
      data-nav-label={item.label}
    >
      <NavAnchor item={item} pathname={pathname} onNavigate={onNavigate} />
      {item.children ? (
        <div className="nav-sub">
          {item.children.map((child) => (
            <NavAnchor
              key={child.href ?? child.label}
              item={child}
              pathname={pathname}
              onNavigate={onNavigate}
              exact
            />
          ))}
        </div>
      ) : null}
    </div>
  ));
}

function HeaderSearchForm({
  inputId,
  autoFocus = false,
  onSubmit,
}: {
  inputId: string;
  autoFocus?: boolean;
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form className="search-panel" action="/search" method="get" role="search" onSubmit={onSubmit}>
      <div className="search-field">
        <label className="sr-only" htmlFor={inputId}>
          Search the site
        </label>
        <input
          id={inputId}
          name="s"
          type="search"
          placeholder="Search"
          autoFocus={autoFocus}
          required
        />
        <button type="submit" aria-label="Submit search">
          <IconSearch size={20} />
        </button>
      </div>
    </form>
  );
}

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const searchInputId = useId();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  function submitSearch(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const term = String(new FormData(event.currentTarget).get("s") ?? "").trim();
    if (!term) return;
    setSearchOpen(false);
    setOpen(false);
    router.push(`/search?s=${encodeURIComponent(term)}`);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setSearchOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!searchOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSearchOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [searchOpen]);

  useEffect(() => {
    const syncSearchTitleWidth = () => {
      const resources = [...document.querySelectorAll<HTMLElement>("[data-nav-label='Resources']")].find(
        (item) => item.getBoundingClientRect().width > 0,
      );
      const bar = document.querySelector(".header-bar");
      if (!resources || !bar) {
        document.documentElement.style.removeProperty("--search-title-width");
        return;
      }
      const width = resources.getBoundingClientRect().right - bar.getBoundingClientRect().left;
      if (width <= 0) {
        document.documentElement.style.removeProperty("--search-title-width");
        return;
      }
      document.documentElement.style.setProperty("--search-title-width", `${Math.round(width)}px`);
    };
    syncSearchTitleWidth();
    window.addEventListener("resize", syncSearchTitleWidth);
    return () => window.removeEventListener("resize", syncSearchTitleWidth);
  }, [pathname]);

  useEffect(() => {
    const syncHeaderHeight = () => {
      const header = document.querySelector(".site-header");
      if (!header) return;
      document.documentElement.style.setProperty(
        "--header-bar-height",
        `${Math.round(header.getBoundingClientRect().height)}px`,
      );
    };
    syncHeaderHeight();
    document.body.classList.toggle("nav-lock", open);
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", syncHeaderHeight);
    return () => {
      document.body.classList.remove("nav-lock");
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", syncHeaderHeight);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <header className={`site-header${scrolled ? " is-scrolled" : ""}${open ? " is-open" : ""}`}>
      <div className="header-bar">
        <Link href="/" className="logo-link" onClick={close}>
          <img
            src="/images/logo-header-wordmark.png"
            alt="Pooptopia"
            width={903}
            height={222}
            className="header-wordmark"
          />
          <img
            src="/images/logo-header-mark.png"
            alt=""
            width={698}
            height={698}
            className="header-mark"
          />
        </Link>
        <nav className="desktop-nav" aria-label="Primary">
          <NavLinks items={headerNav} pathname={pathname} />
        </nav>
        <div className="header-end">
          <div className="search-slot">
            <button
              type="button"
              className="search-btn"
              aria-expanded={searchOpen}
              aria-controls={searchInputId}
              aria-label="Search"
              onClick={() => setSearchOpen((value) => !value)}
            >
              <IconSearch />
            </button>
            {searchOpen ? (
              <HeaderSearchForm inputId={searchInputId} autoFocus onSubmit={submitSearch} />
            ) : null}
          </div>
          <a className="nav-cta" href={REQUEST_URL}>
            Request Your Estimate
          </a>
          <button
            type="button"
            className="menu-btn"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            Menu
          </button>
        </div>
      </div>
      {open ? (
        <>
          <button type="button" className="nav-backdrop" aria-label="Close menu" onClick={close} />
          <nav className="mobile-nav" aria-label="Mobile">
            <div className="nav-close-row">
              <button type="button" className="nav-close" aria-label="Close menu" onClick={close}>
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M6 6 18 18M18 6 6 18" />
                </svg>
              </button>
            </div>
            <div className="mobile-nav-scroll">
              <form className="mobile-search" action="/search" method="get" role="search" onSubmit={submitSearch}>
                <div className="search-field">
                  <label className="sr-only" htmlFor="mobile-site-search">
                    Search the site
                  </label>
                  <input id="mobile-site-search" name="s" type="search" placeholder="Search" required />
                  <button type="submit" aria-label="Submit search">
                    <IconSearch size={20} />
                  </button>
                </div>
              </form>
              <NavLinks items={headerNav} pathname={pathname} onNavigate={close} />
              <a className="header-phone" href="tel:2623512147" onClick={close}>
                <IconPhone size={26} />
                (262) 351-2147
              </a>
              <a className="mobile-cta" href={REQUEST_URL}>
                Request Your Estimate
              </a>
            </div>
          </nav>
        </>
      ) : null}
    </header>
  );
}
