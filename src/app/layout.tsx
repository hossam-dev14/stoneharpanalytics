import { ReactNode } from "react";
import {
  defaultOpenGraph,
  defaultTwitter,
  metaDesc,
  metaTitle,
} from "@/consts";
import Header from "@/components/layout/header/header";
import Footer from "@/components/layout/footer/footer";
import {
  cn,
  // bbTorsosPro
} from "@/utils";
import { Poppins } from 'next/font/google';

import { APP_ENV, SITE_URL } from "@/config";
import "@/app/globals.css";


const poppins = Poppins({
  weight: '400', // Regular weight
  subsets: ['latin'],
});

export const metadata = {
  title: {
    template: `%s |${metaTitle}`,
    default: metaTitle,
  },
  description: metaDesc,
  keywords: ["Stone Harp Analytics", "Analytics", "Data Science"],
  formatDetection: {
    telephone: false,
  },
  metadataBase: new URL(SITE_URL),
  openGraph: {
    ...defaultOpenGraph,
    title: metaTitle,
    description: metaDesc,
    url: SITE_URL,
  },
  twitter: {
    ...defaultTwitter,
    title: metaTitle,
    description: metaDesc,
    site: "@StoneHarp",
  },
  robots: {
    index: APP_ENV === "production",
    follow: APP_ENV === "production",
    "max-image-preview": "large",
    "max-video-preview": -1,
    "max-snippet": -1,
    googleBot: {
      index: APP_ENV === "production",
      follow: APP_ENV === "production",
      "max-image-preview": "large",
      "max-video-preview": -1,
      "max-snippet": -1,
    },
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#a64e1f",
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className="scroll-smooth" >
      <body
        className={cn(
          `${poppins.className}`,
          'antialiased',
          // font-bbTorsosPro 
          'bg-primary'
        )}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
