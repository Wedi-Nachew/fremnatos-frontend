import {
    ArrowRight,
    BadgeCheck,
    BookOpen,
    Building2,
    CheckCircle2,
    Clock3,
    Gift,
    HandHeart,
    HeartPulse,
    MapPin,
    Phone,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { branches } from "../data/ourStoryData";

const problemStats = [
    {
        value: "12,000+",
        label: "Estimated children in Tigray facing severe care vulnerability",
    },
    {
        value: "1 in 5",
        label: "At-risk children identified without stable adult support",
    },
    {
        value: "57",
        label: "Children currently on the main branch waitlist for safe residential support",
    },
    {
        value: "5-7 yrs",
        label: "Many long-stay children are now school age and beginning structured learning",
    },
];

const warImpactPoints = [
    {
        title: "More children are being orphaned or separated from care",
        description:
            "The Tigray War sharply increased loss, displacement, and family disruption, pushing more children into emergency protection pathways.",
    },
    {
        title: "Street vulnerability has widened",
        description:
            "Post-war economic crisis has left more children living on the streets or surviving in unstable, unsafe conditions.",
    },
    {
        title: "Recovery now takes longer",
        description:
            "Families facing financial collapse struggle to stabilize quickly, so children need longer periods of structured support before reunification is possible.",
    },
];

const approachPillars = [
    {
        icon: Building2,
        title: "Shelter",
        description:
            "Safe accommodation, hygiene essentials, and protective supervision for every child admitted.",
    },
    {
        icon: Gift,
        title: "Nutrition",
        description:
            "Balanced daily meals, growth monitoring, and emergency feeding support for severe cases.",
    },
    {
        icon: BookOpen,
        title: "Education",
        description:
            "School placement, tutoring, and learning continuity plans for children who missed classes.",
    },
    {
        icon: HeartPulse,
        title: "Health",
        description:
            "The main branch includes an on-site clinic for screenings, treatment follow-up, medication, and everyday child health support.",
    },
];

const mainBranchStoryMoments = [
    {
        label: "Then",
        title: "Police handover and emergency admission",
        description:
            "Some children first arrive through police referral after being found abandoned, unsafe, or without reliable adult care. Early admission focuses on immediate protection, rest, and safety. Children are assessed for urgent health needs and begin to adjust to the new environment with support from the branch team.",
    },
    {
        label: "Now",
        title: "Home routines, clinic care, and school entry",
        description:
            "At the main branch, children move into a daily rhythm of meals, supervised play, clinic follow-up, and early learning, with many now reaching school age and beginning formal education. The branch serves as a stable home base for children to recover, grow, and prepare for the next steps in their care journey.",
    },
];

const careJourney = [
    {
        phase: "Step 01",
        title: "Police or community referral",
        description:
            "Children are brought by police, neighbors, local leaders, or community responders when there is no safe care environment.",
    },
    {
        phase: "Step 02",
        title: "Intake assessment",
        description:
            "The branch team documents immediate risks, estimates care needs, and plans the first stabilization response.",
    },
    {
        phase: "Step 03",
        title: "Stabilization and health screening",
        description:
            "The on-site clinic supports first-line health checks, treatment follow-up, nutrition monitoring, and urgent care coordination.",
    },
    {
        phase: "Step 04",
        title: "Education placement",
        description:
            "Children are prepared for school through routines, readiness support, and formal placement where appropriate.",
    },
    {
        phase: "Step 05",
        title: "Family tracing or long-term care",
        description:
            "Where reunification is safe, families are traced and supported. Where it is not, the branch continues structured long-term care.",
    },
];

const dailyLifeMedia = [
    {
        type: "image",
        title: "Morning routines and group support",
        source: "https://picsum.photos/seed/fremnatos-child-routine-1/1400/1000",
    },
    {
        type: "image",
        title: "Learning and mentorship sessions",
        source: "https://picsum.photos/seed/fremnatos-child-routine-2/1200/1000",
    },
    {
        type: "video",
        title: "Routines video feature",
        embedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
    },
    {
        type: "image",
        title: "Recreation and confidence building",
        source: "https://picsum.photos/seed/fremnatos-child-routine-3/1200/1000",
    },
    {
        type: "image",
        title: "Child-centered care spaces",
        source: "https://picsum.photos/seed/fremnatos-child-routine-4/1400/1000",
    },
];

const outcomeMetrics = [
    {
        label: "Children currently served",
        value: "230",
        detail: "Across residential and day-support pathways",
    },
    {
        label: "School enrollment success",
        value: "91%",
        detail: "Children re-enrolled or now starting school with structured attendance support",
    },
    {
        label: "Family reintegration rate",
        value: "76%",
        detail: "Planned, monitored reunification where safe",
    },
    {
        label: "Clinic-based health coverage",
        value: "100%",
        detail: "Every child receives screening and ongoing health follow-up through the branch clinic",
    },
];

const ChildrenCareProgram = () => {
    const mainBranch =
        branches.find((item) => item.slug === "mekelle-central") ?? branches[0];
    const branchLead = mainBranch?.staffDirectory?.[0];
    const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mainBranch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const branchLeadAvatar = branchLead
        ? `https://ui-avatars.com/api/?name=${encodeURIComponent(branchLead.name)}&background=f72f22&color=ffffff&size=320`
        : "https://ui-avatars.com/api/?name=Fremnatos&background=f72f22&color=ffffff&size=320";

    return (
        <main className="bg-white text-gray-900">
            <PageHero
                label="Children’s Care Program"
                title="A Home Where Children Live, Learn, Eat, Thrive, and Get Parental Support"
                description="The main Fremnatos branch raises abandoned and orphaned children in a stable home environment, helping them grow from crisis and uncertainty into school routines, health, belonging, and long-term care."
                backgroundImage="/children-care.jpg"
                titleClassName="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-6xl"
            />

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:gap-12">
                        <div>
                            <div className="h-1 w-22 rounded-full bg-primary" />
                            <div className="mt-5 space-y-5">
                                <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                                    Main Branch Story
                                </p>
                                <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                                    From Police Referral to School Readiness and
                                    Daily Stability
                                </h2>
                                <p className="max-w-3xl text-gray-600">
                                    At the main branch, children move from
                                    emergency admission to stable routines,
                                    clinic follow-up, and the confidence to
                                    begin learning and social development.
                                </p>
                            </div>

                            <div className="mt-8 grid gap-7 sm:grid-cols-2">
                                {mainBranchStoryMoments.map((moment, index) => (
                                    <article
                                        key={moment.label}
                                        className="relative border-t border-gray-200 pt-4"
                                    >
                                        <span
                                            className={`absolute left-0 top-0 h-1 w-14 rounded-full ${
                                                index === 0
                                                    ? "bg-primary"
                                                    : "bg-primary/65"
                                            }`}
                                        />
                                        <p
                                            className={`text-xs font-semibold tracking-[0.16em] uppercase ${
                                                index === 0
                                                    ? "text-primary"
                                                    : "text-gray-500"
                                            }`}
                                        >
                                            {moment.label}
                                        </p>
                                        <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                                            {moment.title}
                                        </h3>
                                        <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                            {moment.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-5 lg:pt-1">
                            <article className="w-full overflow-hidden rounded-4xl border border-gray-200 bg-white shadow-[0_24px_64px_rgba(15,23,42,0.12)]">
                                <div className="aspect-video w-full bg-black">
                                    <iframe
                                        src="https://www.youtube.com/embed/2Vv-BfVoq4g"
                                        title="Police referral and admission story"
                                        className="h-full w-full"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                        referrerPolicy="strict-origin-when-cross-origin"
                                        allowFullScreen
                                    />
                                </div>
                            </article>

                            <article className="rounded-3xl bg-primary p-6 text-white md:p-7">
                                <p className="text-xs font-semibold tracking-[0.16em] text-white/85 uppercase">
                                    Featured Child Story
                                </p>
                                <h3 className="mt-3 text-2xl font-semibold text-white">
                                    Fremnatos
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-white/88 md:text-base">
                                    Named after the organization, Fremnatos was
                                    admitted by police when he was very young
                                    and needed immediate protection. Today, he
                                    is around five years old, thriving in the
                                    main branch and beginning school with the
                                    other children.
                                </p>

                                <div className="mt-5 grid gap-2 text-sm sm:grid-cols-3">
                                    <span className="rounded-full bg-white/16 px-3 py-2 text-center text-white">
                                        Police admitted
                                    </span>
                                    <span className="rounded-full bg-white/16 px-3 py-2 text-center text-white">
                                        About 5 years old
                                    </span>
                                    <span className="rounded-full bg-white/16 px-3 py-2 text-center text-white">
                                        Starting school
                                    </span>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:gap-10">
                    <div className="space-y-4 lg:col-span-5">
                        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                            The Problem
                        </p>
                        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                            Abandoned Children in Tigray Need Immediate,
                            Coordinated Protection
                        </h2>
                        <p className="text-gray-600">
                            Many children entering our program have experienced
                            prolonged instability, interrupted education, food
                            insecurity, and emotional trauma. These statistics
                            summarize the urgency observed across our active
                            referral network.
                        </p>
                        <p className="inline-flex items-center gap-2 rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-sm text-primary">
                            <BadgeCheck size={16} />
                            Baseline estimates from branch and partner records
                        </p>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
                        {problemStats.map((item) => (
                            <article
                                key={item.label}
                                className="border-t-2 border-gray-200 bg-gray-50 px-5 py-6"
                            >
                                <p className="text-3xl font-bold text-primary md:text-4xl">
                                    {item.value}
                                </p>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                                    {item.label}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary px-6 py-14 text-white md:px-10 md:py-18">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.18em] text-white/90 uppercase">
                            Tigray War Impact
                        </p>
                        <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
                            Conflict and Economic Crisis Deepened Child
                            Vulnerability
                        </h2>
                        <p className="mt-4 max-w-2xl text-white/88">
                            The war did not only increase orphaning and family
                            separation. It also weakened household income,
                            safety, and access to care, leaving more children
                            exposed to street life, exploitation, and long-term
                            instability.
                        </p>
                        <p className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1 text-sm text-white">
                            <BadgeCheck size={15} className="text-white" />
                            Main branch waitlist currently includes{" "}
                            {mainBranch.capacity.waitlist} children
                        </p>
                    </div>

                    <div className="space-y-5">
                        {warImpactPoints.map((item, index) => (
                            <article
                                key={item.title}
                                className="border-t border-white/25 pt-5 first:border-t-0 first:pt-0"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <h3 className="max-w-xl text-xl font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <span className="text-4xl font-bold text-white/20">
                                        0{index + 1}
                                    </span>
                                </div>
                                <p className="mt-2 text-sm leading-relaxed text-white/86 md:text-base">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Our Approach
                    </p>
                    <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                        Four Integrated Pillars Delivered Together at the Main
                        Branch
                    </h2>
                    <p className="mt-4 max-w-3xl text-gray-600">
                        Care is coordinated in one environment so children move
                        from emergency response to stable daily growth.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {approachPillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <article
                                    key={pillar.title}
                                    className="group rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                                            <Icon size={20} />
                                        </span>
                                        <span className="text-sm font-semibold text-gray-300">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                    </div>
                                    <h3 className="mt-4 text-2xl font-semibold text-gray-900">
                                        {pillar.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                                        {pillar.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Care Journey
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        From Referral to Recovery Planning
                    </h2>
                    <p className="mt-4 max-w-3xl text-gray-600">
                        The journey into care is structured so each child moves
                        from emergency protection toward stability, learning,
                        and a clear long-term plan.
                    </p>

                    <div className="relative mt-10">
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-linear-to-b from-primary/35 via-gray-300 to-primary/35 lg:left-1/2 lg:-translate-x-1/2" />

                        <div className="space-y-10">
                            {careJourney.map((step, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <article
                                        key={step.title}
                                        className="relative grid gap-4 lg:grid-cols-2 lg:gap-16"
                                    >
                                        <div
                                            className={`pl-12 lg:pl-0 ${
                                                isLeft
                                                    ? "lg:pr-18 lg:text-right"
                                                    : "lg:col-start-2 lg:pl-18"
                                            }`}
                                        >
                                            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                                                {step.phase}
                                            </p>
                                            <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                                                {step.title}
                                            </h3>
                                            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                                {step.description}
                                            </p>
                                        </div>

                                        <span className="absolute left-5 top-1 inline-flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full border border-primary/15 bg-white text-sm font-semibold text-primary ring-8 ring-white lg:left-1/2">
                                            {index + 1}
                                        </span>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Daily Life
                    </p>
                    <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                        A Glimpse Into Children’s Everyday Routines
                    </h2>

                    <div className="mt-7 grid auto-rows-[220px] gap-3 sm:grid-cols-2 lg:grid-cols-12">
                        <article className="overflow-hidden rounded-2xl sm:col-span-2 lg:col-span-7 lg:row-span-2">
                            <img
                                src={dailyLifeMedia[0].source}
                                alt={dailyLifeMedia[0].title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </article>

                        <article className="overflow-hidden rounded-2xl lg:col-span-5">
                            <img
                                src={dailyLifeMedia[1].source}
                                alt={dailyLifeMedia[1].title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </article>

                        <article className="relative overflow-hidden rounded-2xl bg-black lg:col-span-5">
                            <iframe
                                src={dailyLifeMedia[2].embedUrl}
                                title={dailyLifeMedia[2].title}
                                className="h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                            <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/15 bg-black/45 px-3 py-1 text-xs font-semibold tracking-[0.16em] text-white uppercase backdrop-blur-sm">
                                Daily Life Video
                            </div>
                        </article>

                        <article className="overflow-hidden rounded-2xl lg:col-span-6">
                            <img
                                src={dailyLifeMedia[3].source}
                                alt={dailyLifeMedia[3].title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </article>

                        <article className="overflow-hidden rounded-2xl lg:col-span-6">
                            <img
                                src={dailyLifeMedia[4].source}
                                alt={dailyLifeMedia[4].title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
                        </article>
                    </div>
                </div>
            </section>

            <section className="px-0 py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Main Branch
                        </p>
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Where the Children Live and Learn
                        </h2>
                        <p className="max-w-3xl text-gray-600">
                            The main branch operates as a home-like care space
                            with residential support, meals, routines, school
                            preparation, and an on-site clinic.
                        </p>
                    </div>
                </div>

                <div className="relative mt-8">
                    <div className="w-full overflow-hidden border-y border-gray-200">
                        <iframe
                            src={mapEmbedUrl}
                            title={`${mainBranch.name} location map`}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-110 w-full object-cover md:h-120"
                        ></iframe>
                    </div>

                    <div className="relative z-10 mx-auto -mt-12 w-full max-w-7xl px-6 md:-mt-16 md:px-10">
                        <article className="rounded-3xl border border-gray-200 bg-white p-4 shadow-lg md:p-6">
                            <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.25fr]">
                                <div className="rounded-2xl bg-gray-50 px-5 py-4">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                        Contact
                                    </p>
                                    <p className="mt-3 inline-flex items-start gap-2 text-sm text-gray-700">
                                        <MapPin
                                            size={16}
                                            className="mt-0.5 shrink-0 text-primary"
                                        />
                                        {mainBranch.address}
                                    </p>
                                    <a
                                        href={`tel:${mainBranch.phone}`}
                                        className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-primary"
                                    >
                                        <Phone
                                            size={16}
                                            className="text-primary"
                                        />
                                        {mainBranch.phone}
                                    </a>
                                    <p className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700">
                                        <Clock3
                                            size={16}
                                            className="text-primary"
                                        />
                                        {mainBranch.hours[0].day}:{" "}
                                        {mainBranch.hours[0].time}
                                    </p>
                                </div>

                                <div className="rounded-2xl bg-primary px-5 py-4 text-white">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-white/85 uppercase">
                                        Branch Focus
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/78">
                                        This is the core residential branch for
                                        abandoned and orphaned children who need
                                        stable daily care, nutrition, health
                                        support, and school readiness.
                                    </p>
                                </div>

                                <div className="overflow-hidden rounded-2xl border border-gray-200 bg-white">
                                    <div className="flex items-center gap-4 p-5">
                                        <img
                                            src={branchLeadAvatar}
                                            alt={branchLead?.name}
                                            className="h-18 w-18 rounded-2xl object-cover"
                                        />
                                        <div>
                                            <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                                Who Runs It
                                            </p>
                                            <h3 className="mt-2 text-xl font-semibold text-gray-900">
                                                {branchLead?.name}
                                            </h3>
                                            <p className="text-sm text-gray-600">
                                                {branchLead?.role}
                                            </p>
                                            <p className="mt-2 text-sm text-gray-600">
                                                {branchLead?.email}
                                            </p>
                                            <p className="text-sm text-gray-600">
                                                {branchLead?.phone}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Outcomes
                    </p>
                    <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                        Measurable Progress for Children and Families
                    </h2>

                    <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {outcomeMetrics.map((metric) => (
                            <article
                                key={metric.label}
                                className="rounded-2xl border border-gray-200 bg-white p-5"
                            >
                                <p className="text-3xl font-bold text-primary md:text-4xl">
                                    {metric.value}
                                </p>
                                <h3 className="mt-3 text-lg font-semibold text-gray-900">
                                    {metric.label}
                                </h3>
                                <p className="mt-2 text-sm text-gray-600">
                                    {metric.detail}
                                </p>
                                <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                                    <CheckCircle2 size={15} />
                                    Program verified metric
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary px-6 py-14 text-white md:px-10 md:py-18">
                <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-semibold tracking-[0.18em] text-white/85 uppercase">
                            Take Action
                        </p>
                        <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                            Help Us Expand Protection for Every Child Who Needs
                            It
                        </h2>
                        <p className="mt-3 max-w-2xl text-white/85">
                            Your support directly strengthens shelter, meals,
                            education, and clinic-based health support across
                            our Children’s Care Program.
                        </p>
                    </div>
                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                            to="/donate"
                            className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary cursor-pointer"
                        >
                            Donate Now
                        </Link>
                        <Link
                            to="/our-impact"
                            className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary cursor-pointer"
                        >
                            See Our Impact
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ChildrenCareProgram;
