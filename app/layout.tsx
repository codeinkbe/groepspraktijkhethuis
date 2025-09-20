import type { Metadata } from "next";
import "./globals.css";
import TopMenuBar from "@/app/components/TopMenuBar";
import FooterSection from "@/app/components/FooterSection";
import localFont from "next/font/local";
import Plausible from "next-plausible";

const acuminRegular = localFont({
  src: "../public/font/Acumin-RPro.woff",
  variable: "--font-acumin-regular",
});

const acuminItalic = localFont({
  src: "../public/font/Acumin-ItPro.woff",
  variable: "--font-acumin-italic",
});

const acuminBold = localFont({
  src: "../public/font/Acumin-BdPro.woff",
  variable: "--font-acumin-bold",
});

const acuminBoldItalic = localFont({
  src: "../public/font/Acumin-BdItPro.woff",
  variable: "--font-acumin-bold-italic",
});

export const metadata: Metadata = {
  title: "Groepspraktijk het huis",
  description: "Groepspraktijk voor kinderen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${acuminRegular.variable} ${acuminItalic.variable} ${acuminBold.variable} ${acuminBoldItalic.variable} antialiased bg-cream`}
      >
        <Plausible domain="groepspraktijkhethuis.be">
          <TopMenuBar />
          {children}
          <FooterSection />
        </Plausible>
      </body>
    </html>
  );
}
