"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMemo, useState, useEffect, useRef } from "react";
import Flag from "react-world-flags";

function langFromPath(path: string): "en" | "al" | null {
  if (!path || path === "/") return null;
  const seg = path.split("/")[1];
  if (seg === "en" || seg === "al") return seg;
  return null;
}

function replaceLangInPath(pathname: string, target: "en" | "al") {
  if (!pathname || pathname === "/") return `/${target}`;
  const parts = pathname.split("/");
  if (parts[1] === "en" || parts[1] === "al") {
    parts[1] = target;
    return parts.join("/") || `/${target}`;
  }
  return `/${target}${pathname.startsWith("/") ? pathname : `/${pathname}`}`;
}

export default function Navbar() {
  const pathname = usePathname();
  const lang = langFromPath(pathname) ?? "en";
  const [langOpen, setLangOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const mobileButtonRef = useRef<HTMLButtonElement>(null);

  // Close language dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setLangOpen(false);
      }
    }
    if (langOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [langOpen]);

  // Close mobile menu when clicking outside (but not on the button)
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        mobileMenuRef.current &&
        !mobileMenuRef.current.contains(event.target as Node) &&
        mobileButtonRef.current &&
        !mobileButtonRef.current.contains(event.target as Node)
      ) {
        setMenuOpen(false);
      }
    }
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () =>
        document.removeEventListener("mousedown", handleClickOutside);
    }
  }, [menuOpen]);

  const links = useMemo(
    () => [
      { href: `/${lang}`, label: lang === "en" ? "Home" : "Kreu" },
      {
        href: `/${lang}/services`,
        label: lang === "en" ? "Services" : "Shërbimet",
      },
      {
        href: `/${lang}/projects`,
        label: lang === "en" ? "Projects" : "Projekte",
      },
      { href: `/${lang}/about`, label: lang === "en" ? "About" : "Rreth Nesh" },
      {
        href: `/${lang}/contact`,
        label: lang === "en" ? "Contact" : "Kontakt",
      },
    ],
    [lang]
  );

  const isActive = (href: string) =>
    href === `/${lang}`
      ? pathname === href
      : pathname === href || pathname.startsWith(href + "/");
  const enHref = replaceLangInPath(pathname, "en");
  const alHref = replaceLangInPath(pathname, "al");

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/95 border-b border-lime-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link
              href={`/${lang}`}
              className="flex items-center h-22 hover:opacity-80 transition-opacity"
            >
              <img
                src="/webolflogo.png"
                alt="Webolf Logo"
                className="h-22 w-22"
              />
            </Link>
          </div>

          {/* Center: Nav group */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2">
            <div className="relative inline-flex items-center gap-0.5 rounded-full border border-lime-500/20 bg-black px-1 py-1">
              {links.map((l) => {
                const active = isActive(l.href);
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    aria-current={active ? "page" : undefined}
                    className={`group relative inline-flex h-10 items-center rounded-full px-4 text-sm transition-all duration-200 border ${
                      active
                        ? "bg-lime-400 border-lime-500 text-black font-medium"
                        : "text-gray-300 hover:text-white border-transparent hover:border-lime-500/30"
                    }`}
                  >
                    <span className="relative z-10 transition-colors duration-200">
                      {l.label}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Right: Language + Mobile */}
          <div className="flex items-center gap-2">
            <button
              ref={mobileButtonRef}
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-lime-500/40 text-lime-300 hover:bg-lime-500/10 transition-all duration-200 relative z-10"
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5 pointer-events-none">
                <span
                  className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                    menuOpen ? "rotate-45 translate-y-2" : "translate-y-0"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                    menuOpen ? "opacity-0" : "opacity-100 translate-y-1.5"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-5 bg-current transform transition-all duration-300 ease-in-out ${
                    menuOpen ? "-rotate-45 translate-y-2" : "translate-y-3"
                  }`}
                />
              </div>
            </button>
            <div ref={langRef} className="relative hidden md:block z-50">
              <button
                onClick={() => setLangOpen((v) => !v)}
                className="h-10 inline-flex items-center gap-2 rounded-full border border-lime-500/25 px-3 py-1 text-sm text-lime-300 hover:text-black hover:bg-lime-400/90 transition-colors"
              >
                <Flag
                  code={lang === "en" ? "GB" : "AL"}
                  style={{ width: 16, height: 12 }}
                />
                <span className="uppercase">{lang === "en" ? "EN" : "AL"}</span>
              </button>
              {langOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-lime-500/20 bg-black p-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)] opacity-100 scale-100 transition-all duration-150">
                  <Link
                    href={enHref}
                    onClick={() => setLangOpen(false)}
                    className={
                      "flex items-center gap-2 rounded-lg px-2 py-2 text-sm " +
                      (lang === "en"
                        ? "bg-lime-400/20 text-white"
                        : "text-gray-200 hover:text-black hover:bg-lime-400/90")
                    }
                  >
                    <Flag code="GB" style={{ width: 16, height: 12 }} />
                    <span className="uppercase">EN</span>
                  </Link>
                  <Link
                    href={alHref}
                    onClick={() => setLangOpen(false)}
                    className={
                      "mt-1 flex items-center gap-2 rounded-lg px-2 py-2 text-sm " +
                      (lang === "al"
                        ? "bg-lime-400/20 text-white"
                        : "text-gray-200 hover:text-black hover:bg-lime-400/90")
                    }
                  >
                    <Flag code="AL" style={{ width: 16, height: 12 }} />
                    <span className="uppercase">AL</span>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div ref={mobileMenuRef} className="px-4 pt-2 pb-4">
            <div className="flex flex-col gap-2 rounded-2xl border border-lime-500/20 bg-black/30 backdrop-blur p-2 transform transition-all duration-300 ease-in-out">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  onClick={() => setMenuOpen(false)}
                  className={
                    "rounded-full px-3 py-2 text-sm transition-colors " +
                    (isActive(l.href)
                      ? "bg-lime-400/90 text-black"
                      : "text-gray-200 hover:bg-lime-400/90 hover:text-black")
                  }
                >
                  {l.label}
                </Link>
              ))}
              <div className="pt-1 grid grid-cols-2 gap-2">
                <Link
                  href={enHref}
                  onClick={() => setMenuOpen(false)}
                  className={
                    "inline-flex items-center justify-center gap-2 rounded-full border border-lime-500/40 px-3 py-1.5 text-sm " +
                    (lang === "en"
                      ? "bg-lime-400/90 text-black"
                      : "text-lime-300 hover:text-black hover:bg-lime-400/90")
                  }
                >
                  <Flag code="GB" style={{ width: 16, height: 12 }} />
                  <span className="uppercase">EN</span>
                </Link>
                <Link
                  href={alHref}
                  onClick={() => setMenuOpen(false)}
                  className={
                    "inline-flex items-center justify-center gap-2 rounded-full border border-lime-500/40 px-3 py-1.5 text-sm " +
                    (lang === "al"
                      ? "bg-lime-400/90 text-black"
                      : "text-lime-300 hover:text-black hover:bg-lime-400/90")
                  }
                >
                  <Flag code="AL" style={{ width: 16, height: 12 }} />
                  <span className="uppercase">AL</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
