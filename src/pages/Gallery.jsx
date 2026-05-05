import { useMemo, useState } from "react";

const filterOptions = [
    { key: "all", label: "ALL" },
    { key: "children", label: "CHILDREN" },
    { key: "elders", label: "ELDERS" },
    { key: "mentally-disabled", label: "MENTALLY DISABLED" },
    { key: "new-building", label: "THE NEW BUILDING" },
    { key: "residences", label: "EVENTS" },
    { key: "workshops", label: "WORKSHOPS" },
    { key: "sports", label: "SPORTS" },
];

const galleryItems = [
    {
        id: "art-1",
        category: "sports",
        year: 2026,
        image: "https://picsum.photos/seed/fremnatos-art-1/1200/1000",
        alt: "Art room activity 1",
        layout: "lg:col-span-1 lg:row-span-1",
    },
    {
        id: "art-2",
        category: "sports",
        year: 2025,
        image: "https://picsum.photos/seed/fremnatos-art-2/1200/1000",
        alt: "Art room activity 2",
        layout: "lg:col-span-1 lg:row-span-1",
    },
    {
        id: "art-3",
        category: "sports",
        year: 2024,
        image: "https://picsum.photos/seed/fremnatos-art-3/1200/1000",
        alt: "Art room activity 3",
        layout: "lg:col-span-1 lg:row-span-1",
    },
    {
        id: "art-4",
        category: "sports",
        year: 2026,
        image: "https://picsum.photos/seed/fremnatos-art-4/1400/900",
        alt: "Art room activity 4",
        layout: "lg:col-span-1 lg:row-span-1",
    },
    {
        id: "art-5",
        category: "sports",
        year: 2025,
        image: "https://picsum.photos/seed/fremnatos-art-5/1600/900",
        alt: "Art room activity 5",
        layout: "lg:col-span-2 lg:row-span-1",
    },
    {
        id: "children-1",
        category: "children",
        year: 2026,
        image: "https://picsum.photos/seed/fremnatos-children-a/1200/1000",
        alt: "Children care moment 1",
        layout: "lg:col-span-1",
    },
    {
        id: "children-2",
        category: "children",
        year: 2025,
        image: "https://picsum.photos/seed/fremnatos-children-b/1200/1000",
        alt: "Children care moment 2",
        layout: "lg:col-span-1",
    },
    {
        id: "children-3",
        category: "children",
        year: 2024,
        image: "https://picsum.photos/seed/fremnatos-children-c/1600/900",
        alt: "Children care moment 3",
        layout: "lg:col-span-2",
    },
    {
        id: "elders-1",
        category: "elders",
        year: 2026,
        image: "https://picsum.photos/seed/fremnatos-elders-a/1200/1000",
        alt: "Elder care moment 1",
        layout: "lg:col-span-1",
    },
    {
        id: "elders-2",
        category: "elders",
        year: 2025,
        image: "https://picsum.photos/seed/fremnatos-elders-b/1200/1000",
        alt: "Elder care moment 2",
        layout: "lg:col-span-1",
    },
    {
        id: "elders-3",
        category: "elders",
        year: 2024,
        image: "https://picsum.photos/seed/fremnatos-elders-c/1600/900",
        alt: "Elder care moment 3",
        layout: "lg:col-span-2",
    },
    {
        id: "mental-1",
        category: "mentally-disabled",
        year: 2026,
        image: "https://picsum.photos/seed/fremnatos-mental-a/1200/1000",
        alt: "Mental health recovery moment 1",
        layout: "lg:col-span-1",
    },
    {
        id: "mental-2",
        category: "mentally-disabled",
        year: 2025,
        image: "https://picsum.photos/seed/fremnatos-mental-b/1200/1000",
        alt: "Mental health recovery moment 2",
        layout: "lg:col-span-1",
    },
    {
        id: "mental-3",
        category: "mentally-disabled",
        year: 2024,
        image: "https://picsum.photos/seed/fremnatos-mental-c/1600/900",
        alt: "Mental health recovery moment 3",
        layout: "lg:col-span-2",
    },
    {
        id: "workshop-1",
        category: "workshops",
        year: 2026,
        image: "https://picsum.photos/seed/fremnatos-workshop-a/1200/1000",
        alt: "Workshop moment 1",
        layout: "lg:col-span-1",
    },
    {
        id: "workshop-2",
        category: "workshops",
        year: 2025,
        image: "https://picsum.photos/seed/fremnatos-workshop-b/1200/1000",
        alt: "Workshop moment 2",
        layout: "lg:col-span-1",
    },
    {
        id: "workshop-3",
        category: "workshops",
        year: 2024,
        image: "https://picsum.photos/seed/fremnatos-workshop-c/1600/900",
        alt: "Workshop moment 3",
        layout: "lg:col-span-2",
    },
    {
        id: "residence-1",
        category: "residences",
        year: 2026,
        image: "https://picsum.photos/seed/fremnatos-residence-a/1200/1000",
        alt: "Residence moment 1",
        layout: "lg:col-span-1",
    },
    {
        id: "residence-2",
        category: "residences",
        year: 2025,
        image: "https://picsum.photos/seed/fremnatos-residence-b/1200/1000",
        alt: "Residence moment 2",
        layout: "lg:col-span-1",
    },
    {
        id: "residence-3",
        category: "residences",
        year: 2024,
        image: "https://picsum.photos/seed/fremnatos-residence-c/1600/900",
        alt: "Residence moment 3",
        layout: "lg:col-span-2",
    },
    {
        id: "building-1",
        category: "new-building",
        year: 2026,
        image: "https://picsum.photos/seed/fremnatos-building-a/1200/1000",
        alt: "New building moment 1",
        layout: "lg:col-span-1",
    },
    {
        id: "building-2",
        category: "new-building",
        year: 2025,
        image: "https://picsum.photos/seed/fremnatos-building-b/1200/1000",
        alt: "New building moment 2",
        layout: "lg:col-span-1",
    },
    {
        id: "building-3",
        category: "new-building",
        year: 2024,
        image: "https://picsum.photos/seed/fremnatos-building-c/1600/900",
        alt: "New building moment 3",
        layout: "lg:col-span-2",
    },
];

const Gallery = () => {
    const [activeFilter, setActiveFilter] = useState("all");

    const filteredItems = useMemo(() => {
        if (activeFilter === "all") {
            return galleryItems;
        }

        return galleryItems.filter((item) => item.category === activeFilter);
    }, [activeFilter]);

    const itemsByYear = useMemo(() => {
        return filteredItems.reduce((acc, item) => {
            if (!acc[item.year]) {
                acc[item.year] = [];
            }

            acc[item.year].push(item);
            return acc;
        }, {});
    }, [filteredItems]);

    const orderedYears = useMemo(() => {
        return Object.keys(itemsByYear)
            .map(Number)
            .sort((a, b) => b - a);
    }, [itemsByYear]);

    return (
        <main className="bg-white pt-26 pb-16 text-gray-900 md:pt-34 md:pb-20">
            <section className="px-6 md:px-10">
                <div className="mx-auto max-w-7xl">
                    <h1 className="text-center text-4xl font-bold tracking-tight text-primary md:text-6xl">
                        Our Gallery
                    </h1>

                    <div className="mt-10 flex flex-wrap justify-center gap-3 md:gap-4">
                        {filterOptions.map((filter) => {
                            const active = activeFilter === filter.key;

                            return (
                                <button
                                    key={filter.key}
                                    type="button"
                                    onClick={() => setActiveFilter(filter.key)}
                                    className={`border px-5 py-4 text-sm  uppercase tracking-[0.04em] transition-colors duration-300 ${
                                        active
                                            ? "border-primary bg-primary text-white"
                                            : "border-gray-300 bg-white text-gray-500 hover:border-primary hover:text-primary"
                                    }`}
                                >
                                    {filter.label}
                                </button>
                            );
                        })}
                    </div>

                    <div className="mt-10 space-y-8">
                        {orderedYears.map((year) => {
                            const yearItems = itemsByYear[year];

                            return (
                                <section
                                    key={year}
                                    aria-label={`Gallery year ${year}`}
                                >
                                    <div className="mb-4 flex items-center gap-4">
                                        <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
                                            {year}
                                        </h2>
                                        <span className="h-px flex-1 bg-gray-300" />
                                    </div>

                                    <div className="columns-1 gap-1.5 sm:columns-2 lg:columns-3 xl:columns-4">
                                        {yearItems.map((item) => (
                                            <article
                                                key={item.id}
                                                className="mb-1.5 overflow-hidden break-inside-avoid"
                                            >
                                                <img
                                                    src={item.image}
                                                    alt={item.alt}
                                                    loading="lazy"
                                                    className="h-auto w-full object-cover"
                                                />
                                            </article>
                                        ))}
                                    </div>
                                </section>
                            );
                        })}
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Gallery;
