import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-gabrielyandev.vercel.app"),
  title: "Gabriel Yan | Sistemas Web Sob Medida, PWAs & Landing Pages de Alta Conversão",
  description:
    "Desenvolvedor Full-Stack especializado em sistemas web corporativos, dashboards interativos, PWAs com suporte a APK Android e landing pages de alta conversão. Solicite seu orçamento.",
  authors: [{ name: "Gabriel Yan", url: "https://github.com/gabrielyandev" }],
  keywords: [
    "Gabriel Yan",
    "Desenvolvedor Full-Stack",
    "Sistemas Web Sob Medida",
    "Desenvolvimento de Software",
    "PWAs",
    "Capacitor Android",
    "Laravel",
    "Vue.js",
    "Next.js",
    "React",
    "Landing Pages de Alta Conversão",
    "Contratar Desenvolvedor Web"
  ],
  icons: {
    icon: "/assets/favicon.png",
    shortcut: "/assets/favicon.ico"
  },
  openGraph: {
    title: "Gabriel Yan | Sistemas Web Sob Medida, PWAs & Landing Pages",
    description:
      "Desenvolvedor Full-Stack especializado em sistemas web corporativos, dashboards interativos, PWAs e landing pages de alta conversão. Solicite uma proposta comercial.",
    url: "https://portfolio-gabrielyandev.vercel.app/",
    siteName: "Gabriel Yan - Engenharia de Software & Desenvolvimento Web",
    images: [
      {
        url: "/assets/img/projects/taskhub-kanban.png",
        width: 1200,
        height: 630,
        alt: "Cases de Sistemas Web por Gabriel Yan"
      }
    ],
    locale: "pt_BR",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Gabriel Yan | Sistemas Web Sob Medida, PWAs & Landing Pages",
    description:
      "Desenvolvedor Full-Stack especializado em sistemas corporativos, dashboards, PWAs e landing pages de conversão.",
    images: ["/assets/img/projects/taskhub-kanban.png"]
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={plusJakartaSans.variable}>
      <body className={plusJakartaSans.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
