
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
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div>
      <Header />
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
        <Contact />
      </main>
    </div>
  );
}
