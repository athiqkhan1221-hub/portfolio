import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Playground from "@/components/Playground";
import LearningJourney from "@/components/LearningJourney";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#111311] text-[#F4F3ED] flex flex-col selection:bg-[#C2F970] selection:text-[#111311]">
      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* About Athiq Khan */}
        <About />

        {/* Selected Projects Showcase */}
        <Projects />



        {/* Skills & Toolkit */}
        <Skills />

        {/* Creative Playground */}
        <Playground />

        {/* Learning Journey */}
        <LearningJourney />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
