export default function Testimonials({ lang = "en" }: { lang?: "en" | "sq" }) {
  const t = {
    en: { heading: "What clients say" },
    sq: { heading: "Çfarë thonë klientët" },
  }[lang];

  const items = [
    {
      quote:
        "They delivered beyond expectations. Our conversions are up 35% and the site is blazing fast.",
      author: "Marta, Volt SaaS",
    },
    {
      quote: "Clean design, great communication, and on-time delivery.",
      author: "Arben, LimeShop",
    },
  ];

  return (
    <section className="py-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-white mb-6">
          <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-300 bg-clip-text text-transparent">
            {t.heading}
          </span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {items.map((it, i) => (
            <blockquote
              key={i}
              className="rounded-xl border border-lime-500/30 bg-black/40 p-6 text-gray-200"
            >
              <p className="mb-3">“{it.quote}”</p>
              <cite className="text-sm text-gray-400">{it.author}</cite>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
