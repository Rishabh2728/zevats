import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { PageTransition } from "@/components/layout/PageTransition";
import { CustomCursor } from "@/components/animations/CustomCursor";
import { AviProvider } from "@/components/avi/AviContext";
import { AviLauncher } from "@/components/avi/AviLauncher";
import { AviChatModal } from "@/components/avi/AviChatModal";

export const metadata: Metadata = {
  title: "ZEVATS — Software & Digital Technology for Businesses",
  description:
    "We build websites, web applications, mobile apps, and custom software for businesses — engineered around how your company actually works.",
  keywords: [
    "Zevats",
    "Software Company",
    "Digital Products",
    "Web Applications",
    "SaaS Development",
    "Mobile Apps",
    "Custom Software",
    "Business Automation",
    "Applied AI",
  ],
  authors: [{ name: "Zevats" }],
  icons: {
    icon: "/brand/zevats-logo.png",
    shortcut: "/brand/zevats-logo.png",
    apple: "/brand/zevats-logo.png",
  },
  openGraph: {
    title: "ZEVATS — Software & Digital Technology for Businesses",
    description:
      "Websites, web apps, mobile applications, custom software, applied AI and business automation — engineered around how your company works.",
    siteName: "Zevats",
    images: [
      {
        url: "/brand/zevats-logo.png",
        width: 920,
        height: 195,
        alt: "ZEVATS",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#111111",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (typeof history !== 'undefined' && 'scrollRestoration' in history) {
                history.scrollRestoration = 'manual';
              }
            `,
          }}
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Geist:wght@300;400;500;600;700;800&family=Geist+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased bg-[#F4F1EA] text-[#111111] min-h-screen flex flex-col justify-between selection:bg-purple-200 selection:text-[#111111]">
        <AviProvider>
          {/* Subtle physical paper grain layer */}
          <div className="fixed inset-0 film-grain opacity-[0.025] pointer-events-none z-50" />

          {/* Subtle desktop interactive custom cursor */}
          <CustomCursor />

          {/* Integrated Editorial Navbar */}
          <Navbar />

          {/* Main Content Area */}
          <main className="relative z-10 flex-grow pt-[72px] md:pt-[84px]">
            <PageTransition>{children}</PageTransition>
          </main>

          {/* Minimal Footer */}
          <Footer />

          {/* Controlled AVI Assistant Launcher & Modal */}
          <AviLauncher />
          <AviChatModal />
        </AviProvider>
      </body>
    </html>
  );
}
