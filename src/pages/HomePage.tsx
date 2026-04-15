import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProducts from "@/components/sections/FeaturedProducts";
import FillerSpotlight from "@/components/sections/FillerSpotlight";
import HowItWorks from "@/components/sections/HowItWorks";
import CtaBanner from "@/components/sections/CtaBanner";

export default function HomePage() {
    return (
        <>
            <Hero />
            <About />
            <FeaturedProducts />
            <FillerSpotlight />
            <HowItWorks />
            <CtaBanner />
        </>
    );
}
