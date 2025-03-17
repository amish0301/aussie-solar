import AppProvider from "@/contextApi/AppProvider";
import { Metadata } from "next";
import { Toaster } from "sonner";
import "../style/index.scss";
import "./globals.css";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}

export const metadata: Metadata = {
  title: {
    default: "Kangaroo Solar - Best Solar Panel Solutions in Australia",
    template: "%s - Kangaroo Solar",
  },
  description:
    "Kangaroo Solar provides expert solar panel installation, battery storage, and maintenance services across Australia. Save on electricity bills with clean energy solutions.",

  keywords: [
    "solar panels",
    "solar energy",
    "solar panel installation",
    "renewable energy solutions",
    "solar battery storage",
    "solar power Australia",
    "solar panel maintenance",
    "solar panel cleaning",
    "best solar company Australia",
  ],

  openGraph: {
    title:
      "Kangaroo Solar - Premium Solar Panel Installation & Battery Storage",
    description:
      "Power your home with top-tier solar panel systems, expert installations, and sustainable energy solutions. Trusted by thousands across Australia.",
    url: process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
    siteName: "Kangaroo Solar",
    images: [
      {
        url: "/assets/img/solar-panel.jpeg",
        width: 1200,
        height: 630,
        alt: "Solar Panels Installed on a Roof",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    site: "@KangarooSolar",
    title: "Kangaroo Solar - Trusted Solar Panel Installers in Australia",
    description:
      "Get high-quality solar panel installations, maintenance, and battery storage solutions with Kangaroo Solar.",
    images: ["/assets/img/solar-panel.jpg"],
  },
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000"
  ),
  alternates: {
    canonical: process.env.NEXT_PUBLIC_DOMAIN || "http://localhost:3000",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <html lang="en">
        <head>
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta
            name="description"
            content="Kangaroo Solar is an Australian-based company providing high-efficiency solar energy solutions. Discover top-quality solar panel installations, cleaning, and Wi-Fi monitoring for homes and businesses."
          />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, shrink-to-fit=no, maximum-scale=1"
          />
          <link rel="manifest" href="/site.webmanifest" />

          {/* <!-- Standard Favicon --> */}
          <link
            rel="icon"
            type="image/icon"
            href="/assets/img/fav-icon/favicon.ico"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/assets/img/fav-icon/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/assets/img/fav-icon/favicon-16x16.png"
          />
          {/* <!-- Apple Touch Icons --> */}
          <link
            rel="apple-touch-icon"
            type="image/png"
            href="/assets/img/fav-icon/apple-touch-icon.png"
          />

          {/* <!-- Android Chrome Icons --> */}
          <link
            rel="icon"
            type="image/png"
            sizes="192x192"
            href="/assets/img/fav-icon/android-chrome-192x192.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="512x512"
            href="/assets/img/fav-icon/android-chrome-512x512.png"
          />

          {/* preloading fonts - imporve LCP(Largest Contentful Paint) */}
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
          <link
            href="https://fonts.googleapis.com/css2?family=Sora:wght@100..800&display=swap"
            rel="stylesheet"
          />
        </head>

        <body suppressHydrationWarning={true}>
          <AppProvider>
            {children}
            <Toaster position="bottom-center" richColors theme="dark" />
          </AppProvider>
        </body>
      </html>
    </>
  );
}
