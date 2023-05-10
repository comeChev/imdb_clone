import "./globals.css";
import { Content, Inter } from "next/font/google";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Providers from "./Providers";

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDB clone website for learning NextJS 13",
  viewport: "with=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        <Providers>
          {/* Header */}
          <Header />

          {/* Navbar */}
          <Navbar />

          {/* SearchBox */}

          {children}
        </Providers>
      </body>
    </html>
  );
}
