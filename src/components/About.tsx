export default function About({ lang = "en" }: { lang?: "en" | "sq" }) {
  const t = {
    en: {
      heading: "About Webolf",
      subtitle: "Fresh Vision, Experienced Hands",
      intro:
        "We are a newborn web agency with a bold vision and seasoned expertise. Our team of developers brings 3+ years of experience, combining fresh perspectives with proven technical skills to deliver exceptional business and technology solutions.",
      mission: {
        title: "Our Mission",
        description:
          "To empower businesses with cutting-edge web solutions that drive growth, enhance user experience, and create lasting digital impact. We believe that great technology should be accessible to everyone, from startups to established enterprises.",
      },
      values: {
        title: "What Drives Us",
        items: [
          {
            title: "Innovation First",
            description:
              "We embrace the latest technologies and methodologies to build future-proof solutions that give our clients a competitive edge.",
          },
          {
            title: "Quality Obsessed",
            description:
              "Every line of code, every design element, and every user interaction is crafted with meticulous attention to detail and performance.",
          },
          {
            title: "Client Partnership",
            description:
              "We don't just build websites; we forge partnerships. Your success is our success, and we're committed to your long-term growth.",
          },
          {
            title: "Transparent Process",
            description:
              "From initial consultation to final delivery, we maintain clear communication and provide regular updates throughout the development journey.",
          },
        ],
      },
      team: {
        title: "Our Expertise",
        description:
          "Though we're a fresh face in the industry, our team combines years of individual experience with an entrepreneurial spirit that drives us to exceed expectations.",
        stats: [
          {
            number: "3+",
            label: "Years Experience",
            sublabel: "Per Developer",
          },
          {
            number: "100%",
            label: "Client Satisfaction",
            sublabel: "Our Commitment",
          },
          {
            number: "24/7",
            label: "Support Ready",
            sublabel: "When You Need Us",
          },
          {
            number: "∞",
            label: "Growth Potential",
            sublabel: "Together We Build",
          },
        ],
      },
      approach: {
        title: "How We Work",
        description:
          "Our development process is designed to minimize risk while maximizing innovation. We believe in agile methodologies, continuous communication, and iterative improvement.",
        steps: [
          {
            step: "01",
            title: "Discovery & Strategy",
            description:
              "We dive deep into your business goals, target audience, and technical requirements to create a comprehensive project roadmap.",
          },
          {
            step: "02",
            title: "Design & Planning",
            description:
              "Our team crafts user-centered designs and technical architectures that align with your brand and business objectives.",
          },
          {
            step: "03",
            title: "Development & Testing",
            description:
              "Using modern technologies and best practices, we build robust, scalable solutions with rigorous testing at every stage.",
          },
          {
            step: "04",
            title: "Launch & Support",
            description:
              "We ensure smooth deployment and provide ongoing support to keep your digital presence running at peak performance.",
          },
        ],
      },
      cta: {
        title: "Ready to Build Something Amazing?",
        description:
          "Let's turn your vision into reality. Our team is excited to bring fresh energy and proven expertise to your next project.",
        button: "Start Your Project",
        contact: "Get in Touch",
      },
    },
    sq: {
      heading: "Rreth Webolf",
      subtitle: "Vizione e Freskët, Duar të Përvojshme",
      intro:
        "Ne jemi një agjenci e re ueb me një vizion të guximshëm dhe ekspertizë të pjekur. Ekipi ynë i zhvilluesve sjell 3+ vjet përvojë, duke kombinuar perspektiva të freskëta me aftësi teknike të provuara për të ofruar zgjidhje të jashtëzakonshme biznesi dhe teknologjie.",
      mission: {
        title: "Misioni Ynë",
        description:
          "Të fuqizojmë bizneset me zgjidhje ueb novatore që nxisin rritjen, përmirësojnë përvojën e përdoruesit dhe krijojnë ndikim të qëndrueshëm dixhital. Ne besojmë se teknologjia e mirë duhet të jetë e arritshme për të gjithë, nga startup-et deri tek ndërmarrjet e etabluara.",
      },
      values: {
        title: "Çfarë Na Shtyn",
        items: [
          {
            title: "Inovacioni i Parë",
            description:
              "Ne përqafojmë teknologjitë dhe metodologjitë më të fundit për të ndërtuar zgjidhje të sigurta për të ardhmen që u japin klientëve tanë një avantazh konkurrues.",
          },
          {
            title: "Të Obseduar me Cilësinë",
            description:
              "Çdo rresht kodi, çdo element dizajni dhe çdo ndërveprim përdoruesi është krijuar me vëmendje të detajuar metikuloze dhe performancë.",
          },
          {
            title: "Partneritet me Klientin",
            description:
              "Ne nuk ndërtojmë vetëm faqe interneti; ne krijojmë partneritete. Suksesi juaj është suksesi ynë, dhe ne jemi të përkushtuar ndaj rritjes suaj afatgjatë.",
          },
          {
            title: "Proces Transparent",
            description:
              "Nga konsultimi fillestar deri tek dorëzimi përfundimtar, ne mbajmë komunikim të qartë dhe ofrojmë përditësime të rregullta gjatë gjithë udhëtimit zhvillimor.",
          },
        ],
      },
      team: {
        title: "Ekspertiza Jonë",
        description:
          "Edhe pse jemi një fytyrë e re në industri, ekipi ynë kombinon vite përvojë individuale me një frymë sipërmarrëse që na shtyn të tejkalojmë pritshmëritë.",
        stats: [
          { number: "3+", label: "Vjet Përvojë", sublabel: "Për Zhvillues" },
          {
            number: "100%",
            label: "Kënaqësi Klienti",
            sublabel: "Angazhimi Ynë",
          },
          {
            number: "24/7",
            label: "Mbështetje Gati",
            sublabel: "Kur Na Duhet",
          },
          {
            number: "∞",
            label: "Potencial Rritjeje",
            sublabel: "Së Bashku Ndërtojmë",
          },
        ],
      },
      approach: {
        title: "Si Punojmë",
        description:
          "Procesi ynë zhvillimor është krijuar për të minimizuar rrezikun duke maksimizuar inovacionin. Ne besojmë në metodologji të shkatëta, komunikim të vazhdueshëm dhe përmirësim të përsëritur.",
        steps: [
          {
            step: "01",
            title: "Zbulimi & Strategjia",
            description:
              "Ne zhytemi thellë në objektivat tuaja të biznesit, audiencën e synuar dhe kërkesat teknike për të krijuar një hartë rruge të plotë projekti.",
          },
          {
            step: "02",
            title: "Dizajni & Planifikimi",
            description:
              "Ekipi ynë krijon dizajne të përqendruara tek përdoruesi dhe arkitektura teknike që përputhen me markën dhe objektivat tuaja të biznesit.",
          },
          {
            step: "03",
            title: "Zhvillimi & Testimi",
            description:
              "Duke përdorur teknologji moderne dhe praktikat më të mira, ne ndërtojmë zgjidhje të forta dhe të shkallëzueshme me teste rigoroze në çdo fazë.",
          },
          {
            step: "04",
            title: "Lançimi & Mbështetja",
            description:
              "Ne sigurojmë vendosje të qetë dhe ofrojmë mbështetje të vazhdueshme për të mbajtur prezencën tuaj dixhitale duke punuar me performancë maksimale.",
          },
        ],
      },
      cta: {
        title: "Gati të Ndërtoni Diçka të Mahnitshme?",
        description:
          "Le të kthejmë vizionin tuaj në realitet. Ekipi ynë është i emocionuar të sjellë energji të freskët dhe ekspertizë të provuar në projektin tuaj të ardhshëm.",
        button: "Filloni Projektin Tuaj",
        contact: "Kontaktoni",
      },
    },
  }[lang];

  return (
    <section className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-300 bg-clip-text text-transparent">
              {t.heading}
            </span>
          </h1>
          <p className="text-xl lg:text-2xl text-lime-300 mb-8 font-medium">
            {t.subtitle}
          </p>
          <p className="text-gray-300 text-lg leading-relaxed max-w-4xl mx-auto">
            {t.intro}
          </p>
        </div>

        {/* Mission Section */}
        <div className="mb-20">
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t.mission.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              {t.mission.description}
            </p>
          </div>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-12 text-center">
            {t.values.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {t.values.items.map((value, index) => (
              <div
                key={index}
                className="bg-black/40 border border-lime-500/20 rounded-xl p-6 backdrop-blur-sm hover:border-lime-400/30 transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-lime-400 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Stats Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t.team.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              {t.team.description}
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.team.stats.map((stat, index) => (
              <div
                key={index}
                className="bg-black/40 border border-lime-500/20 rounded-xl p-6 text-center backdrop-blur-sm"
              >
                <div className="text-4xl lg:text-5xl font-bold text-lime-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-white font-semibold mb-1">
                  {stat.label}
                </div>
                <div className="text-gray-400 text-sm">{stat.sublabel}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Approach Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
              {t.approach.title}
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed max-w-3xl mx-auto">
              {t.approach.description}
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t.approach.steps.map((step, index) => (
              <div
                key={index}
                className="bg-black/40 border border-lime-500/20 rounded-xl p-6 backdrop-blur-sm relative overflow-hidden group hover:border-lime-400/30 transition-all duration-300"
              >
                <div className="text-6xl font-bold text-lime-500/10 absolute top-2 right-2 group-hover:text-lime-500/20 transition-colors duration-300">
                  {step.step}
                </div>
                <div className="relative z-10">
                  <h3 className="text-lg font-bold text-lime-400 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 lg:p-12 backdrop-blur-sm">
            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-6">
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
