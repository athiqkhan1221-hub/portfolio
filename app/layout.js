import "./globals.css";
import { Manrope, Inter, JetBrains_Mono } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata = {
  title: "Athiq Khan — Software × AI × Creativity",
  description:
    "M. Athiq Khan — AIML engineering student at Dhaanish Ahmed Chennai College of Engineering. Building full-stack web applications, exploring AI-powered workflows, and crafting visual experiences.",
  keywords: [
    "Athiq Khan",
    "M. Athiq Khan",
    "Full-Stack Web Developer",
    "AIML Engineering Student",
    "React.js",
    "Node.js",
    "Python",
    "Chennai Developer",
    "AI Video Generation",
    "Prompt Engineering"
  ],
  authors: [{ name: "M. Athiq Khan" }],
  creator: "M. Athiq Khan",
  publisher: "M. Athiq Khan",
  metadataBase: new URL("https://athiqkhan.dev"),
  openGraph: {
    title: "Athiq Khan — Software × AI × Creativity",
    description:
      "I turn ideas into digital experiences. Portfolio of M. Athiq Khan, AIML engineering student and full-stack developer based in Chennai, India.",
    url: "https://athiqkhan.dev",
    siteName: "Athiq Khan Portfolio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/images/athiq-portrait-editorial.svg",
        width: 1200,
        height: 630,
        alt: "Athiq Khan — Software × AI × Creativity",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Athiq Khan — Software × AI × Creativity",
    description: "I turn ideas into digital experiences. Portfolio of M. Athiq Khan.",
    images: ["/images/athiq-portrait-editorial.svg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport = {
  themeColor: "#111311",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

import AthiqChatbot from "@/components/AthiqChatbot";
import PortfolioWrapper from "@/components/PortfolioWrapper";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} ${inter.variable} ${jetbrainsMono.variable} scroll-smooth`}
    >
      <body className="bg-[#111311] text-[#F4F3ED] antialiased selection:bg-[#C2F970] selection:text-[#111311]">
        <PortfolioWrapper>
          {children}
        </PortfolioWrapper>
        <AthiqChatbot />
      </body>
    </html>
  );
}
