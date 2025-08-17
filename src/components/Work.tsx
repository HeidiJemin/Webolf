export default function Work({ lang = "en" }: { lang?: "en" | "sq" }) {
  const t = {
    en: { heading: "Selected Work" },
    sq: { heading: "Punë të Zgjedhura" },
  }[lang];

  const projects = [
    { name: "Neon Studio", tag: "Brand site" },
    { name: "LimeShop", tag: "E‑commerce" },
    { name: "Volt SaaS", tag: "Marketing" },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
          <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-300 bg-clip-text text-transparent">
            {t.heading}
          </span>
        </h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article
              key={p.name}
              className="rounded-xl border border-lime-500/30 bg-black/40 p-6 text-gray-200 hover:border-lime-400/60"
            >
              <h3 className="font-semibold text-white">{p.name}</h3>
              <p className="text-sm text-gray-400">{p.tag}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
