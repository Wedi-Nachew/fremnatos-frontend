import {
    ArrowRight,
    Building2,
    Handshake,
    HeartPulse,
    Truck,
} from "lucide-react";
import { Link } from "react-router-dom";
import MottoCta from "../components/MottoCta";
import PageHero from "../components/PageHero";

const partnerCards = [
    {
        name: "Rimna Hospital",
        role: "Healthcare Partner",
        impact: "Hired and pays the salary for a lab technician for the organization clinic.",
    },
    {
        name: "Tigray Health Bureau",
        role: "Public Sector Partner",
        impact: "Donated an ambulance to strengthen emergency response and referrals.",
    },
    {
        name: "Mekelle Tech Solutions",
        role: "Technology Partner",
        impact: "Installed and maintains digital records and connectivity for branch operations.",
    },
    {
        name: "Selam Logistics",
        role: "Logistics Partner",
        impact: "Provides monthly transport support for medicine and essential supplies.",
    },
];

const models = [
    {
        title: "Financial Partnership",
        text: "Sponsor key roles, care units, and essential operational needs.",
        icon: Building2,
    },
    {
        title: "Technical Partnership",
        text: "Contribute expert services, systems, and capacity building support.",
        icon: Handshake,
    },
    {
        title: "Medical Partnership",
        text: "Support health services with staff, equipment, and referral pathways.",
        icon: HeartPulse,
    },
    {
        title: "In-Kind Partnership",
        text: "Provide transport, supplies, devices, or infrastructure resources.",
        icon: Truck,
    },
];

const PartnershipsPage = () => {
    return (
        <>
            <main className="bg-[linear-gradient(180deg,#f6f8fa_0%,#ffffff_45%,#f6f8fa_100%)] text-gray-900">
                <PageHero
                    label="Get Involved"
                    title="Become a Partner"
                    description="Build long-term partnerships that strengthen healthcare, operations, and program delivery across our branches."
                    backgroundImage="/hero-bg-1.jpg"
                    contentPaddingTop="md:pt-8"
                />

                <section className="px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Partner Highlights
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Organizations and What They Have Delivered
                        </h2>
                        <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                            {partnerCards.map((partner) => (
                                <article
                                    key={partner.name}
                                    className="border border-gray-200 bg-white p-5 shadow-[0_8px_24px_rgba(15,23,42,0.05)]"
                                >
                                    <div className="relative mb-4">
                                        <span className="absolute -top-2 -left-2 h-9 w-22 rotate-[-8deg] bg-secondary/85" />
                                        <div className="relative inline-flex h-18 w-18 items-center justify-center rounded-full bg-primary text-lg font-bold text-white">
                                            {partner.name
                                                .split(" ")
                                                .map((part) => part[0])
                                                .join("")
                                                .slice(0, 2)}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-gray-900">
                                        {partner.name}
                                    </h3>
                                    <p className="mt-1 text-sm font-semibold text-primary">
                                        {partner.role}
                                    </p>
                                    <p className="mt-3 text-sm leading-relaxed text-gray-600">
                                        {partner.impact}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </div>
                </section>

                <section className="bg-primary px-6 py-12 text-white md:px-10">
                    <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-2 xl:grid-cols-4">
                        {models.map((item) => {
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
                            Partnership Form
                        </p>
                        <h2 className="mt-2 text-3xl font-bold md:text-4xl">
                            Propose a Partnership
                        </h2>
                        <p className="mt-3 max-w-3xl text-gray-600 md:text-lg">
                            Share your partnership model, available resources,
                            and timeline. Our team will follow up for alignment
                            and planning.
                        </p>

                        <form
                            className="mt-8"
                            onSubmit={(event) => event.preventDefault()}
                        >
                            <div className="grid gap-3 md:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Organization name"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Contact person"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                                <select className="h-11 border border-gray-300 bg-white px-3 text-sm outline-none focus:border-primary">
                                    <option>Partnership model</option>
                                    <option>Financial Partnership</option>
                                    <option>Technical Partnership</option>
                                    <option>Medical Partnership</option>
                                    <option>In-Kind Partnership</option>
                                </select>
                                <input
                                    type="text"
                                    placeholder="City / country"
                                    className="h-11 border border-gray-300 px-3 text-sm outline-none focus:border-primary"
                                />
                            </div>
                            <textarea
                                rows={5}
                                placeholder="Tell us what your organization can contribute and expected impact"
                                className="mt-3 w-full border border-gray-300 px-3 py-2.5 text-sm outline-none focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="mt-4 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Submit Partnership Proposal
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

export default PartnershipsPage;
