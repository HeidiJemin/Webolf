export default function Testimonials({ lang = "en" }: { lang?: "en" | "al" }) {
  const t = {
    en: {
      heading: "What our clients say",
      subheading: "Real feedback from our valued clients",
    },
    al: {
      heading: "Çfarë thonë klientët tanë",
      subheading: "Reagime të vërteta nga klientët tanë të çmuar",
    },
  }[lang];

  const testimonials = {
    en: [
      {
        quote:
          "They built our new medical center website and the whole process was smooth and professional. Patients love how easy it is to contact and find information. We highly recommend them to any healthcare provider looking for a reliable web partner.",
        author: "Egian by Intermedica",
        position: "",
        clinic: "",
      },
    ],
    al: [
      {
        quote:
          "Krijimi i faqes tonë të re të qendrës mjekësore dhe i gjithë procesi ishte i lehtë dhe profesional. Pacientët e vlerësojnë shumë sa e thjeshtë është të kontaktojne dhe të gjejnë informacionin. I rekomandojmë pa hezitim çdo ofruesi shëndetësor që kërkon një partner të besueshëm në web.",
        author: "Egian by Intermedica",
        position: "",
        clinic: "",
      },
    ],
  }[lang];

  return (
    <section className="py-16 bg-black/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-300 bg-clip-text text-transparent">
              {t.heading}
            </span>
          </h2>
          <p className="text-gray-300 text-lg">{t.subheading}</p>
        </div>

        <div className="flex justify-center">
          {testimonials.map((testimonial, i) => (
            <blockquote
              key={i}
              className="relative rounded-xl border border-lime-500/30 bg-black/40 backdrop-blur-sm p-6 text-gray-200 hover:border-lime-400/50 transition-all duration-300 max-w-lg w-full"
            >
              <div className="absolute top-4 left-6 text-lime-400/30 text-4xl font-serif">
                &ldquo;
              </div>
              <p className="mb-6 mt-6 text-gray-200 leading-relaxed italic text-center">
                {testimonial.quote}
              </p>
              <div className="border-t border-lime-500/20 pt-4">
                <cite className="not-italic text-center block">
                  <div className="font-semibold text-white text-sm">
                    {testimonial.author}
                  </div>
                  {testimonial.position && (
                    <div className="text-lime-400 text-xs font-medium">
                      {testimonial.position}
                    </div>
                  )}
                  {testimonial.clinic && (
                    <div className="text-gray-400 text-xs">
                      {testimonial.clinic}
                    </div>
                  )}
                </cite>
              </div>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
