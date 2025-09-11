"use client";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

export default function Contact({ lang = "en" }: { lang?: "en" | "al" }) {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const t = {
    en: {
      title: "Get in touch",
      subtitle: "Ready to start your project? Let's talk.",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Message",
        send: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! We'll get back to you soon.",
        error: "Failed to send message. Please try again.",
      },
      info: {
        title: "Contact Information",
        email: "info@webolf.tech",
        phone: "+355 69 123 4567",
        response: "Response within 24 hours",
      },
    },
    al: {
      title: "Na kontaktoni",
      subtitle: "Gati të filloni projektin tuaj? Le të flasim.",
      form: {
        name: "Emri i Plotë",
        email: "Adresa Email",
        subject: "Subjekti",
        message: "Mesazhi",
        send: "Dërgo Mesazhin",
        sending: "Duke dërguar...",
        success: "Mesazhi u dërgua me sukses! Do t'ju përgjigjemi së shpejti.",
        error: "Dështoi në dërgimin e mesazhit. Provoni përsëri.",
      },
      info: {
        title: "Informacioni i Kontaktit",
        email: "info@webolf.tech",
        phone: "+355 69 123 4567",
        response: "Përgjigje brenda 24 orëve",
      },
    },
  }[lang];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      await emailjs.sendForm(
        "service_9qd0rae", // Your EmailJS service ID
        "template_5guhw8d", // Your EmailJS template ID
        form.current,
        "DNwMIs-IT1IKVZAiT" // Your EmailJS public key
      );

      setSubmitStatus("success");
      form.current.reset();

      // Hide success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      console.error("EmailJS error:", error);
      setSubmitStatus("error");

      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 lg:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-0 w-full h-96 bg-gradient-to-r from-transparent via-lime-400/10 to-transparent -skew-y-12" />
        <div className="absolute bottom-1/4 right-0 w-2/3 h-80 bg-gradient-to-l from-transparent via-green-500/10 to-transparent skew-y-6" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            {t.title}
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {t.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <div className="order-2 lg:order-1">
            <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      name="user_name"
                      placeholder={t.form.name}
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-lime-500/30 rounded-xl text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-all"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="user_email"
                      placeholder={t.form.email}
                      required
                      className="w-full px-4 py-3 bg-black/60 border border-lime-500/30 rounded-xl text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-all"
                    />
                  </div>
                </div>

                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder={t.form.subject}
                    required
                    className="w-full px-4 py-3 bg-black/60 border border-lime-500/30 rounded-xl text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-all"
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    placeholder={t.form.message}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-black/60 border border-lime-500/30 rounded-xl text-white placeholder-gray-400 focus:border-lime-500 focus:outline-none focus:ring-2 focus:ring-lime-500/20 transition-all resize-none"
                  />
                </div>

                {/* Success Message */}
                {submitStatus === "success" && (
                  <div className="p-4 bg-lime-500/10 border border-lime-500/30 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
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
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <p className="text-lime-400 text-sm font-medium">
                        {t.form.success}
                      </p>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === "error" && (
                  <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-xl animate-in fade-in slide-in-from-bottom-2 duration-300">
                    <div className="flex items-center gap-3">
                      <div className="flex-shrink-0">
                        <svg
                          className="w-5 h-5 text-red-400"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </div>
                      <p className="text-red-400 text-sm font-medium">
                        {t.form.error}
                      </p>
                    </div>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-8 py-4 bg-gradient-to-r from-lime-500 to-green-600 text-black font-semibold rounded-xl shadow-lg shadow-lime-500/25 hover:shadow-lime-500/40 hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        className="animate-spin w-4 h-4"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          className="opacity-25"
                        />
                        <path
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          className="opacity-75"
                        />
                      </svg>
                      {t.form.sending}
                    </div>
                  ) : (
                    t.form.send
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="order-1 lg:order-2">
            <div className="bg-black/40 border border-lime-500/20 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold text-white mb-6">
                {t.info.title}
              </h3>
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-center gap-4">
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
                    <a
                      href={`mailto:${t.info.email}`}
                      className="text-white hover:text-lime-400 transition-colors font-medium"
                    >
                      {t.info.email}
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-4">
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
                    <a
                      href={`tel:${t.info.phone}`}
                      className="text-white hover:text-lime-400 transition-colors font-medium"
                    >
                      {t.info.phone}
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-center gap-4">
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
