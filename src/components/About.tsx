export default function About({ lang = "en" }: { lang?: "en" | "sq" }) {
  const t = {
    en: {
      heading: "About WebCraft",
      body: "We are a boutique web agency building fast, accessible, conversion‑focused websites and apps.",
    },
    sq: {
      heading: "Rreth WebCraft",
      body: "Ne jemi një agjenci e specializuar që ndërton faqe dhe aplikacione të shpejta, të aksesueshme dhe me fokus në konvertime.",
    },
  }[lang];

  return (
    <section className="py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
          <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-300 bg-clip-text text-transparent">
            {t.heading}
          </span>
        </h2>
        <p className="text-gray-300 text-lg">{t.body}</p>
      </div>
    </section>
  );
}
