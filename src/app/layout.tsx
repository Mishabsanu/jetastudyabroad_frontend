import type { Metadata } from "next";
import { Poppins, Roboto } from "next/font/google";
import "./globals.css";
import Layout from "@/components/Layout";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "Jeta Study Abroad",
  description: "Jet Study Abroad",
};

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const roboto = Roboto({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${roboto.variable} relative font-poppins`}
      >
        <Layout>
          <Toaster
            richColors
            position="top-right"
            duration={3000}
            closeButton
          />
          {children}
        </Layout>
      </body>
    </html>
  );
}
