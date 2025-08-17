"use client";
import { useState } from "react";

export default function Contact({ lang = "en" }: { lang?: "en" | "sq" }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const t = {
    en: {
      heading: "Let's Build Something Amazing",

      blurb:
        "Ready to transform your vision into reality? Tell us about your project and let's create something extraordinary together.",
      name: "Your Name",
      email: "Email Address",
      message: "Tell us about your project...",
      send: "Send Message",
      sending: "Sending...",
      info: {
        title: "Get in Touch",
        email: "hello@webcraft.com",
        phone: "+355 123 456 789",
        response: "We'll respond within 24 hours",
      },
    },
    sq: {
      heading: "Le të Ndërtojmë Diçka të Mrekullueshme",

      blurb:
        "Gati të transformoni vizionin tuaj në realitet? Na tregoni për projektin tuaj dhe le të krijojmë diçka të jashtëzakonshme së bashku.",
      name: "Emri Juaj",
      email: "Adresa Email",
      message: "Na tregoni për projektin tuaj...",
      send: "Dërgo Mesazhin",
      sending: "Duke dërguar...",
      info: {
        title: "Kontaktoni me Ne",
        email: "hello@webcraft.com",
        phone: "+355 123 456 789",
        response: "Do t'u përgjigjemi brenda 24 orëve",
      },
    },
  }[lang];

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className=" lg:pt-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-gradient-to-l from-lime-400/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-gradient-to-r from-green-500/10 via-transparent to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-lime-400 via-green-500 to-lime-300 bg-clip-text text-transparent">
              {t.heading}
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            {t.blurb}
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-lime-500/20 p-4 text-gray-100 placeholder:text-gray-500 focus:border-lime-400/60 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 group-hover:border-lime-500/30"
                    placeholder={t.name}
                  />
                </div>
                <div className="group">
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    {t.email}
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full rounded-xl bg-black/40 border border-lime-500/20 p-4 text-gray-100 placeholder:text-gray-500 focus:border-lime-400/60 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 group-hover:border-lime-500/30"
                    placeholder={t.email}
                  />
                </div>
              </div>
              <div className="group">
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  {t.message}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full rounded-xl bg-black/40 border border-lime-500/20 p-4 text-gray-100 placeholder:text-gray-500 focus:border-lime-400/60 focus:bg-black/60 focus:outline-none focus:ring-2 focus:ring-lime-400/20 transition-all duration-300 resize-none group-hover:border-lime-500/30"
                  placeholder={t.message}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-xl border border-lime-500/40 bg-lime-500/10 px-8 py-4 text-lime-300 hover:bg-lime-500/20 hover:border-lime-400/60 focus:outline-none focus:ring-2 focus:ring-lime-400/50 transition-all duration-300 font-medium shadow-[0_0_20px_rgba(163,230,53,0.1)] hover:shadow-[0_0_30px_rgba(163,230,53,0.2)] disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-lime-400 border-t-transparent rounded-full animate-spin"></div>
                    {t.sending}
                  </>
                ) : (
                  <>
                    {t.send}
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
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      />
                    </svg>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {t.info.title}
              </h3>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-500/10 border border-lime-500/30 rounded-xl flex items-center justify-center">
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
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm uppercase tracking-wide mb-1">
                      Email
                    </p>
                    <a
                      href={`mailto:${t.info.email}`}
                      className="text-white hover:text-lime-400 transition-colors font-medium"
                    >
                      {t.info.email}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-500/10 border border-lime-500/30 rounded-xl flex items-center justify-center">
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
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm uppercase tracking-wide mb-1">
                      Phone
                    </p>
                    <a
                      href={`tel:${t.info.phone}`}
                      className="text-white hover:text-lime-400 transition-colors font-medium"
                    >
                      {t.info.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-lime-500/10 border border-lime-500/30 rounded-xl flex items-center justify-center">
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
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm uppercase tracking-wide mb-1">
                      Response Time
                    </p>
                    <p className="text-white font-medium">{t.info.response}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
