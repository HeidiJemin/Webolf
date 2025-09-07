import Image from "next/image";

export default function Work({ lang = "en" }: { lang?: "en" | "al" }) {
  const t = {
    en: {
      heading: "Our Work",
      subheading: "Featured Projects",
      blurb:
        "Explore our portfolio of successful projects. From medical clinics to business websites, we create digital experiences that drive results.",
      projects: [
        {
          title: "Egian by Intermedica",
          description:
            "Modern medical clinic website with appointment booking system",
          image: "/egian.png",
          category: "Healthcare",
          results: [
            "50% increase in online appointments",
            "40% improvement in user engagement",
            "100% mobile responsive design",
            "95+ Google PageSpeed score",
          ],

          websiteUrl: "https://egian.al",
          status: "Live & Active",
        },
        // You can add more projects here
      ],
      cta: {
        title: "Ready to Start Your Project?",
        description:
          "We're excited to bring the same level of dedication and innovation to your next project. Let's create something amazing together.",
        button: "Get Started",
        contact: "Contact Us",
      },
    },
    al: {
      heading: "Puna Jonë",
      subheading: "Projektet tona",
      blurb:
        "Eksploroni portofolon tonë të projekteve të suksesshme. Nga klinika mjekësore tek faqet e biznesit, krijojmë përvojë dixhitale që sjellin rezultate.",
      projects: [
        {
          title: "Egian by Intermedica",
          description:
            "Faqe moderne klinike mjekësore me sistem rezervimi takimesh",
          image: "/egian.png", // You can replace with actual project image
          category: "Shëndetësi",
          results: [
            "50% rritje në takime online",
            "40% përmirësim në angazhimin e përdoruesve",
            "100% dizajn përgjigjes mobile",
            "95+ rezultat Google PageSpeed",
          ],

          websiteUrl: "https://egian.al",
          status: "Live & Aktive",
        },
        // You can add more projects here
      ],
      cta: {
        title: "Gati për të Filluar Projektin Tuaj?",
        description:
          "Jemi të emocionuar të sillim të njëjtin nivel përkushtimi dhe inovacioni në projektin tuaj të ardhshëm. Le të krijojmë diçka të mrekullueshme së bashku.",
        button: "Fillo",
        contact: "Na Kontaktoni",
      },
    },
  }[lang];

  return (
    <section className="py-20 lg:py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-lime-400/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-green-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
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
        {/* Project Cards Grid */}
        <div className="flex justify-center mb-16">
          <div className="grid lg:grid-cols-1 gap-6 max-w-4xl mx-auto w-full">
            {t.projects.map((project, index) => (
              <div
                key={index}
                className="group bg-black/40 border border-lime-500/20 rounded-2xl overflow-hidden backdrop-blur-sm shadow-[0_0_30px_rgba(163,230,53,0.1)] hover:shadow-[0_0_40px_rgba(163,230,53,0.2)] transition-all duration-500 hover:border-lime-400/40"
              >
                {/* Project Image */}
                <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 1200px"
                    quality={95}
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                {/* Project Content */}
                <div className="p-4 sm:p-6">
                  <div className="mb-4">
                    {/* Title and Badges - Stack on mobile */}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-lime-400 transition-colors">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-2 flex-wrap">
                        <span className="px-2 sm:px-3 py-1 bg-green-500/20 border border-green-500/40 rounded-full text-green-300 text-xs font-medium backdrop-blur-sm">
                          {project.status}
                        </span>
                        <span className="px-2 sm:px-3 py-1 bg-lime-500/20 border border-lime-500/40 rounded-full text-lime-300 text-xs font-medium backdrop-blur-sm">
                          {project.category}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-300 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Impact Results */}
                  <div className="mb-6">
                    <h4 className="text-white font-medium text-sm mb-3">
                      {lang === "en" ? "Key Results" : "Rezultatet Kryesore"}
                    </h4>
                    <div className="grid grid-cols-1 gap-3">
                      {project.results.map((result, resultIndex) => (
                        <div
                          key={resultIndex}
                          className="flex items-start gap-3"
                        >
                          <div className="flex-shrink-0 w-4 h-4 bg-lime-500/10 border border-lime-500/30 rounded flex items-center justify-center mt-0.5">
                            <svg
                              className="w-2.5 h-2.5 text-lime-400"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-300 text-sm leading-relaxed">
                            {result}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={project.websiteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-lime-500/40 bg-lime-500/10 px-6 py-4 text-lime-300 hover:bg-lime-500/20 hover:border-lime-400/60 focus:outline-none focus:ring-2 focus:ring-lime-400/50 transition-all duration-300 font-medium shadow-[0_0_15px_rgba(163,230,53,0.1)] hover:shadow-[0_0_25px_rgba(163,230,53,0.2)] text-center"
                  >
                    {lang === "en" ? "View Live Site" : "Shiko Faqen Live"}
                    <svg
                      className="w-4 h-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>{" "}
        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
            <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
              {t.cta.title}
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
              {t.cta.description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`/${lang}/contact`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-lime-500/40 bg-lime-500/10 px-8 py-4 text-lime-300 hover:bg-lime-500/20 hover:border-lime-400/60 focus:outline-none focus:ring-2 focus:ring-lime-400/50 transition-all duration-300 font-medium shadow-[0_0_20px_rgba(163,230,53,0.1)] hover:shadow-[0_0_30px_rgba(163,230,53,0.2)]"
              >
                {t.cta.button}
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
              <a
                href={`/${lang}/services`}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-gray-600 bg-gray-800/50 px-8 py-4 text-gray-300 hover:bg-gray-700/50 hover:border-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-500/50 transition-all duration-300 font-medium"
              >
                {lang === "en" ? "View Services" : "Shiko Shërbimet"}
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
      </div>
    </section>
  );
}
