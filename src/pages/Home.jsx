import { Hero } from "../components/Hero";
import { ValueProposition } from "../components/home/ValueProposition";
import { ArtificialIntelligenceSolutions } from "../components/home/ArtificialIntelligenceSolutions";
import { LeadSection } from "../components/home/LeadSection";

export const Home = () => {
    return (
        <>
            <Hero />
            <ValueProposition />
            <ArtificialIntelligenceSolutions />
            <LeadSection />
        </>
    )
}
