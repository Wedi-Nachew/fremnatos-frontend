import HeroSection from "../components/HeroSection";
import ProgramCard from "../components/ProgramCard";
import QuickFacts from "../components/QuickFacts";
import WhyDonateToUs from "../components/WhyDonateToUs";
import WhatPeopleCanDo from "../components/WhatPeopleCanDo";
import Partners from "../components/Partners";
import NewBuildingProjectTeaser from "../components/NewBuildingProjectTeaser";
import Testimonials from "../components/Testimonials";
import NewsAndEvents from "../components/NewsAndEvents";
import MottoCta from "../components/MottoCta";
import AboutUs from "../components/AboutUs";
import GreatRunHighlight from "../components/GreatRunHighlight";

const programs = [
    {
        title: "Children Care Program",
        description:
            "Providing care and support for orphaned and abandoned children.",
        image: "/children-care.jpg",
        link: "/our-programs/children-care",
    },
    {
        title: "Elderly Care Program",
        description:
            "Offering companionship and assistance to elderly individuals in need.",
        image: "/elderly-care.jpg",
        link: "/our-programs/elderly-care",
    },
    {
        title: "Mental Health & Recovery Program",
        description:
            "Providing specialized care and rehabilitation services for individuals with mental health challenges.",
        image: "/mentally-distressed-care.jpg",
        link: "/our-programs/mental-health-recovery",
    },
];
const Homepage = () => {
    return (
        <>
            <HeroSection />
            <section className="grid grid-cols-1 gap-6 px-6 py-10 md:px-10 lg:px-14 md:grid-cols-2 xl:grid-cols-3">
                {programs.map((program) => (
                    <ProgramCard key={program.title} program={program} />
                ))}
            </section>
            <AboutUs />
            <QuickFacts />
            <GreatRunHighlight />
            <NewBuildingProjectTeaser />
            <WhyDonateToUs />
            <WhatPeopleCanDo />
            <Partners />
            <Testimonials />
            <NewsAndEvents />
            <MottoCta />
        </>
    );
};

export default Homepage;
