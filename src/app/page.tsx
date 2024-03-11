import FeaturedCourses from "@/components/FeaturedCourses";
import HeroSection from "@/components/HeroSection";
import Scroller from "@/components/Scroller";
import Testimonials from "@/components/Testimonials";
import UpcomingWebinars from "@/components/UpcomingWebinars";

export default function Home() {
    return (

        <main className="min-h-screen bg-black/[0.96]  antialiased bg-grid--white/[0.02]">

            <HeroSection />
            <FeaturedCourses />
            <Scroller/>
            <Testimonials/>
            <UpcomingWebinars />
        </main>
    );
}