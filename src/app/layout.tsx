import type { Metadata, Viewport } from "next";
import { Inter, Space_Grotesk, Lora } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SalesChatbot } from "@/components/SalesChatbot";

import { Analytics } from "@vercel/analytics/next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
});
export const metadata: Metadata = {
  metadataBase: new URL("https://www.d2cora.com"),
  title: "D2CORA | Revenue-Driven SEO, Paid Acquisition & CRO Partner for Scaling D2C & B2B Brands",
  description: "We partner with ambitious US, UK & European D2C e-commerce and service brands to drive predictable revenue through technical SEO, AI search optimization (GEO), performance marketing, and high-converting web engineering.",
  keywords: [
    "SEO agency",
    "technical SEO agency",
    "CRO agency",
    "performance marketing agency",
    "D2C marketing agency",
    "Shopify SEO agency",
    "GEO AI search optimization",
    "paid acquisition agency",
    "B2B marketing agency",
    "ecommerce growth agency",
    "d2cora",
  ],
  alternates: {
    canonical: "https://d2cora.com",
    languages: {
      "en-US": "https://d2cora.com",
      "en-GB": "https://d2cora.com/uk",
      "de-DE": "https://d2cora.com/de",
      "x-default": "https://d2cora.com",
    },
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-TGTVC3LZ');`,
          }}
        />
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-YSS004F4T1"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-YSS004F4T1');
            `,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": ["Organization", "ProfessionalService"],
            "@id": "https://d2cora.com/#organization",
            "name": "D2CORA",
            "url": "https://d2cora.com",
            "logo": "https://d2cora.com/assets/d2cora%20full.svg",
            "description": "Revenue-driven SEO, paid acquisition, and CRO partner for scaling D2C and B2B brands across the US, UK, and Europe.",
            "areaServed": ["US", "GB", "DE", "NL", "EU"],
            "sameAs": [
              "https://www.linkedin.com/company/d2cora1",
              "https://x.com/Rahul___Bora",
              "https://www.instagram.com/d2cora.media/"
            ]
          }) }}
        />
      </head>
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          lora.variable,
          "min-h-screen font-sans antialiased selection:bg-[#3366FF]/25"
        )}
      >
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WPXXFKVN"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        <Navbar />
        {children}
        <Footer />
        <SalesChatbot />
        <Analytics />
      </body>
    </html>
  );
}
