import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { ValueProposition } from "./components/home/ValueProposition";
import { ArtificialIntelligenceSolutions } from "./components/home/ArtificialIntelligenceSolutions";
import { LeadSection } from "./components/home/LeadSection";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900">
      <Navbar />

      {/* Placeholder content to demonstrate layout */}
      <main>
        <Hero />
        <ValueProposition />
        <ArtificialIntelligenceSolutions />
        <LeadSection />
      </main>
      <Footer />
    </div>
  );
}

export default App
