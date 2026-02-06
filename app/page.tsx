import Hero from "./components/hero";
import Services from "./components/services";
import About from "./components/about";
import Faq from "./components/quest";
import CTA from "./components/cta";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Services />
      <About />
      <Faq />
      <CTA />
      <Footer/>
    </main>
  );
}
