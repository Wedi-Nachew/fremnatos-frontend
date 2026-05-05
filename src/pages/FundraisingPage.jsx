import {
    ArrowRight,
    BadgeCheck,
    FileText,
    Megaphone,
    PenSquare,
    Share2,
} from "lucide-react";
import { Link } from "react-router-dom";
import MottoCta from "../components/MottoCta";
import PageHero from "../components/PageHero";

const supportItems = [
    {
        title: "Media Coverage Support",
        text: "We amplify your campaign through our official channels and community networks.",
        icon: Megaphone,
    },
    {
        title: "Formal Support Letter",
        text: "Receive an official letter to strengthen trust with schools, companies, and local partners.",
        icon: FileText,
    },
    {
        title: "Campaign Messaging Kit",
        text: "Get ready-made social media copy, poster lines, and storytelling prompts.",
        icon: PenSquare,
    },
    {
        title: "Event Promotion",
        text: "We help announce your event and share updates before and after execution.",
        icon: Share2,
    },
];

const checklist = [
    "Campaign brief review and goal clarification",
    "Branding guidance and approved visual assets",
    "Messaging templates for online and offline outreach",
    "Coordination support before launch day",
    "Impact reporting format after the event",
];

const FundraisingPage = () => {
    return (
        <>
            <main className="bg-[linear-gradient(180deg,#f6f8fa_0%,#ffffff_45%,#f6f8fa_100%)] text-gray-900">
                <PageHero
                    label="Get Involved"
                    title="Fundraise for Us"
                    description="Launch a campaign and we will support you with visibility, communication tools, and institutional backing."
                    backgroundImage="/hero-bg-1.jpg"
                    contentPaddingTop="md:pt-8"
                />

                <section className="px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            What We Provide
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            How the Organization Supports Your Event
                        </h2>
                        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
                            {supportItems.map((item) => {
                                const Icon = item.icon;
                                return (
                                    <article
                                        key={item.title}
                                        className="border border-gray-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
                                    >
                                        <Icon
                                            size={28}
                                            className="text-primary"
                                        />
                                        <h3 className="mt-4 text-xl font-semibold text-gray-900">
                                            {item.title}
                                        </h3>
                                        <p className="mt-2 text-sm leading-relaxed text-gray-600">
                                            {item.text}
                                        </p>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </section>

                <section className="bg-primary px-6 py-12 text-white md:px-10">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-semibold tracking-[0.16em] text-secondary uppercase">
                            Campaign Checklist
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            What You Can Expect From Us
                        </h2>
                        <div className="mt-8 grid gap-3 md:grid-cols-2">
                            {checklist.map((item) => (
                                <p
                                    key={item}
                                    className="inline-flex items-start gap-2 border-l border-white/35 pl-3 text-white/90"
                                >
                                    <BadgeCheck
                                        size={16}
                                        className="mt-1 shrink-0 text-secondary"
                                    />
                                    {item}
                                </p>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl border border-gray-200 bg-white p-6 md:p-10">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Fundraising Request Form
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Tell Us About Your Fundraising Event
                        </h2>
                        <p className="mt-3 max-w-3xl text-gray-600 md:text-lg">
                            Share your campaign idea and support needs. We will
                            coordinate media, communication, and formal
                            documentation support.
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
                                    placeholder="Campaign title"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Target amount or target outcome"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Planned event date"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Event location"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                            </div>
                            <textarea
                                rows={5}
                                placeholder="What support do you need (media coverage, formal letter, promotional assets, etc.)?"
                                className="mt-3 w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Submit Fundraising Request
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

export default FundraisingPage;
