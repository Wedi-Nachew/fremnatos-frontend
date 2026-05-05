import {
    ArrowRight,
    BadgeCheck,
    Building2,
    CheckCircle2,
    Clock3,
    HandHeart,
    HeartPulse,
    Home,
    MapPin,
    Phone,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { branches } from "../data/ourStoryData";

const problemPoints = [
    {
        title: "Abandonment and neglect",
        description:
            "Many older adults are left without consistent caregiving due to displacement, poverty, or family separation.",
    },
    {
        title: "No stable family support",
        description:
            "Some elders have no adult children nearby, while others depend on families already under severe economic pressure.",
    },
    {
        title: "Health needs without follow-up",
        description:
            "Chronic conditions often go untreated when elders lack transport, medication access, and daily monitoring.",
    },
];

const problemStats = [
    {
        value: "140+",
        label: "Elders identified through outreach as requiring consistent daily support",
    },
    {
        value: "68%",
        label: "Admissions reporting no dependable family caregiver at intake",
    },
    {
        value: "3 in 4",
        label: "Residents requiring regular medication and blood pressure monitoring",
    },
    {
        value: "24/7",
        label: "Residential supervision available in the main branch home",
    },
];

const approachPillars = [
    {
        icon: Home,
        title: "Housing",
        description:
            "Safe shared rooms, accessible wash spaces, meals, and predictable routines in a protected residential setting.",
    },
    {
        icon: HeartPulse,
        title: "Medical Care",
        description:
            "Routine screenings, medication follow-up, clinic referrals, and on-site daily health checks.",
    },
    {
        icon: Users,
        title: "Companionship",
        description:
            "Peer circles, social activities, and meaningful interaction with children living in the same branch.",
    },
    {
        icon: Building2,
        title: "Dignity",
        description:
            "Respectful care plans, personal identity support, and participation in decisions affecting daily life.",
    },
];

const dailyLifeMedia = [
    {
        title: "Morning tea and story sharing",
        source: "https://picsum.photos/seed/fremnatos-elderly-1/1400/1000",
    },
    {
        title: "Light activity and mobility support",
        source: "https://picsum.photos/seed/fremnatos-elderly-2/1200/1000",
    },
    {
        title: "Intergenerational craft session",
        source: "https://picsum.photos/seed/fremnatos-elderly-3/1200/1000",
    },
    {
        title: "Shared mealtime in the branch home",
        source: "https://picsum.photos/seed/fremnatos-elderly-4/1400/1000",
    },
    {
        title: "Clinic check and medication follow-up",
        source: "https://picsum.photos/seed/fremnatos-elderly-5/1400/1000",
    },
];

const outcomeMetrics = [
    {
        value: "92",
        label: "Elders currently served",
        detail: "Residential and day-support participants across the main branch program",
    },
    {
        value: "87%",
        label: "Health follow-up adherence",
        detail: "Residents attending scheduled checks and medication routines consistently",
    },
    {
        value: "4.8/5",
        label: "Wellbeing satisfaction",
        detail: "Average score from monthly elder wellbeing and dignity check-ins",
    },
];

const testimonials = [
    {
        quote: "I no longer feel alone. I share meals and stories every day, and I am cared for with respect.",
        byline: "Resident, Main Branch",
    },
    {
        quote: "Living together with children gave me purpose again. They call me grandmother, and I feel needed.",
        byline: "Elder participant, Intergenerational Home",
    },
];

const ElderlyCareProgram = () => {
    const mainBranch =
        branches.find((item) => item.slug === "mekelle-central") ?? branches[0];
    const branchLead =
        mainBranch?.staffDirectory?.find((person) =>
            /manager|director|lead/i.test(person.role),
        ) ?? mainBranch?.staffDirectory?.[0];

    const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(mainBranch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;
    const branchLeadAvatar = branchLead
        ? `https://ui-avatars.com/api/?name=${encodeURIComponent(branchLead.name)}&background=f72f22&color=ffffff&size=320`
        : "https://ui-avatars.com/api/?name=Fremnatos&background=f72f22&color=ffffff&size=320";

    return (
        <main className="bg-white text-gray-900">
            <PageHero
                label="Elderly Care Program"
                title="Warm, Safe Care for Elders Who Deserve Dignity and Belonging"
                description="At Fremnatos main branch, elders live in a compassionate shared home with support for health, companionship, and daily dignity while also connecting with children in an intergenerational care environment."
                backgroundImage="/elderly-care.jpg"
                titleClassName="mt-5 max-w-3xl text-4xl font-bold leading-[1.06] text-white md:text-6xl"
            />

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        The Problem
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Abandoned Elders and Weak Family Support Leave Many
                        Older Adults Unprotected
                    </h2>

                    <div className="mt-8 grid gap-4 md:grid-cols-3">
                        {problemPoints.map((point) => (
                            <article
                                key={point.title}
                                className="rounded-2xl border border-gray-200 bg-gray-50 p-5"
                            >
                                <h3 className="text-xl font-semibold text-gray-900">
                                    {point.title}
                                </h3>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                    {point.description}
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                        {problemStats.map((item) => (
                            <article
                                key={item.label}
                                className="border-t-2 border-gray-200 bg-white px-5 py-6"
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

            <section className="bg-gray-50 px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Our Approach
                    </p>
                    <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                        Housing, Medical Care, Companionship, and Dignity in One
                        Integrated Model
                    </h2>
                    <p className="mt-4 max-w-3xl text-gray-600">
                        The elderly program is designed as a whole-person care
                        journey, not isolated services. Each resident receives
                        shelter, health follow-up, social connection, and
                        respect-centered support.
                    </p>

                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {approachPillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <article
                                    key={pillar.title}
                                    className="rounded-3xl border border-gray-200 bg-white p-5 shadow-sm"
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
                    <div className="grid gap-8 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:gap-12">
                        <div className="space-y-5">
                            <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                                Intergenerational Home
                            </p>
                            <h2 className="mt-2 text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                                One Shared Home Where Elders and Children Heal
                                Together
                            </h2>
                            <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                                The main branch intentionally houses elders and
                                children in one daily environment so abandoned
                                children receive parental warmth and elders
                                regain purpose, belonging, and active family
                                roles.
                            </p>
                            <p className="text-sm leading-relaxed text-gray-600 md:text-base">
                                Instead of separating generations, the branch
                                intentionally keeps them close in daily life.
                                Elders become trusted grandparents, and children
                                grow up with consistent affection, guidance, and
                                emotional safety.
                            </p>

                            <div className="mt-6 grid gap-4 sm:grid-cols-2">
                                <article className="border-l-3 border-primary/90 pl-4">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                        For Children
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                                        Parental Love and Stability
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                        Children receive daily affection,
                                        guidance, and emotional safety from
                                        elders who become trusted parent and
                                        grandparent figures.
                                    </p>
                                </article>

                                <article className="border-l-3 border-primary/90 pl-4">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                        For Elders
                                    </p>
                                    <h3 className="mt-2 text-xl font-semibold text-gray-900">
                                        Purpose and Daily Connection
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                        Elders move from isolation to meaningful
                                        routines, sharing stories, mealtimes,
                                        and mentorship that restore dignity and
                                        social identity.
                                    </p>
                                </article>
                            </div>
                        </div>

                        <div className="grid gap-3">
                            <figure className="overflow-hidden rounded-3xl">
                                <img
                                    src="https://picsum.photos/seed/fremnatos-elders-children-playing-main/1600/900"
                                    alt="Children and elders playing together in the courtyard"
                                    className="aspect-video w-full object-cover"
                                    loading="lazy"
                                />
                            </figure>

                            <div className="grid grid-cols-2 gap-3">
                                <figure className="overflow-hidden rounded-2xl">
                                    <img
                                        src="https://picsum.photos/seed/fremnatos-elders-children-storytime/900/700"
                                        alt="Elder reading to children during story time"
                                        className="aspect-4/3 w-full object-cover"
                                        loading="lazy"
                                    />
                                </figure>

                                <figure className="overflow-hidden rounded-2xl">
                                    <img
                                        src="https://picsum.photos/seed/fremnatos-elders-children-meal/900/700"
                                        alt="Children and elders sharing a meal"
                                        className="aspect-4/3 w-full object-cover"
                                        loading="lazy"
                                    />
                                </figure>
                            </div>
                        </div>
                    </div>

                    <article className="mt-10 border-t border-gray-200 pt-10">
                        <div className="flex flex-col gap-3">
                            <p className="text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
                                Resident Video Journey
                            </p>
                            <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                                Before and After: One Elder's Path Back to
                                Family and Health
                            </h3>
                            <p className="max-w-4xl text-sm leading-relaxed text-gray-600 md:text-base">
                                This showcase follows one resident's first weeks
                                after admission and the months that follow,
                                highlighting how consistent care, medicine,
                                shared meals, and child interaction gradually
                                rebuild confidence and dignity.
                            </p>
                        </div>

                        <div className="mt-6 overflow-hidden rounded-3xl bg-black w-full h-80 md:h-115">
                            <iframe
                                src="https://www.youtube.com/embed/aqz-KE-bpKQ"
                                title="Elder recovery journey video"
                                className="h-full w-full"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            />
                        </div>

                        <div className="mt-6 grid gap-6 md:grid-cols-2">
                            <article className="border-l-3 border-primary/90 pl-4">
                                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                    Before
                                </p>
                                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                                    Abandoned, Isolated, and Medically Unstable
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                                    In the video, a 72-year-old resident arrives
                                    exhausted and withdrawn after months without
                                    reliable support. She has unmanaged blood
                                    pressure, irregular meals, and visible fear
                                    about being forgotten, repeatedly saying she
                                    did not want to be a burden to anyone.
                                </p>
                            </article>

                            <article className="border-l-3 border-primary/90 pl-4">
                                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                    After
                                </p>
                                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                                    Connected, Cared for, and Living With
                                    Dignity
                                </h3>
                                <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                                    Over time, daily medication follow-up,
                                    regular meals, and simple routines restore
                                    her strength and sleep. She begins laughing
                                    with children during play periods, tells
                                    stories after dinner, and describes the
                                    branch as "home" where she feels seen,
                                    valued, and loved again.
                                </p>
                            </article>
                        </div>
                    </article>
                </div>
            </section>

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Daily Life
                    </p>
                    <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                        Everyday Activities That Keep Elders Active and
                        Connected
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

                        <article className="overflow-hidden rounded-2xl lg:col-span-5">
                            <img
                                src={dailyLifeMedia[2].source}
                                alt={dailyLifeMedia[2].title}
                                className="h-full w-full object-cover"
                                loading="lazy"
                            />
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

            <section className="bg-gray-50 px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Outcomes
                    </p>
                    <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                        Measurable Support and Resident Voices
                    </h2>

                    <div className="mt-7 grid gap-4 md:grid-cols-3">
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
                                    Program tracked indicator
                                </p>
                            </article>
                        ))}
                    </div>

                    <div className="mt-6 grid gap-4 md:grid-cols-2">
                        {testimonials.map((testimonial) => (
                            <article
                                key={testimonial.byline}
                                className="rounded-2xl border border-primary/20 bg-primary/8 p-5"
                            >
                                <p className="text-sm leading-relaxed text-gray-700 md:text-base">
                                    “{testimonial.quote}”
                                </p>
                                <p className="mt-3 text-sm font-semibold text-primary">
                                    {testimonial.byline}
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
                            Main Branch Location
                        </p>
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Where Elders and Children Live Together
                        </h2>
                        <p className="max-w-3xl text-gray-600">
                            The elderly program is hosted at the same main
                            branch, where elders and children share community
                            spaces, meals, routines, and a family-like daily
                            life.
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
                            <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1.2fr]">
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
                                        Program Focus
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-white/82">
                                        Residential elder care, health
                                        monitoring, companionship, and dignified
                                        daily support in an intergenerational
                                        branch setting.
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
                                                Program Lead
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

            <section className="bg-primary px-6 py-14 text-white md:px-10 md:py-18">
                <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                    <div className="flex flex-col items-center">
                        <p className="text-sm font-semibold tracking-[0.18em] text-white/85 uppercase">
                            Take Action
                        </p>
                        <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                            Help Us Protect More Elders With Compassionate,
                            Daily Care
                        </h2>
                        <p className="mt-3 max-w-2xl text-white/85">
                            Your contribution supports food, medical follow-up,
                            shelter, and companionship for elders who have no
                            reliable support system.
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
                    <BadgeCheck size={15} className="text-white/80" />
                    Donations and volunteer support are tracked through program
                    reports and branch-level monthly updates.
                </p>
            </section>
        </main>
    );
};

export default ElderlyCareProgram;
