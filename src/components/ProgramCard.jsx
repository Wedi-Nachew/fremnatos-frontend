import { ChevronsRight, HandHeart } from "lucide-react";
import { Link } from "react-router-dom";

const ProgramCard = ({ program }) => {
    return (
        <article className="relative flex h-full flex-1 flex-col overflow-hidden bg-black/90 p-4 text-white md:p-6 group">
            <img
                src={program.image}
                alt={program.title}
                className="h-64 w-full object-cover md:h-72 grayscale group-hover:grayscale-0 transition-all duration-300"
            />
            <div className="mt-2 flex flex-1 flex-col gap-4 md:mt-4 md:gap-6">
                <h3 className="text-lg  italic text-secondary md:text-xl">
                    {program.title}
                </h3>
                <p className="text-xl leading-tight font-semibold md:text-xl">
                    {program.description}
                </p>
                <Link
                    to={program.link}
                    className="mt-auto inline-flex w-fit items-center gap-2 rounded-md bg-primary px-4 py-2 transition-colors duration-300 hover:bg-secondary"
                >
                    Read more
                    <ChevronsRight size={12} />
                </Link>
            </div>
            <HandHeart
                size={168}
                className="pointer-events-none absolute -bottom-8 -right-10 text-white/7"
            />
        </article>
    );
};

export default ProgramCard;
