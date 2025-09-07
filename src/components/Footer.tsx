import Link from "next/link";

export default function Footer({ lang = "en" }: { lang?: "en" | "al" }) {
  const year = new Date().getFullYear();

  const t = {
    en: {
      tagline: "We design, build, and maintain.",
      contact: "Contact",
      email: "webolf.tech@gmail.com",
      phone: "+355 69 214 7006",
      services: {
        title: "Services",
        items: [
          "Website Design & Hosting",
          "SEO Optimization",
          "Web Applications",
          "Website Management",
        ],
      },
      company: {
        title: "More",
        items: [
          { label: "About", href: `/${lang}/about` },
          { label: "Services", href: `/${lang}/services` },
          { label: "Projects", href: `/${lang}/projects` },
          { label: "Contact", href: `/${lang}/contact` },
        ],
      },
      follow: "Follow",
      copyright: "All rights reserved.",
    },
    al: {
      tagline: "Ne dizajnojmë, ndërtojmë dhe mirëmbajmë.",
      contact: "Kontakt",
      email: "webolf.tech@gmail.com",
      phone: "+355 69 214 7006",
      services: {
        title: "Shërbimet",
        items: [
          "Dizajn & Hosting Faqesh",
          "Optimizim SEO",
          "Aplikacione Web",
          "Menaxhim i Faqes",
        ],
      },
      company: {
        title: "Më Shumë",
        items: [
          { label: "Rreth Nesh", href: `/${lang}/about` },
          { label: "Projektet", href: `/${lang}/projects` },
          { label: "Shërbimet", href: `/${lang}/services` },
          { label: "Kontakt", href: `/${lang}/contact` },
        ],
      },
      follow: "Na Ndiqni",
      copyright: "Të gjitha të drejtat e rezervuara.",
    },
  }[lang];

  return (
    <footer className="mt-12 border-t border-lime-500/20 bg-black/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="text-lime-400 font-semibold text-lg">Webolf</div>
          <p className="mt-3 text-sm text-gray-400">{t.tagline}</p>
          <div className="mt-6 space-y-3">
            <div className="text-white font-medium text-sm mb-2">
              {t.contact}
            </div>
            <a
              href={`mailto:${t.email}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-lime-400 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              {t.email}
            </a>
            <a
              href={`tel:${t.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-2 text-sm text-gray-400 hover:text-lime-400 transition-colors"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              {t.phone}
            </a>
          </div>
        </div>
        <div>
          <div className="text-white font-medium mb-3">{t.services.title}</div>
          <ul className="space-y-2 text-sm text-gray-400">
            {t.services.items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-white font-medium mb-3">{t.company.title}</div>
          <ul className="space-y-2 text-sm text-gray-400">
            {t.company.items.map((item, index) => (
              <li key={index}>
                <Link
                  href={item.href}
                  className="hover:text-lime-400 transition-colors"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-white font-medium mb-3">{t.follow}</div>
          <div className="flex items-center gap-3">
            <a
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-lime-500/30 hover:bg-lime-500/10"
              href="https://www.facebook.com/share/1BBH8C6KCq/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-300 group-hover:text-lime-300"
              >
                <path
                  d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-lime-500/30 hover:bg-lime-500/10"
              href="https://www.tiktok.com/@webolf.tech?_t=ZM-8zVXOy2EV8S&_r=1"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-300 group-hover:text-lime-300"
              >
                <path
                  d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"
                  fill="currentColor"
                />
              </svg>
            </a>
            <a
              className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-lime-500/30 hover:bg-lime-500/10"
              href="https://www.instagram.com/webolf.tech?igsh=MTFnNmIwd3h6aHlmZg=="
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-300 group-hover:text-lime-300"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"
                  fill="currentColor"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
      <div className="border-t border-lime-500/20 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-sm text-gray-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>
            © {year} Webolf.tech · {t.copyright}
          </p>
          <div className="flex items-center gap-4">
            <Link
              href={`/${lang}/privacy-policy`}
              className="hover:text-lime-400 transition-colors"
            >
              {lang === "en" ? "Privacy Policy" : "Politika e Privatësisë"}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
