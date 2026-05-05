import { ArrowRight, CalendarDays } from "lucide-react";
import { Link } from "react-router-dom";
import { updates } from "../data/newsData";

const newsItems = updates.slice(0, 3);

const NewsAndEvents = () => {
    return (
        <section className="bg-white px-6 py-12 md:px-10 md:py-10">
            <div className="mx-auto max-w-7xl">
                <div className="mb-8 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
                    <div>
                        <p className="text-lg text-primary md:text-xl">
                            News & Events
                        </p>
                        <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                            Stay Updated With Our Latest Stories and Activities
                        </h2>
                    </div>

                    <Link
                        to="/news-and-events"
                        className="inline-flex w-fit items-center gap-2 rounded-md border border-primary bg-transparent px-4 py-2 font-semibold text-primary hover:bg-primary hover:text-white transition-colors duration-300 cursor-pointer"
                    >
                        View all updates
                        <ArrowRight size={16} />
                    </Link>
                </div>

                <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                    {newsItems.map((item) => (
                        <article
                            key={item.id}
                            className="overflow-hidden rounded flex flex-col"
                        >
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-52 w-full object-cover"
                            />
                            <div className="flex-1 flex flex-col gap-3 p-5 bg-black/80 shadow-2xl drop-shadow-2xl">
                                <div className="flex flex-wrap items-center gap-3 text-sm">
                                    <span className="rounded-full bg-primary/75 px-3 py-1 text-white">
                                        {item.category}
                                    </span>
                                    <span className="inline-flex items-center gap-1 text-secondary">
                                        <CalendarDays size={14} />
                                        {item.date}
                                    </span>
                                </div>

                                <h3 className="text-xl font-semibold text-white/90 md:text-2xl">
                                    {item.title}
                                </h3>

                                <p className="text-white/60">{item.excerpt}</p>

                                <Link
                                    to={`/news-and-events/${item.id}`}
                                    className="mt-auto inline-flex items-center gap-2 font-semibold text-primary hover:text-secondary cursor-pointer"
                                >
                                    Read full story
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default NewsAndEvents;
