import {
    ArrowRight,
    BadgeCheck,
    BriefcaseBusiness,
    HandHeart,
    Lightbulb,
    UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import MottoCta from "../components/MottoCta";
import PageHero from "../components/PageHero";

const memberProfiles = [
    {
        name: "Clinical Mentor Group",
        role: "Health Advisory Members",
        blurb: "Support clinical protocols, care quality reviews, and case consultations.",
    },
    {
        name: "Education Circle",
        role: "Learning & Mentorship Members",
        blurb: "Design tutoring plans, train youth mentors, and improve learning outcomes.",
    },
    {
        name: "Operations Fellows",
        role: "Systems & Process Members",
        blurb: "Help optimize HR, finance, logistics, and operational planning.",
    },
    {
        name: "Communication Guild",
        role: "Media & Outreach Members",
        blurb: "Lead storytelling, donor communication, and campaign content.",
    },
];

const skillWays = [
    {
        title: "Professional Mentorship",
        text: "Mentor team leads and young professionals in leadership and service delivery.",
        icon: UsersRound,
    },
    {
        title: "Systems Improvement",
        text: "Improve processes, policies, documentation, and accountability workflows.",
        icon: BriefcaseBusiness,
    },
    {
        title: "Training & Capacity Building",
        text: "Run practical training for staff and volunteers in your area of expertise.",
        icon: Lightbulb,
    },
    {
        title: "Field Problem Solving",
        text: "Collaborate with branch teams to solve practical challenges quickly.",
        icon: HandHeart,
    },
];

const MembershipPage = () => {
    return (
        <>
            <main className="bg-[linear-gradient(180deg,#f6f8fa_0%,#ffffff_45%,#f6f8fa_100%)] text-gray-900">
                <PageHero
                    label="Get Involved"
                    title="Become a Member: Transform Lives with Your Skills"
                    description="Membership is not only about giving money. Members help transform the organization with practical skills, strategic support, and leadership."
                    backgroundImage="/hero-bg-1.jpg"
                    contentPaddingTop="pt-10 md:pt-8"
                />

                <section className="px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Member Teams
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Meet Our Professional Member Groups
                        </h2>
                        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {memberProfiles.map((member) => (
                                <article
                                    key={member.name}
                                    className="border border-gray-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
                                >
                                    <div className="relative mb-4">
                                        <span className="absolute -top-2 -left-2 h-9 w-22 rotate-[-8deg] bg-secondary/85" />
                                        <div className="relative inline-flex h-18 w-18 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                                            {member.name
                                                .split(" ")
                                                .map((part) => part[0])
                                                .join("")
                                                .slice(0, 2)}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {member.name}
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-primary">
                                        {member.role}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                        {member.blurb}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-primary px-6 py-12 text-white md:px-10">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-semibold tracking-[0.16em] text-secondary uppercase">
                            Beyond Donations
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            How Members Help the Organization Grow
                        </h2>
                        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {skillWays.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <article
                                        key={item.title}
                                        className="border border-white/20 bg-white/8 p-5"
                                    >
                                        <Icon
                                            size={28}
                                            className="text-secondary"
                                        />
                                        <h3 className="mt-4 text-xl font-semibold">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-white/85">
                                            {item.text}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl border border-gray-200 bg-white p-6 md:p-10">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Membership Profile
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Apply as a Skills-Based Member
                        </h2>

                        <div className="mt-6 grid gap-2 md:grid-cols-2">
                            {[
                                "Join mission teams with your area of expertise",
                                "Contribute in short-term or long-term assignments",
                                "Support branch staff with advisory and implementation help",
                                "Participate in regular planning and learning sessions",
                            ].map((point) => (
                                <p
                                    key={point}
                                    className="inline-flex items-start gap-2 text-sm text-gray-700 md:text-base"
                                >
                                    <BadgeCheck
                                        size={16}
                                        className="mt-0.5 shrink-0 text-primary"
                                    />
                                    {point}
                                </p>
                            ))}
                        </div>

                        <form
                            className="mt-8"
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <div className="grid gap-3 md:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Primary expertise"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Years of experience"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Current role / organization"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Availability (weekly hours)"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                            </div>
                            <textarea
                                rows={5}
                                placeholder="Describe how your skills can transform programs, systems, or service quality"
                                className="mt-3 w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Submit Membership Profile
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </section>
            </main>
            <MottoCta />
        </>
    );
};

export default MembershipPage;
