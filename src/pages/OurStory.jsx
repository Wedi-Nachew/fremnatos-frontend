import {
    ArrowRight,
    Baby,
    Brain,
    Clock3,
    Download,
    Flag,
    Heart,
    MapPin,
    Phone,
    ShieldCheck,
    Sparkles,
    Target,
    Users,
    UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import TeamContactCard from "../components/TeamContactCard";
import {
    annualReports,
    branches,
    coreValues,
    crisisHighlights,
    foundingStory,
    leadershipTeam,
    missionVision,
    timelineMilestones,
} from "../data/ourStoryData";

const problemIcons = {
    Baby,
    UsersRound,
    Brain,
};

const valueIcons = {
    Heart,
    ShieldCheck,
    Sparkles,
    Users,
};

const OurStory = () => {
    const branchCurrentLoad = branches.reduce(
        (total, branch) => total + branch.capacity.current,
        0,
    );

    const branchDemand = branches.reduce(
        (total, branch) => total + branch.capacity.demand,
        0,
    );

    const coverageRate = Math.round((branchCurrentLoad / branchDemand) * 100);

    return (
        <main className="bg-white text-gray-900">
            <PageHero
                label="Our Story"
                title="A Human-Centered Journey From Crisis Response to Community Recovery"
                description="Fremnatos grew from one response center into a branch network supporting vulnerable children, elders, and people facing severe mental health distress."
                backgroundImage="/hero-bg-1.jpg"
                sectionClassName="relative flex h-200 md:h-136 w-full overflow-hidden"
                containerClassName="mx-auto flex w-full max-w-7xl flex-col gap-5"
                labelClassName="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs tracking-[0.18em] text-white uppercase backdrop-blur-sm"
                titleClassName="max-w-3xl text-3xl font-bold leading-[1.05] text-white md:text-5xl"
                descriptionClassName="max-w-3xl text-base text-white/85 md:text-lg"
            >
                <div className="mt-2 grid gap-3 sm:grid-cols-4 md:max-w-3xl">
                    {[
                        { title: "Founded", stat: "1990" },
                        { title: "Branches", stat: "4" },
                        {
                            title: "Capacity Coverage",
                            stat: `${coverageRate}%`,
                        },
                        { title: "Waitilist Applicants", stat: 65000 },
                    ].map((item) => (
                        <article
                            key={item.title}
                            className="rounded-xl border border-white/25 bg-white/10 px-4 py-1 text-white backdrop-blur-lg"
                        >
                            <p className="text-sm text-secondary">
                                {item.title}
                            </p>
                            <p className="text-2xl font-semibold text-primary">
                                {item.stat}
                            </p>
                        </article>
                    ))}
                </div>
            </PageHero>

            <section id="impact" className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-12 lg:gap-10">
                    <div className="space-y-5 lg:col-span-7">
                        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                            Founding Story
                        </p>
                        <h2 className="text-3xl font-bold leading-tight md:text-4xl">
                            {foundingStory.title}
                        </h2>
                        <p className="text-lg leading-relaxed text-gray-700">
                            {foundingStory.summary}
                        </p>
                        <p className="text-gray-600">{foundingStory.detail}</p>

                        <div className="">
                            <h3 className="text-xl font-semibold text-gray-900">
                                The Problem We Saw
                            </h3>
                            <p className="mt-2 max-w-3xl text-gray-600">
                                We first responded to visible service gaps:
                                unsafe childhood conditions, isolated elders,
                                and untreated mental health crises.
                            </p>

                            <div className="mt-6 grid gap-4 md:grid-cols-3">
                                {crisisHighlights.map((item) => {
                                    const Icon =
                                        problemIcons[item.icon] ?? Baby;

                                    return (
                                        <article
                                            key={item.title}
                                            className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-white p-5 transition-transform duration-300 hover:-translate-y-1"
                                        >
                                            <div
                                                className={`absolute inset-x-0 top-0 h-1 bg-linear-to-r ${item.accent}`}
                                            />
                                            <div className="absolute -top-9 -right-8 h-22 w-22 rounded-full bg-gray-100 transition-colors group-hover:bg-gray-200" />

                                            <div className="relative">
                                                <span className="inline-flex rounded-xl bg-primary/10 p-2 text-primary">
                                                    <Icon size={20} />
                                                </span>
                                                <p className="mt-4 text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                                                    {item.stat}
                                                </p>
                                                <h4 className="mt-2 text-xl font-semibold text-gray-900">
                                                    {item.title}
                                                </h4>
                                                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                                    {item.description}
                                                </p>
                                            </div>
                                        </article>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    <aside className="relative overflow-hidden rounded-2xl border border-gray-200 lg:col-span-5">
                        <img
                            src="/hero-bg-2.jpg"
                            alt="Fremnatos response and community support"
                            className="h-full min-h-90 w-full object-cover"
                        />
                        <div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
                        <div className="absolute right-4 bottom-4 left-4 rounded-xl border border-white/20 bg-primary p-4 text-white backdrop-blur-sm">
                            <p className="text-xs tracking-[0.2em] text-secondary uppercase">
                                Ground Reality
                            </p>
                            <p className="mt-2 text-lg font-semibold leading-snug">
                                Demand grew faster than existing social support,
                                which shaped our branch expansion strategy.
                            </p>
                        </div>
                    </aside>
                </div>
            </section>

            <section
                id="timeline"
                className="bg-white px-6 py-14 md:px-10 md:py-18"
            >
                <div className="mx-auto max-w-7xl">
                    <div className="mb-9">
                        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                            Timeline & Milestones
                        </p>
                        <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                            From First Shelter to Branch Growth, Full Capacity,
                            and the New Building Phase
                        </h2>
                    </div>

                    <div className="space-y-8 md:space-y-10">
                        {timelineMilestones.map((item, index) => {
                            const reverse = index % 2 !== 0;

                            return (
                                <article
                                    key={`${item.year}-${item.title}`}
                                    className="grid gap-4 md:grid-cols-2 md:items-center md:gap-7"
                                >
                                    <div
                                        className={`relative overflow-hidden rounded-xl border border-gray-200 ${reverse ? "md:order-2" : ""}`}
                                    >
                                        <img
                                            src={item.image}
                                            alt={`${item.title} visual`}
                                            className="h-62 w-full object-cover"
                                        />
                                    </div>

                                    <div
                                        className={`relative bg-white p-7 pb-10 ${reverse ? "md:order-1" : ""}`}
                                    >
                                        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                                            {item.label}
                                        </p>
                                        <h3 className="mt-2 text-2xl font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-gray-600">
                                            {item.description}
                                        </p>

                                        <span
                                            className={`pointer-events-none absolute -bottom-3 text-6xl font-bold tracking-tight text-primary/23 md:text-7xl ${reverse ? "left-5" : "right-5"}`}
                                        >
                                            {item.year}
                                        </span>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            <section
                id="mission-vision"
                className="relative overflow-hidden bg-white px-6 py-14 text-black md:px-10 md:py-18"
            >
                <div className="relative mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.2em] text-secondary uppercase">
                        Mission, Vision & Values
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Our Purpose Architecture: What Drives Action, Scale, and
                        Long-Term Impact
                    </h2>

                    <div className="mt-8 grid gap-5 lg:grid-cols-12">
                        <article className="relative isolate overflow-hidden rounded-3xl border border-white/20 bg-linear-to-br from-primary to-[#c71f15] p-7 shadow-2xl lg:col-span-4">
                            <div className="absolute -top-10 -right-10 h-36 w-36 rounded-full border border-white/20" />
                            <div className="absolute -bottom-12 -left-12 h-40 w-40 rounded-full bg-secondary/18 blur-2xl" />

                            <p className="relative inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
                                <Target size={15} />
                                Mission
                            </p>
                            <p className="relative mt-4 text-sm leading-relaxed text-white/92 md:text-base">
                                {missionVision.mission}
                            </p>
                        </article>

                        <article className="relative isolate overflow-hidden rounded-3xl border border-white/20 lg:col-span-8">
                            <div
                                className="absolute inset-0 bg-fixed bg-cover bg-center"
                                style={{
                                    backgroundImage:
                                        "url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
                                }}
                            />
                            <div className="absolute inset-0 bg-linear-to-r from-black/72 via-black/56 to-primary/35" />

                            <div className="relative flex min-h-56 items-end p-7 md:min-h-62 md:p-8">
                                <div className="max-w-2xl">
                                    <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
                                        <Flag size={15} />
                                        Vision
                                    </p>
                                    <p className="mt-4 text-sm leading-relaxed text-white/92 md:text-base">
                                        {missionVision.vision}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>

                    <article className="mt-5 overflow-hidden rounded-3xl border border-white/15 bg-white/6 backdrop-blur-sm">
                        <div className="border-b border-white/10 px-6 py-5 md:px-8">
                            <p className="text-xs font-semibold tracking-[0.2em] text-secondary uppercase">
                                Core Values
                            </p>
                            <p className="mt-2 max-w-3xl text-sm text-black/78 md:text-base">
                                {missionVision.valuesLead}
                            </p>
                        </div>

                        <div className="grid gap-4 p-6 md:grid-cols-2 md:p-8">
                            {coreValues.map((value) => {
                                const Icon = valueIcons[value.icon] ?? Heart;

                                return (
                                    <article
                                        key={value.name}
                                        className="group relative overflow-hidden rounded-2xl  bg-primary p-5 transition-all duration-300 hover:bg-secondary"
                                    >
                                        <div className="flex items-start gap-3">
                                            <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary transition-colors duration-300 group-hover:text-secondary">
                                                <Icon size={18} />
                                            </span>
                                            <div>
                                                <h3 className="text-base font-semibold text-white md:text-lg">
                                                    {value.name}
                                                </h3>
                                                <p className="mt-1 text-sm leading-relaxed text-white/78 md:text-base">
                                                    {value.description}
                                                </p>
                                            </div>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </article>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Leadership & Team
                    </p>
                    <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                        Core Leadership Contacts
                    </h2>

                    <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                        {leadershipTeam.map((person) => (
                            <TeamContactCard
                                key={person.name}
                                person={person}
                                showImage
                                showSocial
                            />
                        ))}
                    </div>
                </div>
            </section>

            <section id="branches" className="px-0 py-14 md:py-18">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                            Our Branches
                        </p>
                        <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                            Branch Network and Service Pressure
                        </h2>
                        <p className="max-w-3xl text-gray-600">
                            This is a placeholder map image. You can replace it
                            with React Leaflet or another interactive map.
                        </p>
                    </div>
                </div>

                <div className="relative mt-8">
                    <div className="w-full overflow-hidden border-y border-gray-200">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3359.2501361105674!2d39.4836097!3d13.5014934!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x166afd5285ddcf75%3A0x9b60ce7c6993b6e!2sMekelle%20Hospital!5e1!3m2!1sen!2set!4v1773466648061!5m2!1sen!2set"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-116 w-full object-cover md:h-120"
                        ></iframe>
                    </div>

                    <div className="relative z-10 mx-auto -mt-14 w-full max-w-7xl px-6 md:-mt-18 md:px-10">
                        <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg md:p-6">
                            <div className="grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                                {branches.map((branch) => (
                                    <Link
                                        key={branch.slug}
                                        to={`/our-branches/${branch.slug}`}
                                        className="group rounded-xl border border-gray-200 bg-gray-50 px-4 py-4 transition-colors hover:border-primary/60 hover:bg-white"
                                    >
                                        <div className="flex items-start justify-between gap-3">
                                            <div className="flex items-center gap-3">
                                                <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                                                    <MapPin size={16} />
                                                </span>

                                                <div>
                                                    <h3 className="text-lg font-semibold text-gray-900">
                                                        {branch.shortName}
                                                    </h3>
                                                    <p className="text-xs text-gray-500 uppercase tracking-[0.12em]">
                                                        {branch.region}
                                                    </p>
                                                </div>
                                            </div>

                                            <ArrowRight
                                                size={16}
                                                className="text-gray-400 transition-colors group-hover:text-primary"
                                            />
                                        </div>

                                        <p className="mt-3 text-xs text-gray-600">
                                            Launched {branch.launchYear} · Full
                                            capacity {branch.fullCapacityYear}
                                        </p>
                                    </Link>
                                ))}
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="bg-primary px-6 py-14 text-white md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-white/85 uppercase">
                        Annual Reports
                    </p>
                    <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                        Downloadable Annual Report Files
                    </h2>

                    <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
                        {annualReports.map((report) => (
                            <article
                                key={report.year}
                                className="rounded-2xl border border-white/15 bg-white/5 p-5"
                            >
                                <p className="text-sm font-semibold tracking-[0.16em] text-white/80 uppercase">
                                    {report.year}
                                </p>
                                <h3 className="mt-2 text-xl font-semibold text-white">
                                    {report.title}
                                </h3>
                                <p className="mt-1 text-sm text-white/70">
                                    {report.period}
                                </p>
                                <p className="mt-1 text-sm text-white/70">
                                    File size: {report.size}
                                </p>

                                <a
                                    href={report.file}
                                    download
                                    className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors hover:text-black"
                                >
                                    <Download size={16} />
                                    Download PDF
                                </a>
                            </article>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default OurStory;
