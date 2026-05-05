import { ArrowRight, Award, Flag, Users } from "lucide-react";
import { Link } from "react-router-dom";

const GreatRunHighlight = () => {
    return (
        <section className="bg-white px-6 py-12 text-black md:px-10 md:py-16">
            <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-12 lg:gap-12">
                <div className="relative lg:col-span-7">
                    <img
                        src="https://picsum.photos/600/400"
                        alt="Placeholder for Fremnatos Great Run event photo"
                        className="h-full min-h-120 w-full object-cover"
                    />
                </div>

                <div className="flex flex-col gap-3 lg:col-span-5 lg:gap-4">
                    <p className="text-lg text-primary md:text-xl">
                        Community Sports Impact
                    </p>

                    <h2 className="max-w-3xl text-2xl font-bold leading-tight md:text-3xl">
                        Fremnatos Great Run Is Ethiopia&apos;s Second Largest
                        Annual Running Event
                    </h2>

                    <p className="max-w-2xl text-gray-600 md:text-lg">
                        With a large participant turnout every year, the
                        Fremnatos Great Run now stands next to the Great
                        Ethiopian Run as one of the country&apos;s defining
                        public running events.
                    </p>

                    <div className="mt-3 grid gap-4 border-y border-gray-200 py-5 sm:grid-cols-2">
                        <div className="flex items-start gap-3">
                            <Users size={20} className="mt-0.5 text-primary" />
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    Large annual participation
                                </p>
                                <p className="text-sm text-gray-600">
                                    Thousands gather to run for dignity and
                                    impact.
                                </p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <Award size={20} className="mt-0.5 text-primary" />
                            <div>
                                <p className="text-sm font-semibold text-gray-900">
                                    National ranking
                                </p>
                                <p className="text-sm text-gray-600">
                                    Ranked second largest in Ethiopia.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GreatRunHighlight;
