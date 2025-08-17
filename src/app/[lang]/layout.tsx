import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "WebCraft — Neon web agency",
    template: "%s | WebCraft",
  },
};

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  await params; // ensure compatibility with Next.js 15 PageProps Promise type
  return <>{children}</>;
}
