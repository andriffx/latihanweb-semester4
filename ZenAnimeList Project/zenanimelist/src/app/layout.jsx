import { Gabarito } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const gabarito = Gabarito({
  subsets: ["latin"]
});

export const metadata = {
  title: "ZenAnimeList",
  description: "Website Anime by Indonesia",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${gabarito.className} bg-color-dark antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
