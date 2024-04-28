import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { Navbar } from "@/components/Navbar";
import { ScrollToTop } from "@/components/ScrollToTop";
import { Team } from "@/components/Team";
import Image from "next/image";


export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <HowItWorks/>
    <Features/>
    <Team/>
    <Footer/>
    <ScrollToTop/>
    </>
  );
}
