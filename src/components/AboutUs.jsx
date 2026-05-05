import { BadgeCheck, ChevronsRight } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    const highlights = [
        "We provide basic services like food, shelter, and medical care.",
        "We provide educational opportunities and learning resources.",
        "We provide psychological support and counseling services.",
        "We are committed to long-term self-sufficiency.",
    ];

    return (
        <section className="bg-white px-6 py-12 md:py-16 text-black grid gap-8 p-6 md:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14 items-center">
            <div className="lg:col-span-5">
                <div className="relative h-full min-h-105">
                    <img
                        src="https://picsum.photos/600/720"
                        alt="Volunteers supporting vulnerable people"
                        className="h-full w-full rounded object-cover grayscale hover:grayscale-0 transition-all duration-300"
                    />

                    <div className="absolute right-0 bottom-0 md:-bottom-6 md:-right-6 h-30 w-30 md:h-34 md:w-34 rounded-full border border-primary bg-primary">
                        <svg
                            viewBox="0 0 120 120"
                            className="absolute inset-0 h-full w-full animate-spin text-white"
                            style={{ animationDuration: "14s" }}
                        >
                            <defs>
                                <path
                                    id="since-1990-circle"
                                    d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
                                />
                            </defs>
                            <text className="fill-current text-[11px] font-semibold uppercase tracking-[1.1px]">
                                <textPath href="#since-1990-circle">
                                    • Children • Elderly • Mentally Disabled •
                                    Children • Elderly •
                                </textPath>
                            </text>
                        </svg>

                        <div className="absolute inset-5.5 flex items-center justify-center rounded-full border border-white/60 bg-white text-center text-lg leading-tight font-bold text-primary">
                            Since
                            <br />
                            1990
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-3 lg:col-span-7 lg:gap-5">
                <p className="text-lg text-primary md:text-xl">About Us</p>

                <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                    We restore dignity, hope, and opportunity for people who
                    need it most.
                </h2>

                <p className="max-w-2xl text-gray-600 md:text-lg">
                    We are a non-profit organization committed to saving lives
                    and rebuilding communities through compassion, dedication,
                    and practical action.
                </p>

                <ul className="grid gap-3 md:grid-cols-2">
                    {highlights.map((item) => (
                        <li
                            key={item}
                            className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-3"
                        >
                            <BadgeCheck
                                size={18}
                                className="mt-0.5 shrink-0 text-primary"
                            />
                            <span className="text-sm text-gray-700">
                                {item}
                            </span>
                        </li>
                    ))}
                </ul>

                <div className="flex flex-wrap items-center gap-3 pt-2">
                    <Link
                        to="/about"
                        className="inline-flex items-center gap-2 rounded-md bg-primary text-white px-6 py-3 font-semibold transition-colors duration-300 hover:bg-secondary"
                    >
                        Learn More
                        <ChevronsRight size={16} />
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
