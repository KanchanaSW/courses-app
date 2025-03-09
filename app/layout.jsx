import { Poppins } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const popins = Poppins({
  weight: ['400','700'],
  subsets: ['latin'],
})

export const metadata = {
  title: "Kanchana Site",
  description: "Web dev tutorils",
  keywords: "web development, webdesign, react, nextjs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={popins.className}>
        <Header/>
       <main className="container">
       {children}
       </main>
      </body>
    </html>
  );
}
