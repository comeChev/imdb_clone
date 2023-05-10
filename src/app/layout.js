import "./globals.css";
import { Content, Inter } from "next/font/google";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IMDb Clone",
  description: "This is the IMDB clone website for learning NextJS 13",
  viewport: "with=device-width, initial-scale=1",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>
        {/* Header */}
        <Header />

        {/* Navbar */}

        {/* SearchBox */}

        {children}
      </body>
    </html>
  );
}
