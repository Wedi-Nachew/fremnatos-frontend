import {
    ArrowRight,
    BadgeCheck,
    Building2,
    CheckCircle2,
    CreditCard,
    HelpingHand,
    Landmark,
    Mail,
    Megaphone,
    Phone,
    Repeat2,
    ShieldCheck,
    Sparkles,
    Wallet,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import MottoCta from "../components/MottoCta";

const presetAmounts = [20, 30, 50, 70, 100, 150];

const donationDesignations = [
    "General Fund",
    "Children",
    "Elders",
    "Mental Health",
    "New Building",
];

const paymentMethods = [
    {
        name: "Credit card",
        description: "Secure online card payments",
        icon: CreditCard,
    },
    {
        name: "Bank transfer",
        description: "Local and international bank transfer",
        icon: Landmark,
    },
    {
        name: "Telebirr",
        description: "Mobile money (Ethiopia)",
        icon: Wallet,
    },
    {
        name: "CBE Birr",
        description: "Mobile money (Commercial Bank of Ethiopia)",
        icon: Phone,
    },
    {
        name: "PayPal",
        description: "International online payment",
        icon: Mail,
    },
    {
        name: "Stripe",
        description: "International card processing",
        icon: ShieldCheck,
    },
];

const volunteerRoles = [
    "Caregiving and direct support",
    "Teaching and educational mentoring",
    "Administration and operations",
    "Events and community outreach",
    "Fundraising and communication support",
    "Health and psychosocial service assistance",
];

const volunteerTestimonials = [
    {
        quote: "I joined for one weekend event and stayed because I saw how quickly practical support changes someone's path.",
        name: "Martha T.",
        role: "Volunteer Coordinator",
    },
    {
        quote: "Volunteering here is structured and meaningful. You always know where your time and skills are making impact.",
        name: "Bereket A.",
        role: "Education Volunteer",
    },
    {
        quote: "The team culture is warm, organized, and mission-driven. It feels like serving with purpose, not just helping casually.",
        name: "Rahel G.",
        role: "Events Volunteer",
    },
];

const membershipTiers = [
    {
        name: "Caregiving & Social Work",
        expertise: "Case management, direct support, and safeguarding",
        focus: "Support individual care plans and family reintegration pathways.",
    },
    {
        name: "Education & Mentorship",
        expertise: "Teaching, tutoring, life skills, and coaching",
        focus: "Guide children and youth through structured learning support.",
    },
    {
        name: "Health & Wellbeing",
        expertise: "Nursing, counseling, psychosocial and wellness services",
        focus: "Strengthen physical and mental wellbeing through practical care.",
    },
];

const membershipBenefits = [
    "Join project teams based on your professional strengths",
    "Contribute through short-term or ongoing expertise assignments",
    "Collaborate with staff and volunteers on real service delivery needs",
    "Receive clear role scopes and expected outcomes",
    "Access periodic learning sessions and coordination briefings",
    "Build long-term community impact through your field knowledge",
];

const partnerAudiences = [
    "Businesses",
    "Non-governmental organizations (NGOs)",
    "Government institutions",
];

const partnershipModels = [
    {
        title: "Financial partnership",
        description:
            "Direct program sponsorship, matching campaigns, and strategic grants.",
    },
    {
        title: "In-kind partnership",
        description:
            "Equipment, materials, technology, logistics, and service contributions.",
    },
    {
        title: "Technical partnership",
        description:
            "Training, systems support, advisory input, and capacity-building expertise.",
    },
];

const fundraiserToolkit = [
    {
        title: "Campaign starter guide",
        detail: "Step-by-step planning template and timeline.",
    },
    {
        title: "Ready-to-use media pack",
        detail: "Photos, captions, and social messages for your fundraiser.",
    },
    {
        title: "Storytelling prompts",
        detail: "Simple narratives to explain why your campaign matters.",
    },
    {
        title: "Budget and target worksheet",
        detail: "Set realistic goals and track progress with confidence.",
    },
    {
        title: "Offline event checklist",
        detail: "Run school, church, workplace, or neighborhood fundraising events.",
    },
    {
        title: "Team support contact",
        detail: "Get direct guidance from our fundraising support team.",
    },
];

const SectionHeading = ({ label, title, subtitle, light = false }) => {
    return (
        <div>
            <p
                className={`text-sm font-semibold tracking-[0.16em] uppercase ${
                    light ? "text-white/80" : "text-primary"
                }`}
            >
                {label}
            </p>
            <h2
                className={`mt-2 text-3xl font-bold leading-tight md:text-4xl ${
                    light ? "text-white" : "text-gray-900"
                }`}
            >
                {title}
            </h2>
            <p
                className={`mt-3 max-w-3xl md:text-lg ${
                    light ? "text-white/82" : "text-gray-600"
                }`}
            >
                {subtitle}
            </p>
        </div>
    );
};

const GetInvolved = () => {
    const [frequency, setFrequency] = useState("one-time");
    const [selectedAmount, setSelectedAmount] = useState(50);
    const [customAmount, setCustomAmount] = useState("");
    const [designation, setDesignation] = useState("General Fund");
    const [paymentMethod, setPaymentMethod] = useState("Credit card");
    const [wantsTaxReceipt, setWantsTaxReceipt] = useState(true);
    const [isMatchingGift, setIsMatchingGift] = useState(false);

    const donationValue = useMemo(() => {
        const parsed = Number(customAmount);

        if (Number.isFinite(parsed) && parsed > 0) {
            return parsed;
        }

        return selectedAmount;
    }, [customAmount, selectedAmount]);

    return (
        <>
            <main className="bg-[linear-gradient(180deg,#f6f8fa_0%,#ffffff_34%,#f7f9fb_100%)] text-gray-900">
                <section
                    id="hero-section"
                    className="relative flex min-h-120 items-end overflow-hidden px-6 pb-18 pt-26 text-white md:px-10 md:pb-22 md:pt-32"
                >
                    <div
                        className="absolute inset-0 bg-cover bg-center grayscale"
                        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1532629345422-7515f3d16bb6?auto=format&fit=crop&w=2000&q=80')" }}
                    />
                    <div className="absolute inset-0 bg-black/50" />
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(247,47,34,0.22),transparent_36%),radial-gradient(circle_at_82%_8%,rgba(255,255,255,0.14),transparent_42%)]" />

                    <div className="relative mx-auto max-w-7xl">
                        <p className="inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase">
                            Get Involved
                        </p>
                        <h1 className="mt-5 max-w-5xl text-4xl font-bold leading-[1.04] md:text-6xl">
                            Make Donation
                        </h1>
                        <p className="mt-4 inline-flex items-center gap-2 border-b border-white/40 pb-1 text-sm text-white/82">
                            <Link to="/" className="hover:text-white">
                                Home
                            </Link>
                            <span>/</span>
                            <span className="text-white">Donation</span>
                        </p>
                        <p className="mt-5 max-w-3xl text-base leading-relaxed text-white/84 md:text-lg">
                            Give support through a clean donation flow, then
                            continue with volunteering, expert membership,
                            institutional partnership, or fundraising.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-2">
                            {[
                                ["Donate Now", "#donate"],
                                ["Become a Volunteer", "#volunteer"],
                                ["Become a Member", "#member"],
                                ["Partner With Us", "#partner"],
                                ["Fundraise for Us", "#fundraise"],
                            ].map(([label, href]) => (
                                <a
                                    key={href}
                                    href={href}
                                    className="inline-flex items-center rounded-full border border-white/26 bg-white/10 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-white hover:text-accent"
                                >
                                    {label}
                                </a>
                            ))}
                        </div>
                    </div>
                </section>

                <section id="donate" className="px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl">
                        <div className="text-center">
                            <SectionHeading
                                label="6a. Donate Now"
                                title="Make Donation with open heart for people in need"
                                subtitle="Choose amount, complete billing and payment details, and submit securely in one streamlined flow."
                            />

                            <div className="mx-auto mt-8 max-w-4xl space-y-3 border-y border-gray-200 py-5 text-sm text-gray-700 md:text-base">
                                <p className="inline-flex items-start gap-2">
                                    <CheckCircle2
                                        size={18}
                                        className="mt-0.5 shrink-0 text-primary"
                                    />
                                    Tax receipt and acknowledgment available for
                                    each donation.
                                </p>
                                <p className="inline-flex items-start gap-2">
                                    <Repeat2
                                        size={18}
                                        className="mt-0.5 shrink-0 text-primary"
                                    />
                                    Recurring donations help stabilize monthly
                                    care operations.
                                </p>
                                <p className="inline-flex items-start gap-2">
                                    <Building2
                                        size={18}
                                        className="mt-0.5 shrink-0 text-primary"
                                    />
                                    Corporate donors can activate matching gift
                                    options.
                                </p>
                            </div>
                        </div>

                        <form
                            onSubmit={(event) => event.preventDefault()}
                            className="mt-8 w-full border border-gray-200 bg-white p-6 shadow-[0_14px_36px_rgba(15,23,42,0.06)] md:p-10"
                        >
                            <h3 className="text-2xl font-bold text-gray-900">
                                How much would you like to donate?
                            </h3>

                            <div className="mt-5 grid max-w-md gap-2 sm:grid-cols-2">
                                {[
                                    ["one-time", "One-time"],
                                    ["recurring", "Recurring"],
                                ].map(([value, label]) => (
                                    <button
                                        key={value}
                                        type="button"
                                        onClick={() => setFrequency(value)}
                                        className={`rounded-xl border px-4 py-3 text-sm font-semibold transition-colors ${
                                            frequency === value
                                                ? "border-primary bg-primary text-white"
                                                : "border-gray-300 bg-white text-gray-700 hover:border-primary"
                                        }`}
                                    >
                                        {label}
                                    </button>
                                ))}
                            </div>

                            <div className="mt-5 flex flex-wrap items-center gap-3">
                                {presetAmounts.map((amount) => (
                                    <button
                                        key={amount}
                                        type="button"
                                        onClick={() => {
                                            setSelectedAmount(amount);
                                            setCustomAmount("");
                                        }}
                                        className={`inline-flex h-12 min-w-16 items-center justify-center rounded-full border px-4 text-sm font-semibold transition-colors ${
                                            selectedAmount === amount &&
                                            customAmount.trim() === ""
                                                ? "border-primary bg-primary text-white"
                                                : "border-gray-200 bg-gray-50 text-gray-700 hover:border-primary"
                                        }`}
                                    >
                                        ${amount}
                                    </button>
                                ))}
                                <span className="text-sm font-semibold text-gray-500">
                                    or
                                </span>
                                <input
                                    type="number"
                                    min="1"
                                    value={customAmount}
                                    onChange={(event) =>
                                        setCustomAmount(event.target.value)
                                    }
                                    placeholder="$50"
                                    className="h-12 w-full max-w-56 border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                            </div>

                            <div className="mt-8 border-t border-gray-200 pt-8">
                                <h4 className="text-2xl font-bold text-gray-900">
                                    Billing Information
                                </h4>

                                <div className="mt-5 grid gap-3 md:grid-cols-2">
                                    <input
                                        type="text"
                                        placeholder="First name"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Last name"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="email"
                                        placeholder="Email"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="tel"
                                        placeholder="Phone"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Address line 1"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Address line 2"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="text"
                                        placeholder="City"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="text"
                                        placeholder="State / Province"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="mt-8 border-t border-gray-200 pt-8">
                                <h4 className="text-2xl font-bold text-gray-900">
                                    Payment Information
                                </h4>

                                <div className="mt-5 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                                    {paymentMethods.map((method) => {
                                        const Icon = method.icon;
                                        const isActive =
                                            paymentMethod === method.name;

                                        return (
                                            <button
                                                key={method.name}
                                                type="button"
                                                onClick={() =>
                                                    setPaymentMethod(
                                                        method.name,
                                                    )
                                                }
                                                className={`flex items-center gap-3 border px-3 py-3 text-left transition-colors ${
                                                    isActive
                                                        ? "border-primary bg-primary/8"
                                                        : "border-gray-200 hover:border-primary"
                                                }`}
                                            >
                                                <span
                                                    className={`inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                                                        isActive
                                                            ? "bg-primary text-white"
                                                            : "bg-gray-100 text-gray-700"
                                                    }`}
                                                >
                                                    <Icon size={15} />
                                                </span>
                                                <span>
                                                    <span className="block text-sm font-semibold text-gray-900">
                                                        {method.name}
                                                    </span>
                                                    <span className="block text-xs text-gray-600">
                                                        {method.description}
                                                    </span>
                                                </span>
                                            </button>
                                        );
                                    })}
                                </div>

                                <div className="mt-5 grid gap-3 md:grid-cols-2">
                                    <input
                                        type="text"
                                        placeholder="Card number"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Card holder name"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="text"
                                        placeholder="MM / YY"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                    <input
                                        type="text"
                                        placeholder="Security code (CVC)"
                                        className="h-11 w-full border border-gray-300 px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex flex-wrap items-center gap-3">
                                <span className="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase">
                                    Designate fund
                                </span>
                                <select
                                    value={designation}
                                    onChange={(event) =>
                                        setDesignation(event.target.value)
                                    }
                                    className="h-10 min-w-56 border border-gray-300 bg-white px-3 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                >
                                    {donationDesignations.map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <label className="mt-4 inline-flex items-start gap-2 text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={wantsTaxReceipt}
                                    onChange={(event) =>
                                        setWantsTaxReceipt(event.target.checked)
                                    }
                                    className="mt-0.5"
                                />
                                Send tax receipt / donation acknowledgment
                            </label>

                            <label className="mt-2 inline-flex items-start gap-2 text-sm text-gray-700">
                                <input
                                    type="checkbox"
                                    checked={isMatchingGift}
                                    onChange={(event) =>
                                        setIsMatchingGift(event.target.checked)
                                    }
                                    className="mt-0.5"
                                />
                                I am donating through a company matching gift
                                program
                            </label>

                            <button
                                type="submit"
                                className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Donate{" "}
                                {frequency === "recurring"
                                    ? `monthly $${donationValue}`
                                    : `$${donationValue}`}
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </section>

                <section
                    id="volunteer"
                    className="border-y border-gray-200 bg-white px-6 py-14 md:px-10 md:py-18"
                >
                    <div className="mx-auto max-w-7xl">
                        <div>
                            <SectionHeading
                                label="6b. Become a Volunteer"
                                title="Contribute your time where it matters most."
                                subtitle="Join caregiving, education, operations, and event support roles with clear responsibilities and team guidance."
                            />

                            <ul className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
                                {volunteerRoles.map((role, index) => (
                                    <li
                                        key={role}
                                        className="inline-flex w-full items-center gap-3 py-3"
                                    >
                                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-semibold text-primary">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>
                                        <span className="text-gray-700 md:text-lg">
                                            {role}
                                        </span>
                                    </li>
                                ))}
                            </ul>

                            <div className="mt-8">
                                <p className="text-sm font-semibold tracking-[0.14em] text-primary uppercase">
                                    Voices from our volunteers
                                </p>
                                <div className="mt-4 space-y-4">
                                    {volunteerTestimonials.map((item) => (
                                        <blockquote
                                            key={item.name}
                                            className="border-l-2 border-primary/40 pl-4"
                                        >
                                            <p className="text-gray-700 md:text-lg">
                                                "{item.quote}"
                                            </p>
                                            <footer className="mt-2 text-sm font-semibold text-gray-900">
                                                {item.name}, {item.role}
                                            </footer>
                                        </blockquote>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <form
                            onSubmit={(event) => event.preventDefault()}
                            className="mt-8 w-full border-t border-gray-300/80 pt-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                Volunteer application form
                            </h3>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone number"
                                    className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <select className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary">
                                    <option>Preferred role</option>
                                    {volunteerRoles.map((role) => (
                                        <option key={role} value={role}>
                                            {role}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Availability (days/hours)"
                                    className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="City / location"
                                    className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                            </div>

                            <textarea
                                rows={5}
                                placeholder="Tell us about your motivation and relevant skills"
                                className="mt-3 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                            />

                            <button
                                type="submit"
                                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Submit volunteer application
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </section>

                <section id="member" className="px-6 py-14 md:px-10 md:py-18">
                    <div className="mx-auto max-w-7xl">
                        <div>
                            <SectionHeading
                                label="6c. Become a Member"
                                title="Join as an expertise-based member."
                                subtitle="Contribute your professional skills in care, education, operations, health, communication, or leadership support."
                            />

                            <div className="mt-6 divide-y divide-gray-200 border-y border-gray-200">
                                {membershipTiers.map((tier, index) => (
                                    <div
                                        key={tier.name}
                                        className={`grid gap-3 py-4 md:grid-cols-[1.1fr_0.8fr_1.1fr] md:items-center ${
                                            index > 0
                                                ? "border-t border-gray-200"
                                                : ""
                                        }`}
                                    >
                                        <p className="text-lg font-semibold text-gray-900">
                                            {tier.name}
                                        </p>
                                        <p className="text-sm font-semibold text-primary md:text-base">
                                            {tier.expertise}
                                        </p>
                                        <p className="text-sm text-gray-600 md:text-base">
                                            {tier.focus}
                                        </p>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-6 grid gap-2 sm:grid-cols-2">
                                {membershipBenefits.map((benefit) => (
                                    <p
                                        key={benefit}
                                        className="inline-flex items-start gap-2 text-sm text-gray-700 md:text-base"
                                    >
                                        <BadgeCheck
                                            size={16}
                                            className="mt-0.5 shrink-0 text-primary"
                                        />
                                        {benefit}
                                    </p>
                                ))}
                            </div>
                        </div>

                        <form
                            onSubmit={(event) => event.preventDefault()}
                            className="mt-8 w-full border-t border-gray-300/80 pt-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                Member expertise profile form
                            </h3>

                            <div className="mt-5 space-y-3">
                                <input
                                    type="text"
                                    placeholder="Full name"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <input
                                    type="email"
                                    placeholder="Email address"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <select className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary">
                                    <option>
                                        Select your primary expertise area
                                    </option>
                                    {membershipTiers.map((tier) => (
                                        <option
                                            key={tier.name}
                                            value={tier.name}
                                        >
                                            {tier.name}
                                        </option>
                                    ))}
                                </select>
                                <input
                                    type="text"
                                    placeholder="Years of relevant experience"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Availability (weekly hours / days)"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <textarea
                                    rows={5}
                                    placeholder="Describe the expertise you can contribute and how you would like to support"
                                    className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                            </div>

                            <label className="mt-4 inline-flex items-start gap-2 text-sm text-gray-700">
                                <input type="checkbox" className="mt-0.5" />I
                                agree to be contacted about expertise-based
                                member opportunities and coordination updates.
                            </label>

                            <button
                                type="submit"
                                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Submit member profile
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </section>

                <section
                    id="partner"
                    className="border-y border-gray-200 bg-white px-6 py-14 md:px-10 md:py-18"
                >
                    <div className="mx-auto max-w-7xl">
                        <div>
                            <SectionHeading
                                label="6d. Partner With Us"
                                title="Build mission partnerships across sectors."
                                subtitle="We collaborate with businesses, NGOs, and public institutions through flexible partnership models."
                            />

                            <div className="mt-6 border-y border-gray-200 py-5">
                                <p className="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase">
                                    Who we partner with
                                </p>
                                <div className="mt-3 flex flex-wrap gap-2">
                                    {partnerAudiences.map((item) => (
                                        <span
                                            key={item}
                                            className="rounded-full border border-gray-300 px-3 py-1 text-sm font-medium text-gray-700"
                                        >
                                            {item}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="mt-5 divide-y divide-gray-200 border-y border-gray-200">
                                {partnershipModels.map((model, index) => (
                                    <article key={model.title} className="py-4">
                                        <p className="text-xs font-semibold tracking-[0.16em] text-primary uppercase">
                                            Model{" "}
                                            {String(index + 1).padStart(2, "0")}
                                        </p>
                                        <h3 className="mt-1 text-xl font-semibold text-gray-900">
                                            {model.title}
                                        </h3>
                                        <p className="mt-2 text-gray-600">
                                            {model.description}
                                        </p>
                                    </article>
                                ))}
                            </div>
                        </div>

                        <form
                            onSubmit={(event) => event.preventDefault()}
                            className="mt-8 w-full border-t border-gray-300/80 pt-6"
                        >
                            <h3 className="text-xl font-semibold text-gray-900">
                                Partnership contact form
                            </h3>

                            <div className="mt-5 grid gap-3 sm:grid-cols-2">
                                <input
                                    type="text"
                                    placeholder="Organization name"
                                    className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <input
                                    type="text"
                                    placeholder="Contact person"
                                    className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <select className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary">
                                    <option>Organization type</option>
                                    {partnerAudiences.map((item) => (
                                        <option key={item} value={item}>
                                            {item}
                                        </option>
                                    ))}
                                </select>
                                <select className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary">
                                    <option>Partnership model</option>
                                    {partnershipModels.map((model) => (
                                        <option
                                            key={model.title}
                                            value={model.title}
                                        >
                                            {model.title}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div className="mt-3 grid gap-3 sm:grid-cols-2">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                                <input
                                    type="tel"
                                    placeholder="Phone"
                                    className="rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                                />
                            </div>

                            <textarea
                                rows={5}
                                placeholder="Tell us your partnership idea, resources, and timeline"
                                className="mt-3 w-full rounded-xl border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition-colors focus:border-primary"
                            />

                            <button
                                type="submit"
                                className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                            >
                                Send partnership request
                                <ArrowRight size={16} />
                            </button>
                        </form>
                    </div>
                </section>

                <section
                    id="fundraise"
                    className="relative overflow-hidden bg-primary px-6 py-16 text-white md:px-10 md:py-20"
                >
                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_10%_14%,rgba(247,47,34,0.25),transparent_38%),radial-gradient(circle_at_90%_12%,rgba(255,255,255,0.12),transparent_40%)]" />

                    <div className="relative mx-auto max-w-7xl">
                        <SectionHeading
                            label="6e. Fundraise for Us"
                            title="Run your own fundraiser with ready support tools."
                            subtitle="Use our toolkit to launch online or community-based campaigns with practical guidance from start to finish."
                            light
                        />

                        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {fundraiserToolkit.map((item, index) => (
                                <article
                                    key={item.title}
                                    className="border-l border-white/40 pl-4"
                                >
                                    <p className="text-xs font-semibold tracking-[0.16em] text-secondary uppercase">
                                        Toolkit{" "}
                                        {String(index + 1).padStart(2, "0")}
                                    </p>
                                    <h3 className="mt-2 text-lg font-semibold text-white">
                                        {item.title}
                                    </h3>
                                    <p className="mt-1 text-sm text-white/80">
                                        {item.detail}
                                    </p>
                                </article>
                            ))}
                        </div>

                        <div className="mt-8 flex flex-wrap items-center gap-3 border-t border-white/20 pt-6">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary"
                            >
                                Download starter toolkit
                            </button>
                            <a
                                href="mailto:fundraise@fremnatos.org"
                                className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary"
                            >
                                Contact fundraising support
                            </a>
                            <Link
                                to="/our-impact"
                                className="inline-flex items-center gap-2 text-sm font-semibold text-white/86 hover:text-white"
                            >
                                See real outcomes
                                <ArrowRight size={15} />
                            </Link>
                        </div>

                        <div className="mt-10 grid gap-3 border-t border-white/20 pt-6 text-sm text-white/80 md:grid-cols-3 md:text-base">
                            <p className="inline-flex items-center gap-2">
                                <Sparkles size={16} />
                                Personal campaigns
                            </p>
                            <p className="inline-flex items-center gap-2">
                                <HelpingHand size={16} />
                                Team and workplace drives
                            </p>
                            <p className="inline-flex items-center gap-2">
                                <Megaphone size={16} />
                                School and community events
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            <MottoCta />
        </>
    );
};

export default GetInvolved;
