import { Gift, Goal, HandHeart, Handshake } from "lucide-react";

const WhyDonateToUs = () => {
    const reasons = [
        {
            icon: HandHeart,
            title: "Give Right Place",
            description:
                "Your support reaches people who need urgent care, shelter, and dignity-restoring services.",
        },
        {
            icon: Goal,
            title: "Make Lasting Impact",
            description:
                "Your donation helps us provide long-term support and sustainable solutions for vulnerable individuals.",
        },
        {
            icon: Gift,
            title: "Our Impact",
            description:
                "Since 1990, we have transformed countless lives through our compassionate care and community programs.",
        },
    ];

    return (
        <section className="grid lg:grid-cols-2">
            <div
                className="relative min-h-105 overflow-hidden bg-cover bg-center md:min-h-130"
                style={{ backgroundImage: "url('/hero-bg-1.jpg')" }}
            >
                <div className="absolute inset-0 bg-black/60" />

                <div className="relative z-10 flex h-full items-center justify-end p-4 md:p-6">
                    <div className="relative w-full max-w-105">
                        <img
                            src="/children-care.jpg"
                            alt="Volunteers standing together"
                            className="h-90 w-full object-cover md:h-130"
                        />
                    </div>
                    <div className="absolute bottom-6 left-20 top-6 hidden border border-white/20 bg-black/35 md:flex md:items-center md:px-4">
                        <p
                            className="text-5xl leading-none font-semibold italic text-primary max-h-fit max-w-fit"
                            style={{ writingMode: "vertical-rl" }}
                        >
                            Best charity foundation
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex min-h-105 items-center bg-gray-50 px-6 py-12 md:min-h-130 md:px-10 lg:px-14">
                <div className="mx-auto flex h-full w-full max-w-xl flex-col justify-center">
                    <p className="text-lg text-primary md:text-xl">
                        why donate us
                    </p>

                    <h2 className="mt-5 text-3xl leading-tight font-bold text-black md:text-4xl">
                        We’re So Much Trusted Charity Foundations
                    </h2>

                    <div className="mt-10 space-y-8">
                        {reasons.map((reason) => {
                            const Icon = reason.icon;

                            return (
                                <article
                                    key={reason.title}
                                    className="flex gap-4 items-center"
                                >
                                    <Icon
                                        size={42}
                                        className="shrink-0 text-primary"
                                    />
                                    <div>
                                        <h3 className="text-xl text-black md:text-2xl">
                                            {reason.title}
                                        </h3>
                                        <p className="mt-2 leading-relaxed text-accent md:text-lg">
                                            {reason.description}
                                        </p>
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyDonateToUs;
