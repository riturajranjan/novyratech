import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { ANNOUNCEMENT, BUSINESS_ADDRESS, CONTACT_EMAIL } from "@/lib/constants";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const SITE_URL = "https://novyratech-new.vercel.app";
const TITLE = "Novyra Technologies | Websites & Software in Muzaffarpur, Bihar";
const DESCRIPTION =
  "Novyra Technologies builds websites, web apps and software for schools, hospitals and local businesses in Muzaffarpur, Bihar and across Tier 2/3 India.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: TITLE,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: "Novyra Technologies",
    locale: "en_IN",
    type: "website",
    // TODO: replace with a dedicated 1200x630 social share image once designed.
    images: [{ url: "/images/hero/novyra-hero.webp", width: 1672, height: 941, alt: "Novyra Technologies" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/hero/novyra-hero.webp"],
  },
};

const LOCAL_BUSINESS_SCHEMA = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Novyra Technologies",
  description: DESCRIPTION,
  url: SITE_URL,
  telephone: ANNOUNCEMENT.phone,
  email: CONTACT_EMAIL,
  address: {
    "@type": "PostalAddress",
    addressLocality: BUSINESS_ADDRESS.locality,
    addressRegion: BUSINESS_ADDRESS.region,
    addressCountry: BUSINESS_ADDRESS.country,
  },
  areaServed: "IN",
  priceRange: "₹₹",
  sameAs: [],
  makesOffer: [
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Website Design & Development" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "SaaS & Web Applications" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "AI & Automation" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "Digital Marketing" } },
    { "@type": "Offer", itemOffered: { "@type": "Service", name: "UI/UX & Branding" } },
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plusJakarta.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-sans">
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(LOCAL_BUSINESS_SCHEMA) }}
        />
      </body>
    </html>
  );
}
