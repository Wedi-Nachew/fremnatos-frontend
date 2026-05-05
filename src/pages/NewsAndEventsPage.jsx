import {
    ArrowRight,
    CalendarDays,
    Clock3,
    MapPin,
    Megaphone,
    Sparkles,
} from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import PageHero from "../components/PageHero";
import { categories, featuredUpdate, updates } from "../data/newsData";

const upcomingEvents = [
    {
        id: "event-001",
        date: "Apr 06, 2026",
        title: "Community Open Day: New Building Project",
        time: "10:00 AM - 1:00 PM",
        location: "Mekelle Central Branch",
        format: "In Person",
    },
    {
        id: "event-002",
        date: "Apr 18, 2026",
        title: "Recovery Employment Showcase",
        time: "2:00 PM - 4:30 PM",
        location: "Women Recovery Branch",
        format: "In Person",
    },
    {
        id: "event-003",
        date: "Apr 25, 2026",
        title: "Partner Briefing: Capacity and Waitlist Updates",
        time: "11:00 AM - 12:30 PM",
        location: "Virtual Session",
        format: "Online",
    },
];

const NewsAndEventsPage = () => {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredUpdates = useMemo(() => {
        if (activeCategory === "All") {
            return updates;
        }

        return updates.filter((item) => item.category === activeCategory);
    }, [activeCategory]);

    return (
        <main className="bg-white text-gray-900">
            <PageHero
                label="News and Events"
                title="Field Updates, Branch Events, and Real-Time Program Milestones"
                description="Follow what is happening across Fremnatos branches, from emergency response updates to partnership announcements and upcoming community events."
                backgroundImage="/hero-bg-1.jpg"
                sectionClassName="relative isolate flex h-136 items-end overflow-hidden"
                backgroundClassName="h-full w-full bg-cover bg-center grayscale"
                titleClassName="mt-5 max-w-3xl text-4xl font-bold leading-[1.05] text-white md:text-6xl"
            />

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Featured Update
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        This Month's Priority Story
                    </h2>

                    <article className="mt-7 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">
                        <div className="grid lg:grid-cols-[1.04fr_0.96fr]">
                            <figure className="relative h-76 overflow-hidden lg:h-full">
                                <img
                                    src={featuredUpdate.image}
                                    alt={featuredUpdate.title}
                                    className="h-full w-full object-cover"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-black/52 via-black/8 to-transparent" />
                                <p className="absolute left-4 top-4 rounded-full bg-white/92 px-3 py-1 text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                    {featuredUpdate.category}
                                </p>
                            </figure>

                            <div className="p-6 md:p-7">
                                <p className="text-xs font-semibold tracking-[0.14em] text-gray-500 uppercase">
                                    {featuredUpdate.date}
                                </p>
                                <h3 className="mt-2 text-3xl font-bold leading-tight text-gray-900">
                                    {featuredUpdate.title}
                                </h3>
                                <p className="mt-4 text-sm leading-relaxed text-gray-600 md:text-base">
                                    {featuredUpdate.summary}
                                </p>
                                <p className="mt-3 text-sm leading-relaxed text-gray-600 md:text-base">
                                    {featuredUpdate.detail}
                                </p>

                                <Link
                                    to={`/news-and-events/${featuredUpdate.id}`}
                                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-3 font-semibold text-white transition-colors hover:bg-primary/90"
                                >
                                    Read Full Update
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    </article>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                        Latest Stories
                    </p>
                    <h2 className="mt-2 max-w-4xl text-3xl font-bold leading-tight md:text-4xl">
                        Newsroom Feed by Category
                    </h2>

                    <div className="mt-6 flex flex-wrap gap-2">
                        {categories.map((category) => (
                            <button
                                key={category}
                                type="button"
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                                    activeCategory === category
                                        ? "border-primary bg-primary text-white"
                                        : "border-gray-300 bg-white text-gray-700 hover:border-primary hover:text-primary"
                                }`}
                            >
                                {category}
                            </button>
                        ))}
                    </div>

                    <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {filteredUpdates.map((item) => (
                            <article
                                key={item.id}
                                className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                            >
                                <figure className="relative h-54 overflow-hidden">
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className="h-full w-full object-cover"
                                        loading="lazy"
                                    />
                                    <div className="absolute inset-0 bg-linear-to-t from-black/45 via-black/8 to-transparent" />
                                    <p className="absolute left-3 top-3 rounded-full bg-white/92 px-2.5 py-1 text-[11px] font-semibold tracking-[0.14em] text-primary uppercase">
                                        {item.category}
                                    </p>
                                </figure>

                                <div className="p-5">
                                    <p className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.12em] text-gray-500 uppercase">
                                        <CalendarDays size={14} />
                                        {item.date}
                                        <span className="h-1 w-1 rounded-full bg-gray-400" />
                                        <Clock3 size={14} />
                                        {item.readTime}
                                    </p>
                                    <h3 className="mt-3 text-xl font-semibold text-gray-900">
                                        {item.title}
                                    </h3>
                                    <p className="mt-2 text-sm leading-relaxed text-gray-600 md:text-base">
                                        {item.excerpt}
                                    </p>
                                    <Link
                                        to={`/news-and-events/${item.id}`}
                                        className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                                    >
                                        Read story
                                        <ArrowRight size={15} />
                                    </Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-6 py-14 md:px-10 md:py-18">
                <div className="mx-auto max-w-7xl">
                    <div className="mb-7 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                        <div>
                            <p className="text-sm font-semibold tracking-[0.18em] text-primary uppercase">
                                Upcoming Events
                            </p>
                            <h2 className="mt-2 max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                                Join Activities Across Our Branches
                            </h2>
                        </div>
                        <p className="inline-flex items-center gap-2 text-sm text-gray-600">
                            <Megaphone size={15} className="text-primary" />
                            Updated weekly by branch communications teams
                        </p>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {upcomingEvents.map((event) => (
                            <article
                                key={event.id}
                                className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm"
                            >
                                <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                    {event.format}
                                </p>
                                <h3 className="mt-2 text-xl font-semibold text-gray-900">
                                    {event.title}
                                </h3>

                                <div className="mt-4 flex flex-col gap-2 text-sm text-gray-600 md:text-base">
                                    <p className="inline-flex items-center gap-2">
                                        <CalendarDays
                                            size={15}
                                            className="text-primary"
                                        />
                                        {event.date}
                                    </p>
                                    <p className="inline-flex items-center gap-2">
                                        <Clock3
                                            size={15}
                                            className="text-primary"
                                        />
                                        {event.time}
                                    </p>
                                    <p className="inline-flex items-center gap-2">
                                        <MapPin
                                            size={15}
                                            className="text-primary"
                                        />
                                        {event.location}
                                    </p>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="bg-primary px-6 py-14 text-white md:px-10 md:py-18">
                <div className="mx-auto flex max-w-4xl flex-col items-center gap-6 text-center">
                    <div>
                        <p className="text-sm font-semibold tracking-[0.18em] text-white/85 uppercase">
                            Stay Connected
                        </p>
                        <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
                            Follow Updates and Support Urgent Program Needs
                        </h2>
                        <p className="mt-3 text-white/86">
                            News and events are where we share urgency,
                            progress, and concrete ways to take action.
                        </p>
                    </div>

                    <div className="mt-7 flex flex-wrap gap-3">
                        <Link
                            to="/donate"
                            className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary cursor-pointer"
                        >
                            Donate Now
                        </Link>
                        <Link
                            to="/get-involved/membership"
                            className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary cursor-pointer"
                        >
                            Become a Member
                        </Link>
                    </div>
                    <p className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/12 px-3 py-1 text-sm text-white/90">
                        <Sparkles size={14} />
                        Communication updates reflect field and branch reports.
                    </p>
                </div>
            </section>
        </main>
    );
};

export default NewsAndEventsPage;
