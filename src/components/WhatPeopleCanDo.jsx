import { ArrowRight, DollarSign, Eye, Gift, HandHeart } from "lucide-react";

const WhatPeopleCanDo = () => {
    const actions = [
        {
            icon: HandHeart,
            title: "Volunteering",
            description:
                "Act of an individual or group freely giving time and labor, often for community service.",
            actionText: "Join Us",
        },
        {
            icon: Eye,
            title: "Visit Us",
            description:
                "Come and see our work in action, meet the people we help, and learn how you can make a difference.",
            actionText: "Read More",
        },
        {
            icon: DollarSign,
            title: "Fundraising",
            description:
                "Organizing events, campaigns, or online initiatives to raise money and awareness for our cause.",
            actionText: "Fundraise",
        },
        {
            icon: Gift,
            title: "Donations",
            description:
                "Including money, alms, services, or goods such as clothing, toys, food, or vehicles.",
            actionText: "Donate",
        },
    ];

    return (
        <section className="bg-primary px-6 py-16 text-white md:px-10 md:py-16">
            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
                {actions.map((action) => {
                    const Icon = action.icon;

                    return (
                        <article
                            key={action.title}
                            className="flex flex-col items-center text-center gap-4"
                        >
                            <Icon
                                strokeWidth={1}
                                className="mx-auto h-22 w-22"
                            />

                            <h3 className="relative z-10 text-xl md:text-2xl font-semibold">
                                {action.title}
                            </h3>

                            <p className="leading-relaxed text-white/90 md:text-lg">
                                {action.description}
                            </p>

                            <button
                                type="button"
                                className="px-6 py-1.5 bg-transparent text-white border border-white font-medium rounded hover:bg-white hover:text-primary transition-colors duration-300 cursor-pointer flex items-center gap-2 mt-3"
                            >
                                {action.actionText}
                                <ArrowRight size={14} strokeWidth={1.5} />
                            </button>
                        </article>
                    );
                })}
            </div>
        </section>
    );
};

export default WhatPeopleCanDo;
