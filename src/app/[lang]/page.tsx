import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import type { Locale } from "@/lib/i18n";
import { isLocale, defaultLocale } from "@/lib/i18n";

export default async function Home({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const _lang: Locale = isLocale(lang) ? (lang as Locale) : defaultLocale;
  return (
    <main className="min-h-screen">
      <Hero lang={_lang} />
      <Footer />
    </main>
  );
}
