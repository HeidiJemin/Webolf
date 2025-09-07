export default function Services({ lang = "en" }: { lang?: "en" | "al" }) {
  const t = {
    en: {
      heading: "Our Services",
      subheading: "What We Do",
      blurb:
        "We provide comprehensive web solutions to help your business thrive in the digital world.",
      services: [
        {
          title: "Website Design & Development",
          description:
            "Custom websites built with modern technologies, responsive design, and optimized performance.",
          features: [
            "Responsive Design",
            "Modern UI/UX",
            "Performance Optimized",
            "SEO Ready",
          ],
          icon: "design",
        },
        {
          title: "Web Applications",
          description:
            "Custom web applications tailored to your business needs with modern frameworks and robust functionality.",
          features: [
            "Custom Development",
            "Database Integration",
            "User Authentication",
            "API Development",
          ],
          icon: "app",
        },
        {
          title: "SEO & Performance",
          description:
            "Boost your online visibility with our comprehensive SEO strategies and performance optimization.",
          features: [
            "Keyword Research",
            "On-page SEO",
            "Speed Optimization",
            "Analytics Tracking",
          ],
          icon: "seo",
        },
        {
          title: "Website Management",
          description:
            "Ongoing maintenance, updates, and support to keep your website running smoothly and securely.",
          features: [
            "Regular Updates",
            "Security Monitoring",
            "Backup Management",
            "24/7 Support",
          ],
          icon: "management",
        },
      ],
    },
    al: {
      heading: "Shërbimet Tona",
      subheading: "Çfarë Bëjmë",
      blurb:
        "Ne ofrojmë zgjidhje të plota web për të ndihmuar biznesin tuaj të lulëzojë në botën digjitale.",
      services: [
        {
          title: "Dizajn & Zhvillim Faqesh",
          description:
            "Faqe të personalizuara të ndërtuara me teknologji moderne, dizajn përgjigjes dhe performancë të optimizuar.",
          features: [
            "Dizajn Përgjigjes",
            "UI/UX Moderne",
            "Optimizim Performance",
            "Gati për SEO",
          ],
          icon: "design",
        },
        {
          title: "Aplikacione Web",
          description:
            "Aplikacione web të personalizuara për nevojat e biznesit tuaj me kuadro moderne dhe funksionalitet të fortë.",
          features: [
            "Zhvillim i Personalizuar",
            "Integrim Databaze",
            "Autentifikim Përdoruesish",
            "Zhvillim API",
          ],
          icon: "app",
        },
        {
          title: "SEO & Performanca",
          description:
            "Rritni dukshmërinë tuaj online me strategjitë tona të plota SEO dhe optimizimin e performancës.",
          features: [
            "Kërkimi i Fjalëve Kyçe",
            "SEO në Faqe",
            "Optimizim Shpejtësie",
            "Ndjekje Analitike",
          ],
          icon: "seo",
        },
        {
          title: "Menaxhim i Faqes",
          description:
            "Mirëmbajtje e vazhdueshme, përditësime dhe suport për të mbajtur faqen tuaj të funksionojë qetësisht.",
          features: [
            "Përditësime të Rregullta",
            "Monitorim Sigurie",
            "Menaxhim Backup",
            "Suport 24/7",
          ],
          icon: "management",
        },
      ],
    },
  }[lang];

  const getIcon = (iconType: string) => {
    const iconClass = "w-8 h-8 text-lime-400";

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
      case "ecommerce":
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17M17 13v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6m8 0V9a2 2 0 00-2-2H9a2 2 0 00-2 2v4.01"
            />
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

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-gradient-to-r from-lime-400/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-gradient-to-l from-green-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-lime-400 font-medium text-sm uppercase tracking-wider mb-2">
            {t.subheading}
          </p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-300 bg-clip-text text-transparent">
              {t.heading}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.blurb}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:gap-12">
          {t.services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl border border-lime-500/20 bg-black/40 p-8 backdrop-blur-sm hover:border-lime-400/40 transition-all duration-300 hover:bg-black/60"
            >
              <div className="absolute -inset-px bg-gradient-to-br from-lime-400/0 via-lime-400/0 to-lime-400/0 group-hover:from-lime-400/10 group-hover:via-lime-400/0 group-hover:to-lime-400/10 transition-colors rounded-2xl" />

              <div className="relative z-10">
                {/* Icon */}
                <div className="flex items-center mb-6">
                  <div className="relative">
                    <div className="absolute inset-0 bg-lime-400/20 rounded-full blur-lg group-hover:bg-lime-400/30 transition-all duration-300"></div>
                    <div className="relative bg-black/80 rounded-xl p-3 border border-lime-500/40 group-hover:border-lime-400/70 transition-all duration-300 shadow-[0_0_15px_rgba(163,230,53,0.3)] group-hover:shadow-[0_0_25px_rgba(163,230,53,0.5)]">
                      {getIcon(service.icon)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-lime-300 transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-300 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-lime-400 rounded-full animate-pulse shadow-[0_0_8px_rgba(163,230,53,0.6)]"></div>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button className="inline-flex items-center gap-2 rounded-xl border border-lime-500/40 bg-lime-500/10 px-6 py-3 text-lime-300 hover:bg-lime-500/20 hover:border-lime-400/60 focus:outline-none focus:ring-2 focus:ring-lime-400/50 transition-all duration-300 text-sm font-medium shadow-[0_0_15px_rgba(163,230,53,0.1)] hover:shadow-[0_0_25px_rgba(163,230,53,0.2)]">
                    {lang === "en" ? "Learn More" : "Mëso Më Shumë"}
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
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center">
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-2xl font-semibold text-white mb-4">
              {lang === "en" ? "Ready to Get Started?" : "Gati për të Filluar?"}
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              {lang === "en"
                ? "Let's discuss your project and create something amazing together. Contact us today for a free consultation."
                : "Le të diskutojmë projektin tuaj dhe të krijojmë diçka të mrekullueshme së bashku. Na kontaktoni sot për një konsultim falas."}
            </p>
            <a
              href={`/${lang}/contact`}
              className="inline-flex items-center gap-2 rounded-xl border border-lime-500/40 bg-lime-500/10 px-8 py-4 text-lime-300 hover:bg-lime-500/20 hover:border-lime-400/60 focus:outline-none focus:ring-2 focus:ring-lime-400/50 transition-all duration-300 font-medium shadow-[0_0_20px_rgba(163,230,53,0.1)] hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]"
            >
              {lang === "en" ? "Get In Touch" : "Na Kontaktoni"}
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
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
