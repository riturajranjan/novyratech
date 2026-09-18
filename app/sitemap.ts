import type { MetadataRoute } from "next";

const SITE_URL = "https://novyratech-new.vercel.app";

// Only real, live routes go here. Add nav pages like /services, /industries, /work
// once they exist — they currently 404, so listing them would mislead crawlers.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: `${SITE_URL}/`, lastModified: new Date(), changeFrequency: "weekly", priority: 1 },
    { url: `${SITE_URL}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
    { url: `${SITE_URL}/terms`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.2 },
  ];
}
