"use client";

export default function PrivacyPolicy({ lang = "en" }: { lang?: "en" | "al" }) {
  const t = {
    en: {
      title: "Privacy Policy",
      subtitle: "Your privacy is important to us",
      lastUpdated: "Last updated",
      sections: {
        introduction: {
          title: "Introduction",
          content: `Welcome to Webolf. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.`,
        },
        informationWeCollect: {
          title: "Information We Collect",
          content: `We collect information you provide directly to us, such as when you:`,
          items: [
            "Fill out contact forms on our website",
            "Communicate with us via email or phone",
            "Use our website and services",
          ],
        },
        typesOfInformation: {
          title: "Types of Information",
          personalInfo: {
            title: "Personal Information",
            content:
              "This may include your name, email address, phone number, and any other information you choose to provide.",
          },
          technicalInfo: {
            title: "Technical Information",
            content:
              "We automatically collect certain information about your device and how you interact with our website, including IP address, browser type, operating system, and usage data.",
          },
        },
        howWeUse: {
          title: "How We Use Your Information",
          content: "We use the information we collect to:",
          items: [
            "Provide and maintain our services",
            "Communicate with you about our services",
            "Respond to your inquiries and support requests",
            "Send you technical notices and security alerts",
            "Improve our website and services",
            "Comply with legal obligations",
          ],
        },
        informationSharing: {
          title: "Information Sharing",
          content:
            "We do not sell, trade, or otherwise transfer your personal information to third parties except in the following circumstances:",
          items: [
            "With your consent",
            "To comply with legal obligations",
            "To protect our rights and safety",
            "With service providers who assist us in operating our website",
          ],
        },
        dataSecurity: {
          title: "Data Security",
          content:
            "We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no internet transmission is completely secure.",
        },
        cookies: {
          title: "Cookies and Tracking",
          content:
            "Our website may use cookies and similar tracking technologies to enhance your browsing experience and analyze website traffic. You can control cookie settings through your browser preferences.",
        },
        dataRetention: {
          title: "Data Retention",
          content:
            "We retain your personal information only for as long as necessary to fulfill the purposes outlined in this Privacy Policy, unless a longer retention period is required by law.",
        },
        yourRights: {
          title: "Your Rights",
          content:
            "Depending on your location, you may have the following rights regarding your personal information:",
          items: [
            "Access to your personal information",
            "Correction of inaccurate information",
            "Deletion of your personal information",
            "Restriction of processing",
            "Data portability",
            "Objection to processing",
          ],
        },
        thirdPartyLinks: {
          title: "Third-Party Links",
          content:
            "Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites. We encourage you to review their privacy policies.",
        },
        updates: {
          title: "Policy Updates",
          content:
            "We may update this Privacy Policy from time to time. We will notify you of any significant changes by posting the new policy on our website with an updated effective date.",
        },
        contact: {
          title: "Contact Us",
          content:
            "If you have any questions about this Privacy Policy or our data practices, please contact us at:",
          email: "webolf.tech@gmail.com",
          phone: "+355 69 214 7006",
        },
      },
    },
    al: {
      title: "Politika e Privatësisë",
      subtitle: "Privatësia juaj është e rëndësishme për ne",
      lastUpdated: "Përditësuar për herë të fundit",
      sections: {
        introduction: {
          title: "Hyrje",
          content: `Mirë se vini në Webolf . Ne jemi të përkushtuar për të mbrojtur informacionin tuaj personal dhe të drejtën tuaj për privatësi. Kjo Politikë Privatësie shpjegon se si ne mbledhim, përdorim, zbulojmë dhe mbrojmë informacionin tuaj kur vizitoni faqen tonë të internetit ose përdorni shërbimet tona.`,
        },
        informationWeCollect: {
          title: "Informacioni që Mbledhim",
          content: `Ne mbledhim informacionin që na jepni drejtpërdrejt, si kur ju:`,
          items: [
            "Plotësoni formulare kontakti në faqen tonë të internetit",
            "Komunikoni me ne përmes email-it ose telefonit",
            "Përdorni faqen tonë të internetit dhe shërbimet",
          ],
        },
        typesOfInformation: {
          title: "Llojet e Informacionit",
          personalInfo: {
            title: "Informacioni Personal",
            content:
              "Kjo mund të përfshijë emrin tuaj, adresën e email-it, numrin e telefonit, emrin e kompanisë dhe çdo informacion tjetër që zgjidhni të jepni.",
          },
          technicalInfo: {
            title: "Informacioni Teknik",
            content:
              "Ne mbledhim automatikisht informacion të caktuar për pajisjen tuaj dhe se si ndërveproni me faqen tonë të internetit, duke përfshirë adresën IP, llojin e shfletuesit, sistemin operativ dhe të dhënat e përdorimit.",
          },
        },
        howWeUse: {
          title: "Si e Përdorim Informacionin Tuaj",
          content: "Ne përdorim informacionin që mbledhim për të:",
          items: [
            "Ofruar dhe mirëmbajtur shërbimet tona",
            "Komunikuar me ju për shërbimet tona",
            "Iu përgjigjur pyetjeve dhe kërkesave tuaja për mbështetje",
            "Ju dërguar njoftimet teknike dhe alertet e sigurisë",
            "Përmirësuar faqen tonë të internetit dhe shërbimet",
            "Respektuar detyrimet ligjore",
          ],
        },
        informationSharing: {
          title: "Ndarja e Informacionit",
          content:
            "Ne nuk shesim, shkëmbejmë ose transferojmë ndryshe informacionin tuaj personal palëve të treta përveç në rrethanat e mëposhtme:",
          items: [
            "Me pëlqimin tuaj",
            "Për të respektuar detyrimet ligjore",
            "Për të mbrojtur të drejtat dhe sigurinë tonë",
            "Me ofruesit e shërbimeve që na ndihmojnë në operimin e faqes sonë të internetit",
          ],
        },
        dataSecurity: {
          title: "Siguria e të Dhënave",
          content:
            "Ne zbatojmë masa të përshtatshme teknike dhe organizative sigurie për të mbrojtur informacionin tuaj personal kundër aksesit të paautorizuar, ndryshimit, zbulimit ose shkatërrimit. Megjithatë, asnjë transmetim interneti nuk është plotësisht i sigurt.",
        },
        cookies: {
          title: "Cookies dhe Gjurmimi",
          content:
            "Faqja jonë e internetit mund të përdorë cookies dhe teknologji të ngjashme gjurmimi për të përmirësuar përvojën tuaj të shfletimit dhe për të analizuar trafikun e faqes së internetit. Ju mund të kontrolloni cilësimet e cookies përmes preferencave të shfletuesit tuaj.",
        },
        dataRetention: {
          title: "Ruajtja e të Dhënave",
          content:
            "Ne ruajmë informacionin tuaj personal vetëm për aq kohë sa është e nevojshme për të përmbushur qëllimet e përshkruara në këtë Politikë Privatësie, përveç nëse kërkohet një periudhë më e gjatë ruajtjeje nga ligji.",
        },
        yourRights: {
          title: "Të Drejtat Tuaja",
          content:
            "Në varësi të vendndodhjes suaj, ju mund të keni të drejtat e mëposhtme në lidhje me informacionin tuaj personal:",
          items: [
            "Akses në informacionin tuaj personal",
            "Korrigjim i informacionit të pasaktë",
            "Fshirje e informacionit tuaj personal",
            "Kufizim i përpunimit",
            "Portabilitet i të dhënave",
            "Kundërshtim ndaj përpunimit",
          ],
        },
        thirdPartyLinks: {
          title: "Lidhjet e Palëve të Treta",
          content:
            "Faqja jonë e internetit mund të përmbajë lidhje me faqe të internetit të palëve të treta. Ne nuk jemi përgjegjës për praktikat e privatësisë të këtyre faqeve të jashtme. Ne ju inkurajojmë të rishikoni politikat e tyre të privatësisë.",
        },
        updates: {
          title: "Përditësimet e Politikës",
          content:
            "Ne mund të përditësojmë këtë Politikë Privatësie herë pas here. Ne do t'ju njoftojmë për çdo ndryshim të rëndësishëm duke postuar politikën e re në faqen tonë të internetit me një datë efektive të përditësuar.",
        },
        contact: {
          title: "Na Kontaktoni",
          content:
            "Nëse keni ndonjë pyetje për këtë Politikë Privatësie ose praktikat tona të të dhënave, ju lutemi na kontaktoni në:",
          email: "webolf.tech@gmail.com",
          phone: "+355 69 214 7006",
        },
      },
    },
  }[lang];

  return (
    <section className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-96 bg-gradient-to-r from-transparent via-lime-400/10 to-transparent -skew-y-12" />
        <div className="absolute bottom-1/4 right-0 w-2/3 h-80 bg-gradient-to-l from-transparent via-green-500/10 to-transparent skew-y-6" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-300 bg-clip-text text-transparent">
              {t.title}
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-4">
            {t.subtitle}
          </p>
          <p className="text-sm text-gray-400">
            {t.lastUpdated}:{" "}
            {new Date().toLocaleDateString(lang === "en" ? "en-US" : "sq-AL")}
          </p>
        </div>

        {/* Content */}
        <div className="space-y-12">
          {/* Introduction */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.introduction.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t.sections.introduction.content}
            </p>
          </div>

          {/* Information We Collect */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.informationWeCollect.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.sections.informationWeCollect.content}
            </p>
            <ul className="space-y-2">
              {t.sections.informationWeCollect.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Types of Information */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-6">
              {t.sections.typesOfInformation.title}
            </h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold text-lime-400 mb-3">
                  {t.sections.typesOfInformation.personalInfo.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.sections.typesOfInformation.personalInfo.content}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-lime-400 mb-3">
                  {t.sections.typesOfInformation.technicalInfo.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {t.sections.typesOfInformation.technicalInfo.content}
                </p>
              </div>
            </div>
          </div>

          {/* How We Use */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.howWeUse.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.sections.howWeUse.content}
            </p>
            <ul className="space-y-2">
              {t.sections.howWeUse.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Information Sharing */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.informationSharing.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.sections.informationSharing.content}
            </p>
            <ul className="space-y-2">
              {t.sections.informationSharing.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Data Security */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.dataSecurity.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t.sections.dataSecurity.content}
            </p>
          </div>

          {/* Cookies */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.cookies.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t.sections.cookies.content}
            </p>
          </div>

          {/* Data Retention */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.dataRetention.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t.sections.dataRetention.content}
            </p>
          </div>

          {/* Your Rights */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.yourRights.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.sections.yourRights.content}
            </p>
            <ul className="space-y-2">
              {t.sections.yourRights.items.map((item, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 text-gray-300"
                >
                  <div className="flex-shrink-0 w-2 h-2 bg-lime-400 rounded-full mt-2"></div>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Third Party Links */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.thirdPartyLinks.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t.sections.thirdPartyLinks.content}
            </p>
          </div>

          {/* Updates */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.updates.title}
            </h2>
            <p className="text-gray-300 leading-relaxed">
              {t.sections.updates.content}
            </p>
          </div>

          {/* Contact */}
          <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
            <h2 className="text-2xl font-bold text-white mb-4">
              {t.sections.contact.title}
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              {t.sections.contact.content}
            </p>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-lime-400"
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
                <a
                  href={`mailto:${t.sections.contact.email}`}
                  className="text-lime-400 hover:text-lime-300 transition-colors"
                >
                  {t.sections.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <svg
                  className="w-5 h-5 text-lime-400"
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
                <a
                  href={`tel:${t.sections.contact.phone}`}
                  className="text-lime-400 hover:text-lime-300 transition-colors"
                >
                  {t.sections.contact.phone}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
