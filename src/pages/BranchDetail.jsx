import {
    AlertTriangle,
    ArrowLeft,
    BadgeCheck,
    Clock3,
    MapPin,
    Phone,
    Users,
} from "lucide-react";
import { Link, Navigate, useParams } from "react-router-dom";
import TeamContactCard from "../components/TeamContactCard";
import { branches } from "../data/ourStoryData";

const BranchDetail = () => {
    const { branchSlug } = useParams();

    const branch = branches.find((item) => item.slug === branchSlug);

    if (!branch) {
        return <Navigate to="/our-story" replace />;
    }

    const capacityCoverage = Math.round(
        (branch.capacity.current / branch.capacity.demand) * 100,
    );
    const demandGap = branch.capacity.demand - branch.capacity.current;
    const mapEmbedUrl = `https://maps.google.com/maps?q=${encodeURIComponent(branch.address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    const getAvatarImage = (name) => {
        return `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=f72f22&color=ffffff&size=320`;
    };

    const staffCards = branch.staffDirectory.map((staff) => ({
        ...staff,
        image: staff.image ?? getAvatarImage(staff.name),
        socials: staff.socials ?? {
            linkedin: "https://www.linkedin.com/company/fremnatos",
            facebook: "https://www.facebook.com/fremnatos",
            instagram: "https://www.instagram.com/fremnatos",
        },
    }));

    return (
        <main className="bg-white text-gray-900">
            <section
                id="hero-section"
                className="relative flex h-136 items-end overflow-hidden"
            >
                <div
                    className="absolute inset-0 bg-cover bg-center grayscale"
                    style={{
                        backgroundImage: `url('${branch.facilityImages[0]}')`,
                    }}
                />
                <div className="absolute inset-0 bg-black/50" />
                <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-6 pb-12 pt-36 md:px-10 md:pb-16 relative z-20">
                    <Link
                        to="/our-story"
                        className="inline-flex w-fit items-center gap-2 rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm text-white backdrop-blur-sm transition-colors hover:bg-white/20"
                    >
                        <ArrowLeft size={16} />
                        Back to Our Story
                    </Link>

                    <p className="text-sm font-semibold tracking-[0.18em] text-secondary uppercase">
                        Our Branches
                    </p>
                    <h1 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-5xl">
                        {branch.name}
                    </h1>
                    <p className="max-w-2xl text-white/80">
                        Branch-specific care hub serving {branch.region} with
                        integrated child protection, elder support, and
                        rehabilitation services.
                    </p>
                    <p className="text-sm text-white/75">
                        Launched in {branch.launchYear}, reached full carrying
                        capacity in {branch.fullCapacityYear}
                    </p>
                </div>
            </section>

            <section className="px-6 py-12 md:px-10 md:py-16">
                <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-12">
                    <article className="rounded-2xl border border-gray-200 p-5 lg:col-span-6">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Contact & Hours
                        </p>

                        <div className="mt-4 flex flex-col gap-4">
                            <p className="inline-flex items-start gap-2 text-gray-700">
                                <MapPin
                                    size={17}
                                    className="mt-0.5 shrink-0 text-primary"
                                />
                                {branch.address}
                            </p>

                            <a
                                href={`tel:${branch.phone}`}
                                className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors duration-300"
                            >
                                <Phone size={17} className="text-primary" />
                                {branch.phone}
                            </a>

                            <div className="rounded-xl border border-gray-200 bg-gray-50 p-4">
                                <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-gray-700 uppercase">
                                    <Clock3
                                        size={16}
                                        className="text-primary"
                                    />
                                    Opening Hours
                                </p>
                                <div className="mt-3 space-y-2 text-sm text-gray-700">
                                    {branch.hours.map((slot) => (
                                        <p
                                            key={slot.day}
                                            className="flex items-center justify-between gap-4 rounded-md border border-gray-200 bg-white px-3 py-2"
                                        >
                                            <span>{slot.day}</span>
                                            <span className="font-medium">
                                                {slot.time}
                                            </span>
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>

                    <article className="rounded-2xl border border-gray-200 bg-primary p-5 text-black lg:col-span-6">
                        <p className="text-sm font-semibold tracking-[0.16em] text-white uppercase">
                            Capacity vs Demand
                        </p>

                        <div className="mt-4 grid gap-4 sm:grid-cols-3">
                            <div className="rounded-xl border border-white/15 bg-white/15 p-4">
                                <p className="text-xs text-white/90 uppercase">
                                    Current Capacity
                                </p>
                                <p className="mt-2 text-3xl font-semibold text-white">
                                    {branch.capacity.current}
                                </p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/15 p-4">
                                <p className="text-xs text-white/90 uppercase">
                                    Current Demand
                                </p>
                                <p className="mt-2 text-3xl font-semibold text-white">
                                    {branch.capacity.demand}
                                </p>
                            </div>
                            <div className="rounded-xl border border-white/15 bg-white/15 p-4">
                                <p className="text-xs text-white/90 uppercase">
                                    Waitlist
                                </p>
                                <p className="mt-2 text-3xl font-semibold text-white">
                                    {branch.capacity.waitlist}
                                </p>
                            </div>
                        </div>

                        <div className="mt-5 h-3 w-full overflow-hidden rounded-full bg-white/25">
                            <div
                                className="h-full rounded-full bg-white"
                                style={{ width: `${capacityCoverage}%` }}
                            />
                        </div>

                        <div className="mt-3 flex flex-wrap items-center justify-between gap-3 text-sm text-white/85">
                            <span>Coverage rate: {capacityCoverage}%</span>
                            <span>Demand gap: {demandGap}</span>
                        </div>

                        <div className="mt-4 rounded-xl border border-primary/40 bg-primary/10 p-4 text-sm text-white/90">
                            <p className="inline-flex items-center gap-2 font-semibold text-white">
                                <AlertTriangle size={16} />
                                Why urgency matters
                            </p>
                            <p className="mt-2 text-white/80">
                                This branch currently needs support to close the
                                service gap for {demandGap} additional people.
                            </p>
                        </div>
                    </article>
                </div>
            </section>

            <section className="bg-gray-50 px-6 py-12 md:px-10 md:py-16">
                <div className="mx-auto max-w-7xl">
                    <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                        Facility Photos
                    </p>
                    <h2 className="mt-2 text-3xl font-bold leading-tight md:text-4xl">
                        Inside {branch.shortName}
                    </h2>

                    <div className="mt-6 grid gap-4 md:grid-cols-3">
                        {branch.facilityImages.map((image, index) => (
                            <article
                                key={`${branch.slug}-${index}`}
                                className="overflow-hidden rounded-2xl border border-gray-200"
                            >
                                <img
                                    src={image}
                                    alt={`${branch.shortName} facility ${index + 1}`}
                                    className="h-64 w-full object-cover"
                                />
                            </article>
                        ))}
                    </div>
                </div>
            </section>

            <section className="px-0 py-12 md:py-16">
                <div className="mx-auto max-w-7xl px-6 md:px-10">
                    <div className="flex flex-col gap-3">
                        <p className="text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                            Branch Location
                        </p>
                        <h2 className="text-3xl font-bold leading-tight text-gray-900 md:text-4xl">
                            Find {branch.shortName} on the Map
                        </h2>
                        <p className="max-w-3xl text-gray-600">
                            This embedded map centers on the branch address so
                            visitors can quickly locate the facility.
                        </p>
                    </div>
                </div>

                <div className="relative mt-8">
                    <div className="w-full overflow-hidden border-y border-gray-200">
                        <iframe
                            src={mapEmbedUrl}
                            title={`${branch.name} location map`}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="h-110 w-full object-cover md:h-120"
                        ></iframe>
                    </div>

                    <div className="relative z-10 mx-auto -mt-12 w-full max-w-7xl px-6 md:-mt-16 md:px-10">
                        <article className="rounded-2xl border border-gray-200 bg-white p-4 shadow-lg md:p-5">
                            <div className="grid gap-3 md:grid-cols-3">
                                <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                        Address
                                    </p>
                                    <p className="mt-2 text-sm text-gray-700">
                                        {branch.address}
                                    </p>
                                </div>
                                <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                        Branch
                                    </p>
                                    <p className="mt-2 text-sm text-gray-700">
                                        {branch.name}
                                    </p>
                                </div>
                                <div className="rounded-xl border border-gray-200 bg-gray-50 px-4 py-3">
                                    <p className="text-xs font-semibold tracking-[0.14em] text-primary uppercase">
                                        Phone
                                    </p>
                                    <p className="mt-2 text-sm text-gray-700">
                                        {branch.phone}
                                    </p>
                                </div>
                            </div>
                        </article>
                    </div>
                </div>
            </section>

            <section className="px-6 py-12 md:px-10 md:py-16">
                <div className="mx-auto max-w-7xl space-y-6">
                    <article className="overflow-hidden rounded-3xl border border-gray-200 bg-primary p-6 text-white md:p-8">
                        <div className="flex flex-wrap items-center justify-between gap-3">
                            <div>
                                <p className="text-sm font-semibold tracking-[0.16em] text-white/80 uppercase">
                                    Programs Offered
                                </p>
                                <h2 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
                                    Services Available at {branch.shortName}
                                </h2>
                            </div>
                            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-3 py-1 text-sm text-white/85">
                                {branch.programs.length} active programs
                            </span>
                        </div>

                        <div className="mt-6 grid gap-3 md:grid-cols-2 xl:grid-cols-4">
                            {branch.programs.map((program, index) => (
                                <article
                                    key={program}
                                    className="relative rounded-xl border border-white/20 bg-white/5 p-4"
                                >
                                    <p className="text-xs font-semibold tracking-[0.16em] text-white/80 uppercase">
                                        Program{" "}
                                        {String(index + 1).padStart(2, "0")}
                                    </p>
                                    <p className="mt-2 text-sm leading-relaxed text-white/88">
                                        {program}
                                    </p>
                                </article>
                            ))}
                        </div>
                    </article>

                    <article className=" p-6 md:p-8">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                            <div>
                                <p className="inline-flex items-center gap-2 text-sm font-semibold tracking-[0.16em] text-primary uppercase">
                                    <Users size={16} />
                                    Staff Directory
                                </p>
                                <h3 className="mt-2 text-2xl font-semibold text-gray-900 md:text-3xl">
                                    Meet the Branch Team
                                </h3>
                                <p className="mt-2 max-w-3xl text-gray-600">
                                    Direct contacts for professionals managing
                                    care delivery in this branch.
                                </p>
                            </div>
                        </div>

                        <div className="mt-6 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                            {staffCards.map((staff) => (
                                <div
                                    key={staff.name}
                                    className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm"
                                >
                                    <TeamContactCard person={staff} />
                                </div>
                            ))}
                        </div>
                    </article>
                </div>
            </section>

            <section className="bg-primary px-6 py-10 md:px-10 md:py-12">
                <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4">
                    <div>
                        <p className="text-sm tracking-[0.16em] text-white/85 uppercase">
                            Explore Other Branches
                        </p>
                        <p className="mt-1 text-white/80">
                            Navigate to another location in the Fremnatos
                            network.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                        {branches
                            .filter((item) => item.slug !== branch.slug)
                            .map((item) => (
                                <Link
                                    key={item.slug}
                                    to={`/our-branches/${item.slug}`}
                                    className="rounded-lg  px-4 py-2 text-sm font-semibold text-white bg-secondary transition-colors hover:bg-white hover:text-primary"
                                >
                                    {item.shortName}
                                </Link>
                            ))}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default BranchDetail;
