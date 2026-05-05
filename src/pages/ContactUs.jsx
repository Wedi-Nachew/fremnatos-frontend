import {
    AlertCircle,
    ArrowRight,
    CheckCircle2,
    Clock3,
    Mail,
    MapPin,
    Phone,
    X,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import MottoCta from "../components/MottoCta";
import PageHero from "../components/PageHero";
import TeamContactCard from "../components/TeamContactCard";

const contactChannels = [
    {
        label: "Call",
        value: "+251 911 123 456",
        href: "tel:+251911123456",
        icon: Phone,
    },
    {
        label: "Email",
        value: "hello@fremnatos.org",
        href: "mailto:hello@fremnatos.org",
        icon: Mail,
    },
    {
        label: "Visit",
        value: "Mekelle, Tigray, Ethiopia",
        href: "https://maps.google.com/?q=Mekelle%2C%20Tigray%2C%20Ethiopia",
        icon: MapPin,
    },
];

const contactPeople = [
    {
        name: "Aba G/medhin Berhe",
        role: "Partnerships and Community Relations Lead",
        phone: ["+251 920 102 19", "+251 931 109 99"],
        email: "abagebremedhnzeselama@gmail.com",
        availability: "Mon - Fri, 9:00 AM - 5:00 PM",
        note: "Handles partnerships, institutional outreach, and donor relation inquiries.",
        image: "/aba_gebremedhn.png",
        socials: {
            linkedin: "https://www.linkedin.com/company/fremnatos",
            facebook: "https://www.facebook.com/fremnatos",
            instagram: "https://www.instagram.com/fremnatos",
        },
    },
    {
        name: "Aba Samuel Asgedom",
        role: "Programs and Volunteer Coordination Officer",
        phone: ["+97 254 304 6018"],
        email: "abasamuelasgedom@gmail.com",
        availability: "Mon - Sat, 8:30 AM - 5:30 PM",
        note: "Supports program requests, volunteer onboarding, and service coordination.",
        image: "/aba_selama.png",
        socials: {
            linkedin: "https://www.linkedin.com/company/fremnatos",
            facebook: "https://www.facebook.com/fremnatos",
            instagram: "https://www.instagram.com/fremnatos",
        },
    },
    {
        name: "Samuel Gebru",
        role: "Programs and Volunteer Coordination Officer",
        phone: "+251 912 654 321",
        email: "samuel@fremnatos.org",
        availability: "Mon - Sat, 8:30 AM - 5:30 PM",
        note: "Supports program requests, volunteer onboarding, and service coordination.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80",
        socials: {
            linkedin: "https://www.linkedin.com/company/fremnatos",
            facebook: "https://www.facebook.com/fremnatos",
            instagram: "https://www.instagram.com/fremnatos",
        },
    },
];

const visitHours = "Mon - Sat, 8:30 AM - 6:00 PM";

const ContactUs = () => {
    const [toast, setToast] = useState(null);

    useEffect(() => {
        if (!toast) {
            return;
        }

        const timer = window.setTimeout(() => {
            setToast(null);
        }, 3800);

        return () => window.clearTimeout(timer);
    }, [toast]);

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        const fullName = String(formData.get("fullName") || "").trim();
        const email = String(formData.get("email") || "").trim();
        const phone = String(formData.get("phone") || "").trim();
        const inquiryType = String(formData.get("inquiryType") || "").trim();
        const message = String(formData.get("message") || "").trim();

        if (!fullName || !email || !phone || !inquiryType || !message) {
            setToast({
                type: "error",
                message:
                    "Please complete all fields before submitting your message.",
            });
            return;
        }

        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
        if (!validEmail) {
            setToast({
                type: "error",
                message: "Please provide a valid email address.",
            });
            return;
        }

        try {
            await new Promise((resolve) => {
                window.setTimeout(resolve, 450);
            });

            event.currentTarget.reset();
            setToast({
                type: "success",
                message:
                    "Message sent successfully. Our team will contact you shortly.",
            });
        } catch {
            setToast({
                type: "error",
                message:
                    "Unable to send your message right now. Please try again.",
            });
        }
    };

    return (
        <>
            <main className="bg-[linear-gradient(180deg,#f5f8fb_0%,#ffffff_36%,#f7f9fb_100%)] text-gray-900">
                {toast ? (
                    <div className="fixed top-18 right-4 z-300 w-[min(92vw,26rem)] md:top-24 md:right-8">
                        <div
                            className={`flex items-start gap-3 border px-4 py-3 shadow-xl backdrop-blur-sm ${
                                toast.type === "success"
                                    ? "border-emerald-300 bg-emerald-50"
                                    : "border-rose-300 bg-rose-50"
                            }`}
                            role="status"
                            aria-live="polite"
                        >
                            <span
                                className={`mt-0.5 inline-flex h-6 w-6 items-center justify-center rounded-full ${
                                    toast.type === "success"
                                        ? "bg-emerald-100 text-emerald-700"
                                        : "bg-rose-100 text-rose-700"
                                }`}
                            >
                                {toast.type === "success" ? (
                                    <CheckCircle2 size={15} />
                                ) : (
                                    <AlertCircle size={15} />
                                )}
                            </span>
                            <p className="flex-1 text-sm font-medium text-gray-800">
                                {toast.message}
                            </p>
                            <button
                                type="button"
                                onClick={() => setToast(null)}
                                className="mt-0.5 text-gray-500 transition-colors hover:text-gray-800"
                                aria-label="Dismiss toast"
                            >
                                <X size={16} />
                            </button>
                        </div>
                    </div>
                ) : null}

                <PageHero
                    label="Contact"
                    title="Contact Us"
                    description="Talk to our team about care programs, branch support, volunteering, partnerships, or urgent service questions."
                    backgroundImage="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=2000&q=80"
                    contentPaddingTop="pt-14 md:pt-10"
                />

                <section className="relative overflow-hidden px-6 py-14 md:px-10 md:py-18">
                    <div className="relative mx-auto max-w-7xl">
                        <div className="max-w-4xl">
                            <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                                Reach Our Team
                            </p>
                            <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
                                One place for service questions, support, and
                                collaboration
                            </h2>
                            <p className="mt-4 max-w-2xl text-base leading-relaxed text-gray-600 md:text-lg">
                                Use the form for general requests and follow-up.
                                For time-sensitive cases, call our office line
                                and we will route your request to the right
                                branch coordinator.
                            </p>

                            <div className="mt-7 grid gap-3 sm:grid-cols-3">
                                {contactChannels.map((channel) => {
                                    const Icon = channel.icon;

                                    return (
                                        <a
                                            key={channel.label}
                                            href={channel.href}
                                            target={
                                                channel.label === "Visit"
                                                    ? "_blank"
                                                    : undefined
                                            }
                                            rel={
                                                channel.label === "Visit"
                                                    ? "noreferrer"
                                                    : undefined
                                            }
                                            className="group border border-gray-200 bg-white p-4 transition-colors hover:border-primary"
                                        >
                                            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-primary">
                                                <Icon size={18} />
                                            </span>
                                            <p className="mt-3 text-xs font-semibold tracking-[0.16em] text-gray-500 uppercase">
                                                {channel.label}
                                            </p>
                                            <p className="mt-1 text-sm font-semibold text-gray-900 transition-colors group-hover:text-primary">
                                                {channel.value}
                                            </p>
                                        </a>
                                    );
                                })}
                            </div>
                        </div>
                        <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                            {contactPeople.map((person) => (
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

                <section className="px-6 pb-14 md:px-10 md:pb-18">
                    <div className="mx-auto grid max-w-7xl gap-0 overflow-hidden border border-gray-200 bg-white lg:grid-cols-12">
                        <div className="order-2 flex flex-col lg:order-1 lg:col-span-7">
                            <div className="border-b border-gray-200 px-6 py-5 md:px-8">
                                <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                                    Our Location
                                </p>
                                <h3 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                                    Main Coordination Office
                                </h3>
                                <p className="mt-2 text-sm text-gray-600 md:text-base">
                                    Mekelle, Tigray, Ethiopia
                                </p>
                                <p className="mt-1 inline-flex items-center gap-2 text-sm font-medium text-gray-700 md:text-base">
                                    <Clock3
                                        size={16}
                                        className="text-primary"
                                    />
                                    Open for visits: {visitHours}
                                </p>
                            </div>

                            <div className="min-h-96 flex-1">
                                <iframe
                                    title="Fremnatos map"
                                    src="https://maps.google.com/maps?q=Mekelle%2C%20Tigray%2C%20Ethiopia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                                    className="h-full min-h-96 w-full"
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                />
                            </div>
                        </div>

                        <div className="order-1 border-b border-gray-200 bg-gray-50 p-6 lg:order-2 lg:col-span-5 lg:border-b-0 lg:border-l lg:border-gray-200 md:p-8">
                            <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                                Send a Message
                            </p>
                            <h3 className="mt-2 text-2xl font-bold text-gray-900 md:text-3xl">
                                Contact Form
                            </h3>
                            <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                Fill in your details and the right team member
                                will get back to you.
                            </p>

                            <form className="mt-6" onSubmit={handleSubmit}>
                                <div className="grid gap-3">
                                    <input
                                        type="text"
                                        name="fullName"
                                        placeholder="Full name"
                                        className="h-11 border border-gray-300 bg-white px-3 text-sm outline-none focus:border-primary"
                                    />
                                    <input
                                        type="email"
                                        name="email"
                                        placeholder="Email address"
                                        className="h-11 border border-gray-300 bg-white px-3 text-sm outline-none focus:border-primary"
                                    />
                                    <input
                                        type="tel"
                                        name="phone"
                                        placeholder="Phone number"
                                        className="h-11 border border-gray-300 bg-white px-3 text-sm outline-none focus:border-primary"
                                    />
                                    <select
                                        name="inquiryType"
                                        defaultValue=""
                                        className="h-11 border border-gray-300 bg-white px-3 text-sm outline-none focus:border-primary"
                                    >
                                        <option value="" disabled>
                                            Inquiry type
                                        </option>
                                        <option>Program Information</option>
                                        <option>Volunteer</option>
                                        <option>Membership</option>
                                        <option>Partnership</option>
                                        <option>Fundraising</option>
                                        <option>Other</option>
                                    </select>
                                </div>

                                <textarea
                                    rows={5}
                                    name="message"
                                    placeholder="Write your message"
                                    className="mt-3 w-full border border-gray-300 bg-white px-3 py-2.5 text-sm outline-none focus:border-primary"
                                />

                                <p className="mt-3 inline-flex items-center gap-2 text-xs text-gray-500">
                                    <Clock3
                                        size={14}
                                        className="text-primary"
                                    />
                                    Typical response time: within 1 business day
                                </p>

                                <button
                                    type="submit"
                                    className="mt-5 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary/90"
                                >
                                    Send Message
                                    <ArrowRight size={16} />
                                </button>
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <MottoCta />
        </>
    );
};

export default ContactUs;
