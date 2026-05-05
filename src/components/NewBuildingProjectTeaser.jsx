import { Building2, CheckCircle2, MapPinned } from "lucide-react";

const FUNDRAISING_GOAL = 3_000_000_000;
const STARTING_RAISED = 96_500_000;

const whyNewFacility = [
    "Current facilities are beyond capacity for the growing number of vulnerable people we support.",
    "A dedicated center improves service quality for children, elderly people, and mentally distressed individuals.",
    "The new site enables sustainable expansion with integrated healthcare, shelter, and rehabilitation spaces.",
];

const facilityStats = [
    { label: "Total project land", value: "43,000 sqm" },
    { label: "Planned buildings", value: "8 blocks" },
    { label: "Residential blocks", value: "3 blocks" },
    { label: "Healthcare & rehab", value: "1 center" },
    { label: "Training & admin", value: "2 blocks" },
    { label: "Dining & multipurpose", value: "2 halls" },
    { label: "Dining & multipurpose", value: "2 halls" },
    { label: "Dining & multipurpose", value: "2 halls" },
];

const housingCapacity = [
    { label: "Children expected", value: "300" },
    { label: "Elders expected", value: "180" },
    { label: "Mentally disabled expected", value: "220" },
    { label: "Total residential capacity", value: "700" },
    { label: "Daily outpatient support", value: "1,000+" },
    { label: "Vocational trainees", value: "250" },
    { label: "Vocational trainees", value: "250" },
];

const formatBirr = (amount) => {
    return `ETB ${new Intl.NumberFormat("en-US").format(Math.round(amount))}`;
};

const NewBuildingProjectTeaser = () => {
    const raisedAmount = STARTING_RAISED;

    const progressPercent = Math.min(
        (raisedAmount / FUNDRAISING_GOAL) * 100,
        100,
    );

    return (
        <section className="bg-black/90 px-6 py-12 md:px-10 md:py-16">
            <div className="mx-auto max-w-7xl rounded-2xl border border-white/15 bg-black/25 p-6 text-white md:p-8 lg:p-10">
                <div className="mb-8 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
                    <div className="max-w-4xl">
                        <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-primary">
                            <Building2 size={16} />
                            New Building Project
                        </p>

                        <h2 className="mt-4 text-3xl font-bold leading-tight text-white md:text-4xl max-w-2xl">
                            A Major New Facility for Long-Term Community Impact
                        </h2>

                        <p className="mt-3 text-white/75 md:text-lg md:pr-20">
                            We are launching a strategic development project on
                            43,000 sqm of land granted by Mekelle Municipality
                            to build a modern, purpose-built care campus.
                        </p>
                    </div>
                </div>

                <div className="grid items-start gap-6 lg:grid-cols-12">
                    <div className="lg:col-span-8">
                        <div
                            className="relative overflow-hidden rounded-xl border border-white/15"
                            style={{ aspectRatio: "4 / 3" }}
                        >
                            <video
                                className="h-full w-full object-cover"
                                autoPlay
                                muted
                                loop
                                playsInline
                                controls
                                poster="/hero-bg-2.jpg"
                            >
                                <source
                                    src="/new-building-project.mp4"
                                    type="video/mp4"
                                />
                            </video>

                            <div className="absolute inset-0 bg-black/20" />
                        </div>

                        <div className="mt-5 rounded-xl border border-white/15 bg-white/5 p-5">
                            <h3 className="text-lg font-semibold text-white md:text-xl">
                                Why new facility
                            </h3>

                            <p className="mt-2 text-sm text-white/75 md:text-base">
                                The new facility design unifies shelter,
                                healthcare, and rehabilitation in a scalable
                                campus built for long-term service delivery.
                            </p>

                            <ul className="mt-4 space-y-3">
                                {whyNewFacility.map((reason) => (
                                    <li
                                        key={reason}
                                        className="flex items-start gap-2 text-white/80"
                                    >
                                        <CheckCircle2
                                            size={18}
                                            className="mt-0.5 shrink-0 text-secondary"
                                        />
                                        <span>{reason}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    <aside className="self-start space-y-4 lg:col-span-4">
                        <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                            <h3 className="text-lg font-semibold text-white md:text-xl">
                                New Facility Stats
                            </h3>
                            <div className="mt-4 grid gap-2">
                                {facilityStats.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2"
                                    >
                                        <p className="text-sm text-white/70">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-semibold text-secondary">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="rounded-xl border border-white/15 bg-white/5 p-5">
                            <h3 className="text-lg font-semibold text-white md:text-xl">
                                Expected Housing Capacity
                            </h3>
                            <div className="mt-4 grid gap-2">
                                {housingCapacity.map((item) => (
                                    <div
                                        key={item.label}
                                        className="flex items-center justify-between rounded-lg border border-white/10 bg-black/20 px-3 py-2"
                                    >
                                        <p className="text-sm text-white/70">
                                            {item.label}
                                        </p>
                                        <p className="text-sm font-semibold text-secondary">
                                            {item.value}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </aside>
                </div>

                <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 md:p-5">
                    <div>
                        <div className="flex items-center justify-between gap-4">
                            <p className="text-base font-medium text-white md:text-lg">
                                Fundraising progress
                            </p>
                            <p className="text-base font-semibold text-secondary md:text-lg">
                                {progressPercent.toFixed(1)}%
                            </p>
                        </div>

                        <div className="my-4 h-3 w-full overflow-hidden rounded-full bg-white/20">
                            <div
                                className="h-full rounded-full bg-white transition-all duration-700"
                                style={{ width: `${progressPercent}%` }}
                            />
                        </div>

                        <div className="mt-3 flex items-center justify-between gap-4">
                            <p className="text-base text-white/70 md:text-lg">
                                Raised:
                                <span className="ml-1 font-semibold text-secondary">
                                    {formatBirr(raisedAmount)}
                                </span>
                            </p>
                            <p className="text-base text-white/70 md:text-lg">
                                Goal:
                                <span className="ml-1 font-semibold text-secondary">
                                    {formatBirr(FUNDRAISING_GOAL)}
                                </span>
                            </p>
                        </div>

                        <div className="flex w-full justify-end">
                            <button
                                type="button"
                                className="mt-4 inline-flex w-full items-center justify-center rounded-md bg-white px-6 py-3 font-semibold text-primary transition-colors duration-300 hover:bg-secondary hover:text-white sm:w-auto"
                            >
                                Support This Project
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewBuildingProjectTeaser;
