
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import SalesPresentation from "@/components/SalesPresentation";
import Strength from "@/components/Strength";
import Products from "@/components/Products";
import Industries from "@/components/Industries";
import CaseStudies from "@/components/CaseStudies";
import Applications from "@/components/Applications";
import About from "@/components/About";
import Founders from "@/components/Founders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ThreeScenes from "@/components/ThreeScenes";

export default function Home() {
  return (
    <div>
      <Header />
  <ThreeScenes />
      <main>
        <Hero />
        <Demo />
        <SalesPresentation />
        <Strength />
        <Products />
        <Industries />
        <CaseStudies />
        <Applications />
        <About />
        <Founders />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
