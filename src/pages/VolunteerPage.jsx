import {
    ArrowRight,
    BookOpen,
    HandHeart,
    HeartHandshake,
    Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import MottoCta from "../components/MottoCta";
import PageHero from "../components/PageHero";

const volunteerTeam = [
    {
        name: "Selam Tekle",
        role: "Volunteer Lead",
        blurb: "Coordinates volunteer onboarding, role matching, and safeguarding standards.",
    },
    {
        name: "Mikias Gidey",
        role: "Education Mentor",
        blurb: "Leads after-school tutoring and learning support for children in care.",
    },
    {
        name: "Rahel Hagos",
        role: "Care Coordinator",
        blurb: "Supports care teams with daily schedules, wellbeing follow-up, and referrals.",
    },
    {
        name: "Samuel Tsegay",
        role: "Community Volunteer",
        blurb: "Helps with events, outreach activities, and family support visits.",
    },
];

const impactAreas = [
    {
        title: "Direct Care",
        text: "Support daily caregiving and practical service delivery in branches.",
        icon: HandHeart,
    },
    {
        title: "Child Tutoring",
        text: "Teach literacy, numeracy, and homework support for children and youth.",
        icon: BookOpen,
    },
    {
        title: "Team Support",
        text: "Assist operations, communication, and program logistics teams.",
        icon: Users,
    },
    {
        title: "Community Outreach",
        text: "Join campaigns and field events to connect families with services.",
        icon: HeartHandshake,
    },
];

const VolunteerPage = () => {
    return (
        <>
            <main className="bg-[linear-gradient(180deg,#f6f8fa_0%,#ffffff_45%,#f6f8fa_100%)] text-gray-900">
                <PageHero
                    label="Get Involved"
                    title="Become a Volunteer"
                    description="Join a coordinated volunteer team to serve children, elders, and people in recovery. Volunteers can also tutor children through structured education support."
                    backgroundImage="/hero-bg-1.jpg"
                    contentPaddingTop="md:pt-8"
                />

                <section className="px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Meet Our Team
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            We Have a Volunteer Team of Professionals
                        </h2>
                        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {volunteerTeam.map((member) => (
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
                    <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {impactAreas.map((item) => {
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
                </section>

                <section className="px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl border border-gray-200 bg-white p-6 md:p-10">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Volunteer Application
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Apply to Volunteer
                        </h2>
                        <p className="mt-3 max-w-3xl text-gray-600 md:text-lg">
                            Tell us your role interests, availability, and
                            relevant experience. We will match you with an
                            appropriate team.
                        </p>

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
                                    type="tel"
                                    placeholder="Phone number"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Preferred role"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Availability (days/hours)"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="City / location"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                            </div>
                            <textarea
                                rows={5}
                                placeholder="Share your motivation and experience, including interest in tutoring children if applicable"
                                className="mt-3 w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Submit Volunteer Application
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </section>

                <section className="border-t border-gray-200 bg-white px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl border border-gray-200 p-6 md:p-10">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Membership Form
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Become a Member Too
                        </h2>
                        <p className="mt-3 max-w-3xl text-gray-600 md:text-lg">
                            If you want ongoing involvement beyond volunteering,
                            submit your membership profile below.
                        </p>

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
                            </div>
                            <textarea
                                rows={4}
                                placeholder="How would you like to help the organization through your skills?"
                                className="mt-3 w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Submit Membership Form
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

export default VolunteerPage;
