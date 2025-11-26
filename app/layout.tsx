import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Culinary Collective | Food & Beverage Consulting",
    template: "%s | Culinary Collective",
  },
  description:
    "Transforming food & beverage operations through expert consulting, innovative menu design, and workflow optimization.",
  keywords: [
    "F&B consulting",
    "restaurant consulting",
    "menu design",
    "culinary consulting",
    "workflow optimization",
  ],
  authors: [{ name: "Culinary Collective" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://culinarycollective.com",
    siteName: "Culinary Collective",
    title: "Culinary Collective | Food & Beverage Consulting",
    description:
      "Transforming food & beverage operations through expert consulting, innovative menu design, and workflow optimization.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Culinary Collective",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Culinary Collective | Food & Beverage Consulting",
    description:
      "Transforming food & beverage operations through expert consulting.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
