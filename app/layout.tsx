import Header from "@/components/Header";
import Hero from "@/components/Hero"
import Footer from "@/components/Footer";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <head />
      <body>
        <Header />
        <Hero />
        {children}
        <Footer />
      </body>
    </html>
  );
}
