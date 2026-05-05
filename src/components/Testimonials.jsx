import {
    ChevronLeft,
    ChevronRight,
    HeartHandshake,
    MessageCircle,
    Quote,
    Star,
} from "lucide-react";
import { useEffect, useState } from "react";

const testimonials = [
    {
        name: "Gn. Tadesse Werede",
        role: "Tigray Intrim Administration - President",
        location: "Mekelle",
        image: "https://picsum.photos/id/1025/900/1000",
        body: "Supporting Fremnatos has been one of the most fulfilling decisions I’ve made. Knowing that my contributions are directly changing lives gives me a sense of purpose. I trust this organization wholeheartedly and will continue supporting their mission.",
    },
    {
        name: "Meron Tadesse",
        role: "Volunteer",
        location: "Shire",
        image: "https://picsum.photos/id/1011/900/1000",
        body: "Every visit reminds me that dignity can be rebuilt when care is delivered with consistency. The team is organized, compassionate, and deeply present in the community. I have seen children, elders, and mentally distressed people receive support they truly deserve.",
    },
    {
        name: "Samuel Tekle",
        role: "Partner Representative",
        location: "Adigrat",
        image: "https://picsum.photos/id/1005/900/1000",
        body: "Their rehabilitation model is practical, measurable, and designed for sustainable impact. As a partner, we value how transparent and community-centered their operations are. Collaboration has been smooth and the outcomes are visible in people’s daily lives.",
    },
];

const AUTO_SLIDE_MS = 7000;
const TICK_MS = 5000;

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [slideProgress, setSlideProgress] = useState(0);

    useEffect(() => {
        const progressStep = 100 / (AUTO_SLIDE_MS / TICK_MS);

        const timerId = window.setInterval(() => {
            setSlideProgress((previous) => {
                const nextValue = previous + progressStep;

                if (nextValue >= 100) {
                    setActiveIndex(
                        (prevIndex) => (prevIndex + 1) % testimonials.length,
                    );
                    return 0;
                }

                return nextValue;
            });
        }, TICK_MS);

        return () => window.clearInterval(timerId);
    }, []);

    const activeTestimonial = testimonials[activeIndex];
    const readProgressPercent = ((activeIndex + 1) / testimonials.length) * 100;

    const showPrevious = () => {
        setActiveIndex(
            (previousIndex) =>
                (previousIndex - 1 + testimonials.length) % testimonials.length,
        );
        setSlideProgress(0);
    };

    const showNext = () => {
        setActiveIndex(
            (previousIndex) => (previousIndex + 1) % testimonials.length,
        );
        setSlideProgress(0);
    };

    return (
        <section className="px-6 py-6 md:px-10 md:py-10">
            <div className="mx-auto max-w-7xl">
                <div className="max-w-4xl">
                    <p className="text-lg text-primary md:text-xl">
                        Testimonials
                    </p>

                    <h2 className="max-w-3xl text-3xl font-bold leading-tight md:text-4xl">
                        Hear what our partners, volunteers, visitors and
                        supporters say
                    </h2>
                </div>

                <div className="mt-8 flex flex-col items-start gap-6 lg:grid lg:grid-cols-12 lg:items-start">
                    <article className="flex h-full flex-col gap-4 lg:col-span-7">
                        <p className="mt-auto text-center md:text-xl max-w-2xl">
                            {activeTestimonial.body}
                        </p>

                        <div className="relative mx-auto flex w-full max-w-xs items-center justify-center py-2 lg:hidden">
                            <div className="relative h-60 w-54 md:h-96 md:w-80 overflow-hidden rounded-[48%] bg-white">
                                <img
                                    src={activeTestimonial.image}
                                    alt={activeTestimonial.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute left-0 top-14 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                                <Quote size={36} />
                            </div>
                        </div>

                        <div className="mt-auto pt-10">
                            <div className="flex items-center gap-3">
                                <div className="">
                                    <p className="text-xl font-semibold text-black md:text-2xl">
                                        {activeTestimonial.name}
                                    </p>
                                    <p className="text-lg text-primary md:text-xl">
                                        {activeTestimonial.role}
                                    </p>
                                </div>
                            </div>
                            <div className="mt-8">
                                <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-300">
                                    <div
                                        className="h-full rounded-full bg-primary transition-all duration-500"
                                        style={{
                                            width: `${readProgressPercent}%`,
                                        }}
                                    />
                                </div>

                                <div className="mt-5 flex items-center gap-3">
                                    <button
                                        type="button"
                                        onClick={showPrevious}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-accent transition-colors duration-300 hover:border-primary hover:text-primary"
                                        aria-label="Previous testimonial"
                                    >
                                        <ChevronLeft size={20} />
                                    </button>

                                    <button
                                        type="button"
                                        onClick={showNext}
                                        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-gray-300 bg-white text-accent transition-colors duration-300 hover:border-primary hover:text-primary"
                                        aria-label="Next testimonial"
                                    >
                                        <ChevronRight size={20} />
                                    </button>

                                    <div className="ml-auto text-sm text-accent md:text-base">
                                        {activeIndex + 1} /{" "}
                                        {testimonials.length}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </article>

                    <div className="relative hidden lg:col-span-5 lg:block">
                        <div className="pointer-events-none absolute inset-0 m-auto h-114 w-114 rounded-full border border-gray-300" />

                        <div className="relative mx-auto flex h-full max-w-xl items-center justify-center py-2">
                            <div className="relative h-96 w-80 overflow-hidden rounded-[48%] bg-white">
                                <img
                                    src={activeTestimonial.image}
                                    alt={activeTestimonial.name}
                                    className="h-full w-full object-cover"
                                />
                            </div>

                            <div className="absolute left-0 top-14 inline-flex h-20 w-20 items-center justify-center rounded-full bg-primary text-white">
                                <Quote size={36} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
