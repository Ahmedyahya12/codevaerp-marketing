
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import SmartCredit from "@/components/SmartCredit";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <SmartCredit />
        <FAQ />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
