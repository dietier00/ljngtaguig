import type { MetadataRoute } from "next";

export default function robot(): MetadataRoute.Robots {
    const isProduction = process.env.NODE_ENV === "production";
  return {
    rules: {
        userAgent: "*",
        allow: isProduction ? "/" : undefined,
        disallow: isProduction ? undefined : "/",
    },
    sitemap: "https://ljngtaguig-xi.vercel.app/sitemap.xml",
    }
  };
