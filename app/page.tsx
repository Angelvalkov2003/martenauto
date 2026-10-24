import About from "@/components/About";
import CarBand from "@/components/CarBand";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Process from "@/components/Process";
import Savings from "@/components/Savings";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        <Hero />
        <About />
        <Process />
        <CarBand />
        <Savings />
      </main>
      <Footer />
    </>
  );
}
