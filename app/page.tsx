import About from "@/components/About";
import CarBand from "@/components/CarBand";
import Deals from "@/components/Deals";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import MobileCta from "@/components/MobileCta";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import ViberGroup from "@/components/ViberGroup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Deals />
        <ViberGroup />
        <About />
        <Process />
        <CarBand />
      </main>
      <Footer />
      <MobileCta />
    </>
  );
}
