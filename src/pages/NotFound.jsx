import { Link } from "react-router-dom";
import MottoCta from "../components/MottoCta";
import { ChevronLeft } from "lucide-react";

const NotFound = () => {
    return (
        <>
            <main className="bg-[#efefef] px-6 pt-28 pb-20 md:px-10 md:pt-32 md:pb-28">
                <section className=" flex  flex-col items-center text-center">
                    <h1 className="text-5xl leading-[0.9] tracking-tight text-primary sm:text-6xl md:text-7xl lg:text-8xl">
                        PAGE NOT FOUND!
                    </h1>

                    <Link
                        to="/"
                        className="mt-8 inline-flex items-center gap-2 text-xs font-medium tracking-[0.12em] text-primary underline uppercase transition-opacity duration-300 hover:text-secondary"
                    >
                        <span>
                            <ChevronLeft />
                        </span>
                        <span>Back to homepage</span>
                    </Link>
                </section>
            </main>

            <MottoCta />
        </>
    );
};

export default NotFound;
