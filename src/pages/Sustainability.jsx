import {
    BadgeCheck,
    BriefcaseBusiness,
    Building2,
    Factory,
    GraduationCap,
    HeartPulse,
    House,
    Sprout,
    Stethoscope,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";

const agricultureActivities = [
    {
        title: "Animal Farm",
        summary:
            "Livestock and poultry operations provide practical work opportunities while improving daily nutrition across branches.",
        outcome: "Care-linked nutrition and stable jobs",
        image: "https://images.unsplash.com/photo-1464226184884-fa280b87c399?auto=format&fit=crop&w=1800&q=80",
        alt: "Cattle and livestock activity at a farm",
        imageCaption: "Livestock supports both nutrition and employment.",
    },
    {
        title: "Bee Farm & Honey Production",
        summary:
            "Managed apiaries generate marketable honey products while building confidence in handling, quality control, and packaging.",
        outcome: "Value-added local products",
        image: "https://picsum.photos/",
        alt: "Bee hives and honey production work",
        imageCaption: "Apiculture skills translate into long-term income.",
    },
    {
        title: "Fish Farm",
        summary:
            "Fish production supports food supply, technical training, and recurring revenue from local market sales.",
        outcome: "Food security and skill development",
        image: "https://images.unsplash.com/photo-1524704654690-b56c05c78a00?auto=format&fit=crop&w=1800&q=80",
        alt: "Fish farming and water-based cultivation",
        imageCaption: "Aquaculture creates practical technical pathways.",
    },
    {
        title: "Vegetable Gardens",
        summary:
            "Seasonal and greenhouse vegetable plots supply branch kitchens and teach climate-smart farming practices.",
        outcome: "Fresh produce and farm apprenticeships",
        image: "https://images.unsplash.com/photo-1461354464878-ad92f492a5a0?auto=format&fit=crop&w=1800&q=80",
        alt: "Fresh vegetable cultivation in garden rows",
        imageCaption: "Gardens link nutrition, learning, and resilience.",
    },
];

const manufacturingActivities = [
    {
        title: "Soap Production",
        summary:
            "Small-batch soap lines produce essential hygiene products while creating structured entry-level employment pathways.",
        outcome: "Skills-to-market production",
        image: "https://images.unsplash.com/photo-1607006483224-9f98f4f6d6db?auto=format&fit=crop&w=1800&q=80",
        alt: "Handmade soap production process",
        imageCaption:
            "Production discipline supports recovery-to-work transition.",
    },
    {
        title: "Detergent Production",
        summary:
            "Detergent manufacturing builds repeatable production skills and supports wholesale and retail distribution channels.",
        outcome: "Consistent market-ready output",
        image: "https://images.unsplash.com/photo-1583947582886-f40ec95dd752?auto=format&fit=crop&w=1800&q=80",
        alt: "Detergent bottles and manufacturing output",
        imageCaption: "Scalable production lines improve internal financing.",
    },
];

const serviceActivities = [
    {
        title: "Event Hall",
        summary:
            "A rental venue for trainings, family functions, and community events that generates reliable service income.",
        status: "Open for bookings",
        image: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1800&q=80",
        alt: "Event hall prepared for community gathering",
        imageCaption: "Venue services create steady recurring revenue.",
    },
    {
        title: "Freminatos Park",
        summary:
            "A planned recreation and learning destination designed to become a long-term social and economic anchor.",
        status: "Coming soon",
        image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1800&q=80",
        alt: "Public park landscape planned for community use",
        imageCaption: "A future space for community and enterprise growth.",
    },
];

const ecosystemSteps = [
    {
        icon: Users,
        title: "Person enters with mental illness or addiction",
        description:
            "Outreach and referral connect vulnerable people to immediate intake support.",
    },
    {
        icon: Stethoscope,
        title: "Treatment and recovery",
        description:
            "Clinical care, counseling, and structure stabilize health and daily function.",
    },
    {
        icon: GraduationCap,
        title: "Skills training program",
        description:
            "Participants gain practical competencies and confidence for transition.",
    },
    {
        icon: BriefcaseBusiness,
        title: "Employed in an enterprise",
        description:
            "Graduates are integrated into farming, production, and service units.",
    },
    {
        icon: HeartPulse,
        title: "Enterprise generates income",
        description:
            "Products and services create recurring social-enterprise revenue.",
    },
    {
        icon: House,
        title: "Income funds the organization",
        description:
            "Revenue returns to treatment, shelter, nutrition, and operations.",
    },
    {
        icon: BadgeCheck,
        title: "More people can be helped",
        description:
            "The cycle expands care capacity and supports the next admission.",
    },
];

const ActivityRow = ({ item, index, icon: Icon, showStatus = false }) => {
    const isReversed = index % 2 === 1;

    return (
        <article className="border-t border-gray-200 py-6 first:border-t-0">
            <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
                <div
                    className={`relative min-h-72 overflow-hidden rounded  lg:col-span-6 ${
                        isReversed ? "lg:order-2" : ""
                    }`}
                >
                    <img
                        src={item.image}
                        alt={item.alt}
                        className="h-full w-full object-cover"
                        loading="lazy"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent" />
                    <p className="absolute right-4 bottom-4 left-4 text-sm font-medium text-white/92">
                        {item.imageCaption}
                    </p>
                </div>

                <div
                    className={`lg:col-span-6 ${isReversed ? "lg:order-1" : ""}`}
                >
                    <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                        {String(index + 1).padStart(2, "0")}
                    </p>

                    <div className="mt-2 flex flex-wrap items-center gap-3">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                            {Icon ? <Icon size={18} /> : null}
                        </span>
                        <h3 className="text-2xl font-semibold text-gray-900 md:text-3xl">
                            {item.title}
                        </h3>

                        {showStatus && item.status ? (
                            <span
                                className={`rounded-full px-3 py-1 text-xs font-semibold tracking-wide uppercase ${
                                    item.status === "Coming soon"
                                        ? "bg-amber-100 text-amber-800"
                                        : "bg-emerald-100 text-emerald-800"
                                }`}
                            >
                                {item.status}
                            </span>
                        ) : null}
                    </div>

                    <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-700 md:text-lg">
                        {item.summary}
                    </p>

                    {item.outcome ? (
                        <p className="mt-4 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-primary uppercase">
                            {item.outcome}
                        </p>
                    ) : null}
                </div>
            </div>
        </article>
    );
};

const ActivitySection = ({
    id,
    label,
    title,
    intro,
    items,
    icon,
    showStatus = false,
    className = "bg-white",
}) => {
    return (
        <section
            id={id}
            className={`px-6 py-14 md:px-10 md:py-18 ${className}`}
        >
            <div className="mx-auto max-w-6xl">
                <p className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
                    {label}
                </p>
                <h2 className="mt-2 text-3xl font-bold md:text-4xl">{title}</h2>
                <p className="mt-3 max-w-3xl text-gray-600 md:text-lg">
                    {intro}
                </p>

                <div className="mt-6 border-y border-gray-200">
                    {items.map((item, index) => (
                        <ActivityRow
                            key={item.title}
                            item={item}
                            index={index}
                            icon={icon}
                            showStatus={showStatus}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

const Sustainability = () => {
    return (
        <main className="bg-[#f5f7f6] text-gray-900">
            <PageHero
                label="Sustainability & Social Enterprises"
                title="Building a self-sufficient model that funds care with dignified work."
                description="Our social enterprises are designed as one connected ecosystem: people recover, gain skills, work in mission-driven enterprises, and help sustain care for the next person in need."
                backgroundImage="https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=2000&q=80"
                sectionClassName="relative flex h-180 md:h-136 w-full overflow-hidden"
                backgroundClassName="h-full w-full bg-cover bg-center grayscale"
                containerClassName="mx-auto flex w-full max-w-7xl flex-col gap-5"
                labelClassName="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs tracking-[0.18em] text-white uppercase backdrop-blur-sm"
                titleClassName="max-w-4xl text-3xl font-bold leading-[1.05] text-white md:text-5xl"
                descriptionClassName="max-w-3xl text-base text-white/85 md:text-lg"
            >
                <div className="mt-6 grid max-w-4xl gap-4 border-t border-white/25 pt-6 text-sm text-white/88 sm:grid-cols-3 md:text-base">
                    <div>
                        <p className="text-2xl font-semibold md:text-3xl">4</p>
                        <p className="mt-1">Agriculture streams</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold md:text-3xl">2</p>
                        <p className="mt-1">Manufacturing lines</p>
                    </div>
                    <div>
                        <p className="text-2xl font-semibold md:text-3xl">2</p>
                        <p className="mt-1">Service venues</p>
                    </div>
                </div>
            </PageHero>

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[minmax(0,1fr)_24rem] bg-white">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
                            Our Vision for Self-Sufficiency
                        </p>
                        <h2 className="mt-3 text-3xl font-bold leading-tight md:text-4xl">
                            From donor dependence to mission-powered enterprise.
                        </h2>
                        <p className="mt-4 text-gray-700 md:text-lg md:leading-8">
                            Sustainability at Fremnatos is part of our care
                            architecture. Every enterprise is designed to create
                            jobs for people in recovery, strengthen community
                            services, and channel income back into treatment,
                            housing, and daily support.
                        </p>
                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                            {[
                                "Create dignified employment pathways",
                                "Reduce long-term funding volatility",
                                "Expand care capacity responsibly",
                                "Keep reinvestment focused on people",
                            ].map((goal) => (
                                <div
                                    key={goal}
                                    className="inline-flex items-start gap-2 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-2 text-sm text-gray-700"
                                >
                                    <BadgeCheck
                                        size={16}
                                        className="mt-0.5 shrink-0 text-primary"
                                    />
                                    <span>{goal}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    <aside className="relative overflow-hidden rounded-4xl border border-primary/18 bg-white p-7 md:p-8">
                        <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1200&q=80"
                            alt="Team members planning enterprise activities"
                            className="absolute inset-0 h-full w-full object-cover"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/68 via-black/46 to-black/28" />

                        <div className="relative text-white">
                            <h3 className="text-xl font-semibold text-white">
                                Why this model matters
                            </h3>
                            <div className="mt-4 space-y-3 text-sm leading-relaxed text-white/90 md:text-base">
                                <p>
                                    Enterprises create practical transition
                                    routes for people completing recovery.
                                </p>
                                <p>
                                    Revenue from products and services helps
                                    fund core operations, especially in
                                    high-demand periods.
                                </p>
                                <p>
                                    The model grows local resilience by keeping
                                    value creation and social impact connected.
                                </p>
                            </div>
                        </div>
                    </aside>
                </div>
            </section>

            <ActivitySection
                id="agriculture"
                label="Agriculture & Farming"
                title="Each activity combines livelihoods, nutrition, and reintegration."
                intro="Every farm stream is presented as its own mission-linked activity, with dedicated imagery and a clear recovery-to-income outcome."
                items={agricultureActivities}
                icon={Sprout}
                className="border-y border-gray-200 bg-white"
            />

            <ActivitySection
                id="manufacturing"
                label="Manufacturing & Production"
                title="Practical production lines with direct market relevance."
                intro="Manufacturing pathways are designed for repeatable quality, practical upskilling, and stable social-enterprise revenue."
                items={manufacturingActivities}
                icon={Factory}
                className="bg-[#f8faf9]"
            />

            <ActivitySection
                id="services"
                label="Services & Venues"
                title="Community-facing services that strengthen sustainability."
                intro="Service enterprises combine social value and financial resilience, with room for future expansion."
                items={serviceActivities}
                icon={Building2}
                showStatus
                className="border-y border-gray-200 bg-white"
            />

            <section className="px-6 py-16 md:px-10 md:py-20 bg-white">
                <div className="mx-auto max-w-6xl">
                    <p className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
                        The Ecosystem
                    </p>
                    <h2 className="mt-2 text-3xl font-bold md:text-5xl">
                        How it all connects
                    </h2>
                    <p className="mt-4 max-w-3xl text-gray-700 md:text-lg">
                        A wrapped recovery-to-enterprise cycle that keeps care,
                        work, and reinvestment continuously connected.
                    </p>

                    <div className="relative mt-10">
                        <div className="pointer-events-none absolute top-6 bottom-6 left-1/2 hidden w-px -translate-x-1/2 bg-gray-300 md:block" />

                        <ol className="space-y-5 md:space-y-6">
                            {ecosystemSteps.map((step, index) => {
                                const Icon = step.icon;
                                const alignRight = index % 2 === 0;
                                const numberOnRight = index % 2 === 0;

                                return (
                                    <li
                                        key={step.title}
                                        className="grid grid-cols-1 md:grid-cols-2 md:gap-8"
                                    >
                                        <div
                                            className={`${
                                                alignRight
                                                    ? "md:col-start-2"
                                                    : "md:col-start-1"
                                            }`}
                                        >
                                            <div
                                                className={`w-full max-w-xl ${
                                                    alignRight
                                                        ? "md:mr-auto"
                                                        : "md:ml-auto"
                                                }`}
                                            >
                                                <div
                                                    className={`mb-2 h-0.5 w-28 bg-primary ${
                                                        alignRight
                                                            ? "ml-5"
                                                            : "ml-auto mr-5"
                                                    }`}
                                                />

                                                <article className="overflow-hidden rounded-full border border-gray-200 bg-white shadow-[0_18px_34px_-26px_rgba(0,0,0,0.42)]">
                                                    <div
                                                        className={`flex items-stretch ${
                                                            numberOnRight
                                                                ? ""
                                                                : "flex-row-reverse"
                                                        }`}
                                                    >
                                                        <div className="flex flex-1 items-center gap-3 px-5 py-4 md:px-6">
                                                            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                                <Icon
                                                                    size={18}
                                                                />
                                                            </span>
                                                            <div>
                                                                <p className="text-[11px] font-semibold tracking-[0.16em] text-primary uppercase">
                                                                    Step{" "}
                                                                    {String(
                                                                        index +
                                                                            1,
                                                                    ).padStart(
                                                                        2,
                                                                        "0",
                                                                    )}
                                                                </p>
                                                                <h3 className="text-sm font-semibold leading-tight text-gray-900 md:text-base">
                                                                    {step.title}
                                                                </h3>
                                                                <p className="mt-1 text-xs leading-relaxed text-gray-600 md:text-sm">
                                                                    {
                                                                        step.description
                                                                    }
                                                                </p>
                                                            </div>
                                                        </div>

                                                        <span
                                                            className={`flex w-20 shrink-0 items-center justify-center text-2xl font-bold text-white md:w-24 bg-primary`}
                                                        >
                                                            {String(
                                                                index + 1,
                                                            ).padStart(2, "0")}
                                                        </span>
                                                    </div>
                                                </article>
                                            </div>
                                        </div>
                                    </li>
                                );
                            })}
                        </ol>
                    </div>

                    <p className="mt-8 inline-flex rounded-full bg-primary/10 px-4 py-1.5 text-sm font-semibold tracking-wide text-primary uppercase">
                        Cycle continues
                    </p>
                </div>
            </section>

            <section className="mx-auto flex max-w-7xl flex-col items-center overflow-hidden bg-primary px-6 py-10 text-center text-white md:px-12 md:py-14">
                <p className="text-sm font-semibold tracking-widest text-white/85 uppercase">
                    Invest in Sustainability
                </p>

                <h2 className="mt-4 max-w-5xl text-2xl font-bold leading-relaxed md:text-4xl">
                    Help us scale social enterprises that fund treatment,
                    recovery, and long-term dignity.
                </h2>

                <p className="mt-4 max-w-3xl text-white/90 md:text-lg">
                    Support infrastructure, equipment, and training that keeps
                    the sustainability cycle active and expands who we can help.
                </p>

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
            </section>
        </main>
    );
};

export default Sustainability;
