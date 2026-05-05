import {
    ArrowRight,
    BadgeCheck,
    BriefcaseBusiness,
    ChevronLeft,
    ChevronRight,
    FileDown,
    GraduationCap,
    HeartPulse,
    House,
    Stethoscope,
    Utensils,
    Users,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const storyPrograms = ["All", "Children", "Elderly", "Mental Health"];

const impactStories = [
    {
        id: "story-samuel",
        name: "Samuel (name changed)",
        program: "Mental Health",
        year: "2025",
        summary:
            "After admission with recurring psychosis and substance dependency, Samuel followed a full care pathway including medication stabilization, counseling, and relapse prevention. He then completed tailoring training, moved into paid production work, and now mentors participants who are newly entering recovery.",
        videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
        id: "story-hiwot",
        name: "Hiwot (name changed)",
        program: "Mental Health",
        year: "2025",
        summary:
            "Hiwot entered the women recovery branch during a severe period of emotional instability and social isolation. Through structured treatment, counseling, and practical training, she rebuilt daily consistency and now leads shifts in food services while supporting other women in recovery.",
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    },
    {
        id: "story-fremnatos-child",
        name: "Fremnatos",
        program: "Children",
        year: "2024",
        summary:
            "Admitted through referral at a very young age, Fremnatos arrived needing urgent protection and stable routines. With consistent nutrition, psychosocial support, and school readiness care, he now follows structured learning routines and shows strong developmental progress at the main branch.",
        videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
        id: "story-elder-amina",
        name: "Amina (name changed)",
        program: "Elderly",
        year: "2024",
        summary:
            "From prolonged social isolation and unmanaged health needs, Amina entered elder care with low mobility and high distress. Through medication follow-up, safe housing, and intergenerational daily life, she regained physical strength, confidence, and a renewed sense of belonging.",
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    },
    {
        id: "story-gidey",
        name: "Gidey (name changed)",
        program: "Children",
        year: "2025",
        summary:
            "Gidey transitioned from unsafe street exposure into a protective residential environment with daily meals, health support, and structured mentoring. He now attends school consistently, participates in supervised activities, and continues to improve through psychosocial follow-up.",
        videoUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
        id: "story-elder-kidane",
        name: "Kidane (name changed)",
        program: "Elderly",
        year: "2025",
        summary:
            "Kidane entered the program with severe frailty, unmanaged health complications, and no dependable caregiver support. With continuous elder care, clinic coordination, and meaningful social engagement, he recovered daily mobility and improved emotional wellbeing.",
        videoUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
    },
];

const capacityPressureStats = [
    {
        label: "Applications and referrals received in 2025",
        value: "2,100+",
    },
    {
        label: "People currently waitlisted across branches",
        value: "430+",
    },
    {
        label: "Current branch capacity utilization",
        value: "100%",
    },
];

const impactMetrics = [
    {
        icon: Users,
        label: "Total beneficiaries in 2025",
        value: 1486,
        suffix: "+",
        chart: 94,
        detail: "Across children, elderly, and mental health services",
    },
    {
        icon: HeartPulse,
        label: "Overall recovery rate",
        value: 84,
        suffix: "%",
        chart: 84,
        detail: "Sustained improvements at 6-month follow-up",
    },
    {
        icon: GraduationCap,
        label: "Children educated",
        value: 312,
        suffix: "",
        chart: 72,
        detail: "Children enrolled or re-enrolled in school",
    },
    {
        icon: House,
        label: "Elders housed",
        value: 126,
        suffix: "",
        chart: 67,
        detail: "Residents in stable elder care pathways",
    },
    {
        icon: BriefcaseBusiness,
        label: "People employed post-recovery",
        value: 109,
        suffix: "",
        chart: 61,
        detail: "Graduates placed in internal and partner roles",
    },
    {
        icon: Utensils,
        label: "Meals served",
        value: 182400,
        suffix: "",
        chart: 96,
        detail: "Daily nutrition support across all branch programs",
    },
    {
        icon: Stethoscope,
        label: "Medical treatments given",
        value: 9640,
        suffix: "",
        chart: 88,
        detail: "Clinical interventions and follow-up services",
    },
];

const writtenTestimonials = [
    {
        quote: "When I arrived, I was sleeping outside and struggling with severe episodes. I never imagined I would feel stable enough to work again. Now I keep a daily routine, support new participants, and send part of my salary home every month.",
        byline: "Samuel (name changed), recovered participant",
        program: "Mental Health",
        year: "2025",
        image: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=1200&q=80",
    },
    {
        quote: "I was rescued while living in unsafe conditions. At first I could not focus in class or trust anyone around me. With consistent care and counseling, I returned to school and now I am one of the top students in my group.",
        byline: "Fikru (name changed), rescued child participant",
        program: "Children",
        year: "2024",
        image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&fit=crop&w=1200&q=80",
    },
    {
        quote: "I entered the elder home weak, alone, and anxious. Regular medicine, warm meals, and daily interaction changed everything. I can walk longer, sleep better, and feel like I am part of a real family again.",
        byline: "Amina (name changed), recovered elder resident",
        program: "Elderly",
        year: "2025",
        image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80",
    },
    {
        quote: "Before treatment I thought recovery was impossible for me. The counseling and training pathway gave me discipline and confidence. Today I am employed, sober, and mentoring others who are beginning their own recovery journey.",
        byline: "Hiwot (name changed), recovered participant",
        program: "Mental Health",
        year: "2025",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=1200&q=80",
    },
];

const StoryVideoEmbed = ({ videoUrl, title }) => {
    return (
        <div className="aspect-video w-full overflow-hidden rounded-2xl border border-gray-200 bg-black">
            <iframe
                src={videoUrl}
                title={title}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            />
        </div>
    );
};

const OurImpact = () => {
    const [activeProgram, setActiveProgram] = useState("All");
    const [metricsVisible, setMetricsVisible] = useState(false);
    const [activeTestimonialIndex, setActiveTestimonialIndex] = useState(0);
    const [animatedValues, setAnimatedValues] = useState(() =>
        impactMetrics.map(() => 0),
    );

    const metricsRef = useRef(null);

    const featuredStory = useMemo(() => {
        const monthIndex = new Date().getMonth();
        return impactStories[monthIndex % impactStories.length];
    }, []);

    const filteredStories = useMemo(() => {
        if (activeProgram === "All") {
            return impactStories;
        }

        return impactStories.filter((story) => story.program === activeProgram);
    }, [activeProgram]);

    useEffect(() => {
        const section = metricsRef.current;

        if (!section) {
            return;
        }

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setMetricsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            { threshold: 0.24 },
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        if (!metricsVisible) {
            return;
        }

        const duration = 1300;
        const start = performance.now();
        let frameId = 0;

        const step = (time) => {
            const progress = Math.min((time - start) / duration, 1);

            setAnimatedValues(
                impactMetrics.map((metric) => metric.value * progress),
            );

            if (progress < 1) {
                frameId = requestAnimationFrame(step);
            }
        };

        frameId = requestAnimationFrame(step);

        return () => cancelAnimationFrame(frameId);
    }, [metricsVisible]);

    const formatMetricValue = (metric, index) => {
        const value = Math.round(animatedValues[index]).toLocaleString();
        return `${value}${metric.suffix}`;
    };

    const goToNextTestimonial = () => {
        setActiveTestimonialIndex(
            (prevIndex) => (prevIndex + 1) % writtenTestimonials.length,
        );
    };

    const goToPrevTestimonial = () => {
        setActiveTestimonialIndex(
            (prevIndex) =>
                (prevIndex - 1 + writtenTestimonials.length) %
                writtenTestimonials.length,
        );
    };

    useEffect(() => {
        const intervalId = setInterval(() => {
            setActiveTestimonialIndex(
                (prevIndex) => (prevIndex + 1) % writtenTestimonials.length,
            );
        }, 6000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <main className="bg-white text-gray-900">
            {/* Hero Section */}
            <PageHero
                label="Our Impact"
                title="Real Journeys. Measurable Change. Dignified and Sustained Recovery."
                description="Explore how children, elders, and people in mental health recovery move from crisis to stability through structured care, compassion, and long-term follow-up."
                backgroundImage="/hero-bg-333.jpg"
                contentPaddingTop="pt-10 md:pt-16"
                overlayClassName="bg-black/20"
                descriptionClassName="mt-4 max-w-3xl text-base leading-relaxed text-white/86 md:text-lg"
            />

            {/* Featured Story Section */}
            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <div className="space-y-3">
                        <p className="text-sm font-semibold tracking-[0.18em] text-gray-500 uppercase">
                            Featured Story
                        </p>
                        <h2 className="max-w-4xl text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Monthly Featured Recovery Journey
                        </h2>
                        <p className="max-w-3xl text-gray-600">
                            One documented story is highlighted each month to
                            show practical progress from crisis support to
                            sustained stability.
                        </p>
                    </div>

                    <article className="mt-7 overflow-hidden rounded-3xl border border-gray-200 bg-white">
                        <div className="grid gap-0 lg:grid-cols-[1.08fr_0.92fr]">
                            <div className="border-b border-gray-200 p-4 md:p-5 lg:border-b-0 lg:border-r">
                                <StoryVideoEmbed
                                    videoUrl={featuredStory.videoUrl}
                                    title={`${featuredStory.name} featured story`}
                                />
                            </div>

                            <div className="flex flex-col justify-between p-6 md:p-8">
                                <div>
                                    <div className="flex flex-wrap gap-2 text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase">
                                        <span className="rounded-full border  bg-primary text-white px-3 py-1">
                                            {featuredStory.program}
                                        </span>
                                        <span className="rounded-full  bg-primary text-white px-3 py-1">
                                            {featuredStory.year}
                                        </span>
                                    </div>

                                    <h3 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                                        {featuredStory.name}
                                    </h3>
                                    <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                                        {featuredStory.summary}
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                                        This profile is selected from verified
                                        branch documentation and case follow-up
                                        to reflect real recovery milestones and
                                        long-term support continuity.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            {/* Success Stats */}
            <section
                ref={metricsRef}
                className="bg-primary px-6 py-14 text-white md:px-10 md:py-18"
            >
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-white/85 uppercase">
                        Impact in Numbers
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Full-Scale Program Outcomes Across Branches
                    </h2>

                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {impactMetrics.map((metric, index) => {
                            const Icon = metric.icon;
                            return (
                                <article
                                    key={metric.label}
                                    className="rounded-2xl border border-white/30 bg-white/12 p-5 backdrop-blur-sm"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-white">
                                            <Icon size={18} />
                                        </span>
                                        <p className="text-3xl font-bold text-white md:text-4xl">
                                            {formatMetricValue(metric, index)}
                                        </p>
                                    </div>

                                    <h3 className="mt-4 text-lg font-semibold text-white">
                                        {metric.label}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-white/88">
                                        {metric.detail}
                                    </p>

                                    <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-white/20">
                                        <div
                                            className="h-full rounded-full bg-white transition-all duration-1000"
                                            style={{
                                                width: metricsVisible
                                                    ? `${metric.chart}%`
                                                    : "0%",
                                            }}
                                        />
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Success Stories */}
            <section className="bg-gray-50 px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Success Stories (Video Testimonials)
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Filterable Stories by Program
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {storyPrograms.map((program) => (
                            <button
                                key={program}
                                type="button"
                                onClick={() => setActiveProgram(program)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                                    activeProgram === program
                                        ? "border-primary bg-primary text-white"
                                        : "border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary"
                                }`}
                            >
                                {program}
                            </button>
                        ))}
                    </div>

                    <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {filteredStories.map((story) => (
                            <article
                                key={story.id}
                                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                            >
                                <div className="aspect-video w-full bg-black">
                                    <iframe
                                        src={story.videoUrl}
                                        title={`${story.name} story video`}
                                        className="h-full w-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>

                                <div className="p-5">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                        {story.program} \u2022 {story.year}
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                                        {story.name}
                                    </h3>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                        {story.summary}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capacity Pressure */}
            <section className="relative isolate overflow-hidden px-6 py-16 md:px-10 md:py-14">
                <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=2200&q=80"
                    alt="Pile of applications and referral documents in the office"
                    className="absolute inset-0 h-full w-full object-cover"
                    loading="lazy"
                />
                <div className="absolute inset-0 bg-linear-to-r from-black/67 via-black/61 to-black/40" />
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_20%,rgba(247,47,34,0.2),transparent_34%)]" />

                <div className="relative mx-auto flex min-h-140 max-w-7xl items-center">
                    <div className="max-w-4xl text-white">
                        <p className="text-sm font-semibold tracking-[0.18em] text-primary/85 uppercase">
                            Capacity Emergency
                        </p>
                        <h2 className="mt-3 max-w-4xl text-2xl font-bold leading-tight md:text-4xl">
                            Daily Applications Keep Arriving, But Our Branches
                            Are Already at 100% Capacity
                        </h2>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/88 md:text-lg">
                            We continue receiving urgent applications and
                            referrals every week. Many cases are assessed,
                            documented, and prioritized, but cannot be admitted
                            because there is no physical room left in our
                            existing branches.
                        </p>

                        <div className="mt-7 grid gap-4 sm:grid-cols-3">
                            {capacityPressureStats.map((item) => (
                                <div key={item.label}>
                                    <p className="text-3xl font-bold text-primary md:text-4xl">
                                        {item.value}
                                    </p>
                                    <p className="mt-2 border-t border-white/35 pt-2 text-sm leading-relaxed text-white/88">
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>

                        <p className="mt-6 max-w-3xl text-sm leading-relaxed text-white/90 md:text-base">
                            The practical solution is expanding safe service
                            space through the new building project. Donations
                            directly help create additional beds, treatment
                            rooms, and support facilities for people now stuck
                            on waitlists.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-3">
                            <Link
                                to="/donate"
                                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Donate Now
                                <ArrowRight size={16} />
                            </Link>
                            <Link
                                to="/get-involved/partnerships"
                                className="inline-flex items-center gap-2 rounded-lg border border-white/35 bg-white/10 px-6 py-3 font-semibold text-white transition-colors hover:bg-white hover:text-gray-900"
                            >
                                Partner With Us
                                <ArrowRight size={16} />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OurImpact;
