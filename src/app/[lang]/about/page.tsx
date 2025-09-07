import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import type { Locale } from "@/lib/i18n";
import { isLocale, defaultLocale } from "@/lib/i18n";

export default async function AboutPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const _lang: Locale = isLocale(lang) ? (lang as Locale) : defaultLocale;
  return (
    <main className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0 bg-black">
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/4 left-0 w-full h-96 bg-gradient-to-r from-transparent via-lime-400/20 to-transparent -skew-y-12 animate-pulse opacity-60" />
          <div className="absolute top-1/3 right-0 w-3/4 h-80 bg-gradient-to-l from-transparent via-green-500/15 to-transparent skew-y-6 animate-pulse delay-1000 opacity-40" />
        </div>
        <div className="absolute inset-0">
          <div
            className="absolute top-1/2 left-1/4 w-2/3 h-64 bg-gradient-to-br from-lime-300/10 via-transparent to-green-600/10 rounded-full blur-3xl animate-bounce opacity-30"
            style={{ animationDuration: "6s" }}
          />
          <div
            className="absolute bottom-1/4 right-1/4 w-1/2 h-48 bg-gradient-to-tl from-emerald-400/15 via-transparent to-lime-500/15 rounded-full blur-2xl animate-bounce delay-2000 opacity-25"
            style={{ animationDuration: "8s" }}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-radial from-transparent via-black/50 to-black opacity-80" />
      </div>

      <div className="relative z-10">
        <About lang={_lang} />
        <Testimonials lang={_lang} />
        <Footer lang={_lang} />
      </div>
    </main>
  );
}
