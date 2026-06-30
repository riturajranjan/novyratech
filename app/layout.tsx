import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import { ThemeProvider } from "@/providers/theme-provider";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});
const space = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lumenlabs.dev"),
  title: {
    default: "Novyra Technologies — Software that moves you forward",
    template: "%s | Novyra Technologies",
  },
  description:
    "Novyra Technologies is a software studio building SaaS, AI agents, and web platforms for founders and teams who care about the details.",
  keywords: [
    "SaaS development",
    "CRM development",
    "ERP software",
    "AI solutions",
    "software studio",
    "Novyra Technologies",
  ],
  openGraph: {
    title: "Novyra Technologies — Software that moves you forward",
    description:
      "We design and build SaaS, AI agents, and web platforms for founders and teams who care about the details.",
    type: "website",
    siteName: "Novyra Technologies",
  },
  twitter: {
    card: "summary_large_image",
    title: "Novyra Technologies",
    description: "Software that moves you forward.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${space.variable} ${jetbrains.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange>
          <div className="relative min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}
