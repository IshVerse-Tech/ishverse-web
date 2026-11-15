import type { NextConfig } from "next";
import createNextIntlPlugin from "next-intl/plugin";

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  images: {
    // Let browsers keep optimized images for 7 days instead of re-checking
    // every visit. Cached copies cannot be invalidated, so when replacing an
    // image give the new file a new name (e.g. flow.jpg instead of board.jpg).
    minimumCacheTTL: 604800,
  },
  // On Vercel the optimizer's browser max-age follows the source image's
  // Cache-Control, so the product image folders carry the same 7-day
  // lifetime. Matches image files only — never HTML routes like /bloom/support.
  async headers() {
    return [
      {
        // Baseline security headers for every page and asset. Excludes /app
        // (rewritten to the separate IshRize app, which sets its own).
        source: "/((?!app(?:/|$)).*)",
        headers: [
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Content-Security-Policy", value: "frame-ancestors 'none'" },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=(), payment=(), usb=()",
          },
        ],
      },
      {
        source: "/:path((?:bloom|brand|gospel|workout)/.*\\.(?:png|jpe?g|svg|webp))",
        headers: [{ key: "Cache-Control", value: "public, max-age=604800" }],
      },
    ];
  },
  async rewrites() {
    return {
      // Proxy rize.ishverse.com/app/* → ish-rize-web Vercel deployment.
      // Runs before Next.js route resolution so /app/* never hits internal pages.
      beforeFiles: [
        // /app (exact, no trailing path) — Next.js /:path* requires a separator,
        // so the exact path needs its own entry to avoid falling through to Ishverse routing.
        {
          source: "/app",
          has: [{ type: "host", value: "rize.ishverse.com" }],
          destination: "https://ish-rize-web.vercel.app/app",
        },
        {
          source: "/app/:path*",
          has: [{ type: "host", value: "rize.ishverse.com" }],
          destination: "https://ish-rize-web.vercel.app/app/:path*",
        },
        // Browser-side fetch calls use /api/* (no /app prefix) — proxy those too,
        // except /api/support: the rize.ishverse.com/support form posts there and
        // it is this site's own route (app/api/support). The IshRize app has none.
        {
          source: "/api/:path((?!support(?:/|$)).*)",
          has: [{ type: "host", value: "rize.ishverse.com" }],
          destination: "https://ish-rize-web.vercel.app/app/api/:path",
        },
      ],
    };
  },
};

export default withNextIntl(nextConfig);
