"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useMemo, useState, useEffect, useRef } from "react";
import Flag from "react-world-flags";

function langFromPath(path: string): "en" | "sq" | null {
  if (!path || path === "/") return null;
  const seg = path.split("/")[1];
  if (seg === "en" || seg === "sq") return seg;
  return null;
}

function replaceLangInPath(pathname: string, target: "en" | "sq") {
  if (!pathname || pathname === "/") return `/${target}`;
  const parts = pathname.split("/");
  if (parts[1] === "en" || parts[1] === "sq") {
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

  const links = useMemo(
    () => [
      { href: `/${lang}`, label: lang === "en" ? "Home" : "Kreu" },
      {
        href: `/${lang}/services`,
        label: lang === "en" ? "Services" : "Shërbimet",
      },
      { href: `/${lang}/work`, label: lang === "en" ? "Work" : "Punët" },
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
  const sqHref = replaceLangInPath(pathname, "sq");

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-black/95 border-b border-lime-500/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16">
          {/* Left: Logo */}
          <div className="flex items-center">
            <Link
              href={`/${lang}`}
              className="flex items-center h-10 text-lime-400 font-semibold tracking-wide hover:text-lime-300 transition-colors"
            >
              WebCraft
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
                    className="group relative inline-flex h-10 items-center rounded-full px-4 text-sm text-gray-300 hover:text-white transition-all duration-200 border border-transparent hover:border-lime-500/30"
                  >
                    {active && (
                      <motion.span
                        layoutId="activePill"
                        className="absolute inset-0 rounded-full bg-lime-400 border border-lime-500"
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 30,
                        }}
                      />
                    )}
                    <span
                      className={`relative z-10 transition-colors duration-200 ${
                        active
                          ? "text-black font-medium"
                          : "group-hover:text-white"
                      }`}
                    >
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
              onClick={() => setMenuOpen((v) => !v)}
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-lime-500/40 text-lime-300 hover:bg-lime-500/10"
              aria-label="Toggle menu"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M4 7h16M4 12h16M4 17h16"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
              </svg>
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
                <span className="uppercase">{lang}</span>
              </button>
              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -4, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -4, scale: 0.98 }}
                    transition={{ duration: 0.12 }}
                    className="absolute right-0 top-full mt-2 w-44 rounded-xl border border-lime-500/20 bg-black p-1 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
                  >
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
                      href={sqHref}
                      onClick={() => setLangOpen(false)}
                      className={
                        "mt-1 flex items-center gap-2 rounded-lg px-2 py-2 text-sm " +
                        (lang === "sq"
                          ? "bg-lime-400/20 text-white"
                          : "text-gray-200 hover:text-black hover:bg-lime-400/90")
                      }
                    >
                      <Flag code="AL" style={{ width: 16, height: 12 }} />
                      <span className="uppercase">SQ</span>
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </nav>
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.18 }}
              className="md:hidden px-4 pt-2"
            >
              <div className="flex flex-col gap-2 rounded-2xl border border-lime-500/20 bg-black/30 backdrop-blur p-2">
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
                    href={sqHref}
                    onClick={() => setMenuOpen(false)}
                    className={
                      "inline-flex items-center justify-center gap-2 rounded-full border border-lime-500/40 px-3 py-1.5 text-sm " +
                      (lang === "sq"
                        ? "bg-lime-400/90 text-black"
                        : "text-lime-300 hover:text-black hover:bg-lime-400/90")
                    }
                  >
                    <Flag code="AL" style={{ width: 16, height: 12 }} />
                    <span className="uppercase">SQ</span>
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
