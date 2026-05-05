import {
    ArrowRight,
    BadgeCheck,
    BookOpen,
    Building2,
    CheckCircle2,
    Clock3,
    HandHeart,
    HeartPulse,
    MapPin,
    Phone,
    Trophy,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const crisisPoints = [
    {
        title: "Untreated mental illness",
        description:
            "People with severe mental health conditions are often left without sustained treatment and are exposed to unsafe living conditions.",
    },
    {
        title: "Drug-addiction pressure",
        description:
            "Substance dependency is rising in vulnerable communities, with many people needing structured detox and long-term recovery support.",
    },
    {
        title: "Stigma and mistreatment",
        description:
            "Mental illness remains highly stigmatized in the region, and many individuals are marginalized, isolated, or mistreated instead of receiving care.",
    },
];

const subTracks = [
    {
        title: "Mental Illness Support",
        details:
            "Clinical assessments, medication stabilization, individual counseling, and family-based reintegration planning.",
    },
    {
        title: "Addiction Recovery",
        details:
            "Supervised withdrawal support, relapse prevention counseling, peer support groups, and recovery coaching.",
    },
];

const approachPillars = [
    {
        icon: HeartPulse,
        title: "Clinical Treatment",
        description:
            "Psychiatric and medical evaluations with personalized treatment plans and ongoing health monitoring.",
    },
    {
        icon: Users,
        title: "Therapy",
        description:
            "Individual and group therapy sessions focused on trauma recovery, emotional regulation, and social functioning.",
    },
    {
        icon: BookOpen,
        title: "Counseling",
        description:
            "Family counseling and case work to strengthen support systems for sustained reintegration.",
    },
    {
        icon: Building2,
        title: "Medication Management",
        description:
            "Safe prescriptions, adherence follow-up, side-effect monitoring, and continuity plans after discharge.",
    },
];

const recoveryJourney = [
    {
        step: "01",
        title: "Admission",
        description: "Intake, risk assessment, and immediate safety planning.",
    },
    {
        step: "02",
        title: "Treatment",
        description:
            "Clinical stabilization with therapy, counseling, and medication support.",
    },
    {
        step: "03",
        title: "Recovery",
        description:
            "Daily routines, psychosocial support, and relapse prevention.",
    },
    {
        step: "04",
        title: "Training",
        description:
            "Practical skills development for independent and productive living.",
    },
    {
        step: "05",
        title: "Employment",
        description:
            "Supported transition to internal placements and partner opportunities.",
    },
];

const trainingTracks = [
    "Tailoring and textile work",
    "Food preparation and kitchen operations",
    "Urban gardening and nursery support",
    "Handcraft production and packaging",
    "Basic facility maintenance and cleaning services",
];

const sportsRehabilitationSpotlight = {
    title: "Male Branch Volleyball Team",
    summary:
        "Beyond clinical treatment and vocational pathways, the male center runs a competitive volleyball team as part of structured social rehabilitation and discipline-building.",
    achievement:
        "The team has become champion 4 times while competing with strong teams such as Mesfin Industrial Engineering and Mesebo Cement Factory male volleyball teams.",
    outcomes: [
        "Builds teamwork, emotional regulation, and daily routine discipline",
        "Improves confidence and belonging through healthy competition",
        "Creates visible recovery role models for newer participants",
    ],
};

const graduateQuotes = [
    {
        quote: "I thought my life was over. Training gave me confidence, and now I earn with dignity in the center's production team.",
        byline: "Male graduate, workshop assistant",
    },
    {
        quote: "After treatment I joined skills training, and today I mentor newer participants while working full-time in our kitchen unit.",
        byline: "Female graduate, food services lead",
    },
];

const successStories = [
    {
        profile: "Male Success Story",
        name: "Samuel, 29",
        before: "Samuel was admitted after prolonged psychosis, repeated street exposure, and heavy substance use. He had lost contact with most family members and had no stable daily routine.",
        after: "Following clinical care, medication adherence, and relapse counseling, he completed tailoring training and now works in the center's garment production team while supporting peers in recovery.",
    },
    {
        profile: "Female Success Story",
        name: "Hiwot, 32",
        before: "Hiwot entered the women's branch with severe depression and dependency symptoms, after years of social isolation and unstable housing.",
        after: "With therapy, counseling, and medication management, she regained stability, completed food-services training, and now holds a paid role in the organization while rebuilding family trust.",
    },
];

const successRateMetrics = [
    {
        label: "Clinical stabilization",
        value: 84,
        detail: "Participants showing sustained symptom improvement at six months",
    },
    {
        label: "Skills completion",
        value: 76,
        detail: "Residents completing at least one certified skills track",
    },
    {
        label: "Employment transition",
        value: 61,
        detail: "Graduates placed in internal or partner-supported roles",
    },
    {
        label: "Family/community reintegration",
        value: 68,
        detail: "Participants reintegrated with ongoing follow-up plans",
    },
];

const branchTracks = [
    {
        unit: "Male Branch",
        name: "Mekelle Mental Recovery Center - Male Unit",
        address:
            "Hadnet Sub-city, Near General Hospital Road, Mekelle, Ethiopia",
        phone: "+251 961 440 210",
        hours: "Mon - Sat, 8:00 AM - 6:00 PM",
        lead: "Tesfay Girmay, Branch Clinical Supervisor",
    },
    {
        unit: "Female Branch",
        name: "Mekelle Women Recovery Center - Female Unit",
        address: "Kebele 09, Ayder Axis, Mekelle, Ethiopia",
        phone: "+251 961 440 244",
        hours: "Mon - Sat, 8:00 AM - 6:00 PM",
        lead: "Meron Tadesse, Women Recovery Program Lead",
    },
];

const videoTestimonials = [
    {
        title: "Before and After - Samuel",
        embedUrl: "https://www.youtube.com/embed/aqz-KE-bpKQ",
        summary:
            "Samuel explains his life before admission, his treatment period, and how training helped him move into paid work.",
    },
    {
        title: "Before and After - Hiwot",
        embedUrl: "https://www.youtube.com/embed/2Vv-BfVoq4g",
        summary:
            "Hiwot shares how the women's branch supported her from crisis to recovery and employment with dignity.",
    },
];

const MentalHealthRecoveryProgram = () => {
    return (
        <main className="bg-white text-gray-900">
            <PageHero
                label="Mental Health and Recovery"
                title="Recovery Pathways That Turn Crisis Into Work, Stability, and Dignity"
                description="We run two dedicated branches, one for men and one for women, to support people affected by severe mental illness and drug addiction through treatment, recovery, training, and employment."
                backgroundImage="/mentally-distressed-care.jpg"
                backgroundClassName="h-full w-full bg-cover bg-center grayscale"
                titleClassName="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-6xl"
            />

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        The Problem
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Mental Illness and Drug Addiction Are Deepening a Human
                        Dignity Crisis in the Region
                    </h2>
                    <p className="mt-4 max-w-3xl text-gray-600">
                        People with mental illness and addiction are among the
                        most marginalized groups in Tigray, and many are exposed
                        to mistreatment, stigma, and exclusion instead of
                        receiving proper care.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {crisisPoints.map((item) => (
                            <article
                                key={item.title}
                                className="border-t-2 border-gray-200 bg-gray-50 px-5 py-6"
                            >
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {item.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                    {item.description}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2">
                    <article className="border border-gray-200 bg-white p-6 md:p-7">
                        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                            Two Sub-tracks
                        </p>
                        <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Mental Illness Support
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                            {subTracks[0].details}
                        </p>
                    </article>

                    <article className="border border-gray-200 bg-white p-6 md:p-7">
                        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                            Two Sub-tracks
                        </p>
                        <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Addiction Recovery
                        </h2>
                        <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                            {subTracks[1].details}
                        </p>
                    </article>
                </div>
            </section>

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Our Approach
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Clinical Treatment, Therapy, Counseling, and Medication
                        Management Delivered as One Plan
                    </h2>

                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {approachPillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <article
                                    key={pillar.title}
                                    className="border border-gray-200 bg-white p-5"
                                >
                                    <div className="flex items-center justify-between">
                                        <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
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

            <section className="border-y border-gray-200 bg-white px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        The Recovery Journey
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                        Admission to Employment, Step by Step
                    </h2>
                    <p className="mt-4 max-w-3xl text-gray-600">
                        Recovery follows a continuous path where each stage
                        builds on the previous one, from immediate safety to
                        stable employment.
                    </p>

                    <div className="relative mt-10">
                        <div className="absolute left-5 top-0 bottom-0 w-px bg-linear-to-b from-primary/35 via-gray-300 to-primary/35 lg:left-1/2 lg:-translate-x-1/2" />

                        <div className="space-y-10">
                            {recoveryJourney.map((item, index) => {
                                const isLeft = index % 2 === 0;

                                return (
                                    <article
                                        key={item.step}
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
                                                Step {item.step}
                                            </p>
                                            <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                                                {item.title}
                                            </h3>
                                            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                                {item.description}
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
                        Skills Training and Employment Program
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Training That Moves Recovery Into Real Work
                    </h2>

                    <div className="mt-7 grid gap-8 lg:grid-cols-[1.06fr_0.94fr]">
                        <div>
                            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                                After stabilization, participants enter
                                practical training pathways designed around
                                ability, interest, and recovery readiness.
                                Graduates can be placed into paid roles within
                                Fremnatos operations and partner-linked
                                opportunities.
                            </p>

                            <h3 className="mt-6 text-xl font-semibold text-gray-900">
                                Types of Skills Taught
                            </h3>
                            <div className="mt-4 grid gap-3 sm:grid-cols-2">
                                {trainingTracks.map((track) => (
                                    <p
                                        key={track}
                                        className="inline-flex items-start gap-2 border-l-2 border-gray-200 pl-3 text-sm text-gray-700"
                                    >
                                        <CheckCircle2
                                            size={16}
                                            className="mt-0.5 shrink-0 text-primary"
                                        />
                                        {track}
                                    </p>
                                ))}
                            </div>

                            <div className="mt-6 grid gap-4 sm:grid-cols-3">
                                <article className="border border-gray-200 bg-gray-50 p-4">
                                    <p className="text-3xl font-bold text-primary">
                                        178
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        trained in last 24 months
                                    </p>
                                </article>
                                <article className="border border-gray-200 bg-gray-50 p-4">
                                    <p className="text-3xl font-bold text-primary">
                                        109
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        hired in internal or partner roles
                                    </p>
                                </article>
                                <article className="border border-gray-200 bg-gray-50 p-4">
                                    <p className="text-3xl font-bold text-primary">
                                        61%
                                    </p>
                                    <p className="mt-1 text-sm text-gray-600">
                                        employment transition rate
                                    </p>
                                </article>
                            </div>
                        </div>

                        <div className="space-y-4">
                            {graduateQuotes.map((item) => (
                                <article
                                    key={item.byline}
                                    className="rounded-2xl border border-primary/20 bg-linear-to-br from-white to-primary/5 p-5 shadow-sm"
                                >
                                    <span className="text-3xl leading-none text-primary/35">
                                        "
                                    </span>
                                    <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                                        &ldquo; {item.quote} &rdquo;
                                    </p>
                                    <div className="mt-4 h-px w-full bg-primary/20" />
                                    <p className="mt-3 text-sm font-semibold text-gray-900">
                                        {item.byline}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Recovery Stories and Video Testimonials
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Before and After Stories With Direct Video Testimony
                    </h2>

                    <div className="mt-8 space-y-8">
                        {successStories.map((story, index) => {
                            const video = videoTestimonials[index];

                            return (
                                <article
                                    key={story.name}
                                    className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm"
                                >
                                    <div className="grid lg:grid-cols-[1.05fr_0.95fr]">
                                        <div className="p-6 md:p-7">
                                            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                                                {story.profile}
                                            </p>
                                            <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                                                {story.name}
                                            </h3>
                                            <div className="mt-4 grid gap-3 text-sm leading-relaxed md:text-base">
                                                <p className="rounded-xl border border-gray-200 bg-gray-50 p-3 text-gray-600">
                                                    <span className="font-semibold text-gray-900">
                                                        Before:
                                                    </span>{" "}
                                                    {story.before}
                                                </p>
                                                <p className="rounded-xl border border-primary/20 bg-primary/5 p-3 text-gray-600">
                                                    <span className="font-semibold text-gray-900">
                                                        After:
                                                    </span>{" "}
                                                    {story.after}
                                                </p>
                                            </div>
                                            <p className="mt-4 text-sm leading-relaxed text-gray-500 md:text-base">
                                                {video.summary}
                                            </p>
                                        </div>

                                        <div className="aspect-video w-full bg-black lg:h-full lg:min-h-70 lg:aspect-auto">
                                            <iframe
                                                src={video.embedUrl}
                                                title={video.title}
                                                className="h-full w-full"
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                                referrerPolicy="strict-origin-when-cross-origin"
                                                allowFullScreen
                                            />
                                        </div>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section className="bg-white px-6 py-16 text-black md:px-10 md:py-20">
                <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-[1.14fr_0.86fr] md:items-center">
                    <div className="group relative h-84 overflow-hidden md:h-120">
                        <img
                            src="https://picsum.photos/600/400"
                            alt="Placeholder for male center volleyball team photo"
                            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-103"
                        />
                    </div>

                    <div className="flex flex-col gap-4">
                        <p className="text-lg text-primary md:text-xl">
                            Sports Rehabilitation
                        </p>
                        <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                            {sportsRehabilitationSpotlight.title}
                        </h2>
                        <p className="text-base leading-relaxed text-gray-600 md:text-lg">
                            {sportsRehabilitationSpotlight.summary}
                        </p>
                        <p className="border-l-2 border-secondary pl-4 text-base leading-relaxed text-gray-600 md:text-lg">
                            {sportsRehabilitationSpotlight.achievement}
                        </p>

                        <div className="border-t border-gray-200 pt-5">
                            {sportsRehabilitationSpotlight.outcomes.map(
                                (item) => (
                                    <p
                                        key={item}
                                        className="mt-3 inline-flex items-start gap-2 text-sm text-gray-700 md:text-base"
                                    >
                                        <BadgeCheck
                                            size={16}
                                            className="mt-0.5 shrink-0 text-secondary"
                                        />
                                        {item}
                                    </p>
                                ),
                            )}
                        </div>
                    </div>
                </div>
            </section>

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Success Rate
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Key Recovery and Reintegration Indicators
                    </h2>

                    <div className="mt-8 grid gap-4 lg:grid-cols-2">
                        {successRateMetrics.map((metric) => (
                            <article
                                key={metric.label}
                                className="border border-gray-200 bg-white p-5"
                            >
                                <div className="flex items-center justify-between gap-4">
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {metric.label}
                                    </h3>
                                    <p className="text-2xl font-bold text-primary">
                                        {metric.value}%
                                    </p>
                                </div>
                                <div className="mt-3 h-2 w-full bg-gray-200">
                                    <div
                                        className="h-full bg-primary"
                                        style={{ width: `${metric.value}%` }}
                                    />
                                </div>
                                <p className="mt-3 text-sm text-gray-600">
                                    {metric.detail}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-0 py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Branches, Map, and Contact
                        </p>
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Male and Female Recovery Branches
                        </h2>
                        <p className="max-w-3xl text-gray-600">
                            The program operates through two dedicated centers
                            to provide gender-responsive care, treatment
                            continuity, and safe rehabilitation pathways.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-6 lg:grid-cols-2">
                        {branchTracks.map((branch) => {
                            const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(branch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

                            return (
                                <article
                                    key={branch.name}
                                    className="overflow-hidden border border-gray-200 bg-white"
                                >
                                    <div className="border-b border-gray-200">
                                        <iframe
                                            src={mapUrl}
                                            title={`${branch.name} map`}
                                            loading="lazy"
                                            referrerPolicy="no-referrer-when-downgrade"
                                            className="h-72 w-full"
                                        ></iframe>
                                    </div>

                                    <div className="p-5 flex flex-col gap-2">
                                        <p className="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase">
                                            {branch.unit}
                                        </p>
                                        <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                                            {branch.name}
                                        </h3>
                                        <p className="mt-4 inline-flex items-start gap-2 text-sm text-gray-700 md:text-base">
                                            <MapPin
                                                size={16}
                                                className="mt-0.5 shrink-0 text-primary"
                                            />
                                            {branch.address}
                                        </p>
                                        <a
                                            href={`tel:${branch.phone}`}
                                            className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700 transition-colors hover:text-primary md:text-base"
                                        >
                                            <Phone
                                                size={16}
                                                className="text-primary"
                                            />
                                            {branch.phone}
                                        </a>
                                        <p className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700 md:text-base">
                                            <Clock3
                                                size={16}
                                                className="text-primary"
                                            />
                                            {branch.hours}
                                        </p>
                                        <p className="mt-3 inline-flex items-center gap-2 text-sm text-gray-700 md:text-base">
                                            <Users
                                                size={16}
                                                className="text-primary"
                                            />
                                            {branch.lead}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
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
                            Expand Recovery Access for Marginalized People in
                            Crisis
                        </h2>
                        <p className="mt-3 max-w-2xl text-white/85">
                            Your support helps fund treatment, safe
                            rehabilitation, training, and pathways into stable
                            work for people rebuilding their lives.
                        </p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary cursor-pointer"
                        >
                            Donate Now
                        </button>
                        <button
                            type="button"
                            className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary cursor-pointer"
                        >
                            See Our Impact
                        </button>
                    </div>
                </div>

                <p className="mx-auto mt-5 flex max-w-4xl items-center justify-center gap-2 text-sm text-white/85">
                    <BadgeCheck size={15} className="text-gray-300" />
                    Recovery outcomes are monitored through branch-level case
                    reviews and quarterly reintegration reporting.
                </p>
            </section>
        </main>
    );
};

export default MentalHealthRecoveryProgram;
