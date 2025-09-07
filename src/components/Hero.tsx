"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Hero({ lang = "en" }: { lang?: "en" | "al" }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Small delay to ensure smooth hydration
    const timer = setTimeout(() => setMounted(true), 100);
    return () => clearTimeout(timer);
  }, []);
  const getIcon = (iconType: string) => {
    const iconClass = "w-6 h-6 text-lime-400";

    switch (iconType) {
      case "design":
        return (
          <svg
            className={iconClass}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z"
            />
            <circle cx="16.5" cy="9.5" r="1.5" />
            <circle cx="6.5" cy="9.5" r="1.5" />
          </svg>
        );
      case "seo":
        return (
          <svg
            className={iconClass}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
            />
          </svg>
        );
      case "app":
        return (
          <svg
            className={iconClass}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
            />
          </svg>
        );
      case "management":
        return (
          <svg
            className={iconClass}
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  const t = {
    en: {
      title: "We craft your digital presence",
      subtitle: "Modern websites, apps, and digital products that convert.",
      ctaPrimary: "Start a project",
      ctaSecondary: "Our projects",
      featuresTitle: "What we do",
      stats: [
        { label: "Support", value: "24/7" },
        { label: "Years Experience", value: "2+" },
      ],
      features: [
        {
          title: "Website Design & Hosting",
          desc: "Fast, secure, and stunning websites end‑to‑end.",
          icon: "design",
        },
        {
          title: "SEO Optimization",
          desc: "Rank higher and get found by your customers.",
          icon: "seo",
        },
        {
          title: "Web Applications",
          desc: "Custom apps tailored to your business goals.",
          icon: "app",
        },
        {
          title: "Website Management",
          desc: "Updates, monitoring, and ongoing support.",
          icon: "management",
        },
      ],
    },
    al: {
      title: "Krijojmë prezencen tuaj dixhitale",
      subtitle:
        "Faqe moderne, aplikacione dhe produkte digjitale të suksesshme.",
      ctaPrimary: "Fillo një projekt",
      ctaSecondary: "Projektet tona",
      featuresTitle: "Çfarë bëjmë",
      stats: [
        { label: "Suport", value: "24/7" },
        { label: "Vite Përvojë", value: "2+" },
      ],
      features: [
        {
          title: "Dizajn & Hosting Faqesh",
          desc: "Faqe të shpejta, të sigurta dhe mbresëlënëse nga A‑Z.",
          icon: "design",
        },
        {
          title: "Optimizim SEO",
          desc: "Renditje më e lartë dhe dukshmëri më e madhe.",
          icon: "seo",
        },
        {
          title: "Aplikacione Web",
          desc: "Aplikacione të personalizuara për objektivat tuaja.",
          icon: "app",
        },
        {
          title: "Menaxhim i Faqes",
          desc: "Përditësime, monitorim dhe suport i vazhdueshëm.",
          icon: "management",
        },
      ],
    },
  }[lang];

  return (
    <section className="pt-28 pb-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full">
          <div
            className="absolute top-1/4 left-0 w-full h-96 bg-gradient-to-r from-transparent via-lime-400/20 to-transparent -skew-y-12 opacity-60"
            style={{
              animation: mounted ? "pulse 2s ease-in-out infinite" : "none",
            }}
          ></div>
          <div
            className="absolute top-1/3 right-0 w-3/4 h-80 bg-gradient-to-l from-transparent via-green-500/15 to-transparent skew-y-6 opacity-40"
            style={{
              animation: mounted ? "pulse 2s ease-in-out infinite 1s" : "none",
            }}
          ></div>
        </div>
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/4 w-2/3 h-64 bg-gradient-to-br from-lime-300/10 via-transparent to-green-600/10 rounded-full blur-3xl opacity-30"
            style={{
              animation: mounted ? "bounce 6s ease-in-out infinite" : "none",
            }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-1/2 h-48 bg-gradient-to-tl from-emerald-400/15 via-transparent to-lime-500/15 rounded-full blur-2xl opacity-25"
            style={{
              animation: mounted ? "bounce 8s ease-in-out infinite 2s" : "none",
            }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black opacity-80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          className="text-5xl sm:text-6xl font-extrabold tracking-tight text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: mounted ? 0 : 0.1 }}
        >
          <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-300 bg-clip-text text-transparent">
            {t.title}
          </span>
        </motion.h1>
        <motion.p
          className="mt-6 text-lg text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: mounted ? 0.2 : 0.3, duration: 0.6 }}
        >
          {t.subtitle}
        </motion.p>
        <motion.div
          className="mt-10 flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: mounted ? 0.4 : 0.5 }}
        >
          {/* Stats badges */}
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            {t.stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{
                  delay: mounted ? 0.5 + index * 0.1 : 0.6 + index * 0.1,
                  duration: 0.4,
                }}
                className="group flex items-center gap-2 px-4 py-2 rounded-full border border-lime-500/30 bg-black/40 backdrop-blur-sm hover:border-lime-400/50 hover:bg-black/60 transition-all duration-300"
              >
                <div
                  className="w-2 h-2 bg-lime-400 rounded-full shadow-[0_0_8px_rgba(163,230,53,0.6)]"
                  style={{
                    animation: mounted
                      ? "pulse 2s ease-in-out infinite"
                      : "none",
                  }}
                ></div>
                <span className="text-lime-300 font-medium text-sm group-hover:text-lime-200 transition-colors">
                  {stat.value}
                </span>
                <span className="text-gray-400 text-xs group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Link
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 rounded-full border border-lime-500/40 bg-lime-500/10 px-8 py-4 text-lime-300 hover:bg-lime-500/20 hover:border-lime-400/60 transition-all duration-300 shadow-[0_0_20px_rgba(163,230,53,0.2)] hover:shadow-[0_0_30px_rgba(163,230,53,0.4)] font-medium"
            >
              {t.ctaPrimary}
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
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </Link>
            <Link
              href={`/${lang}/work`}
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-transparent px-8 py-4 text-white hover:bg-white/10 hover:border-white/40 transition-all duration-300 font-medium"
            >
              {t.ctaSecondary}
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
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </Link>
          </div>
        </motion.div>

        {/* Features grid */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: mounted ? i * 0.05 : i * 0.1 }}
              className="group relative overflow-hidden rounded-xl border border-lime-500/20 bg-black/40 p-5 hover:border-lime-400/40 transition-all duration-300"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-lime-400/0 via-lime-400/0 to-lime-400/0 group-hover:from-lime-400/10 group-hover:via-lime-400/0 group-hover:to-lime-400/10 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center justify-center mb-3">
                  <div className="relative">
                    <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-lg group-hover:bg-lime-400/30 transition-all duration-300"></div>
                    <div className="relative bg-black/80 rounded-full p-2 border border-lime-500/40 group-hover:border-lime-400/70 transition-all duration-300 shadow-[0_0_15px_rgba(163,230,53,0.3)] group-hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                      {getIcon(f.icon)}
                    </div>
                  </div>
                </div>
                <h3 className="text-white font-semibold mb-1 text-center group-hover:text-lime-300 transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-sm text-gray-400 text-center">{f.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
