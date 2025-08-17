import type { NextConfig } from "next";

// App Router i18n is handled via the `[lang]` segment under `src/app/[lang]`.
// The `i18n` config in next.config is not supported in App Router and can cause
// redirect loops (e.g., "/" -> "/en" -> "/"). Keep this config empty or add
// other non-i18n settings here.
const nextConfig: NextConfig = {};

export default nextConfig;
