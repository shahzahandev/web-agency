import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Process from "../components/Process";
import Services from "../components/Services";
import Story from "../components/Story";
import Team from "../components/Team";
import Work from "../components/Work";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <Work />
        <Story />
        <Team />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
