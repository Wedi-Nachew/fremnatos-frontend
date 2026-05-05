import { Link } from "react-router-dom";

const MottoCta = ({ showButtons = true }) => {
    return (
        <section className="overflow-hidden bg-primary px-6 py-10 text-white md:px-12 md:py-14 flex flex-col items-center text-center">
            <p className="text-sm font-semibold uppercase tracking-widest text-white/85">
                Organization Motto
            </p>

            <blockquote className="mt-4 max-w-5xl text-2xl leading-relaxed font-bold md:text-4xl lg:text-5xl">
                “ዝወደቐ ሰብ ምልዓል ናይ ሰናይ ሰብ ሰናይ ድሌት እዩ”
            </blockquote>

            <p className="mt-4 max-w-3xl text-white/90 md:text-lg">
                Lift a fallen person — this is the good will of a good human
                being. Join us to turn this motto into daily impact.
            </p>
            {showButtons && (
                <div className="mt-7 flex flex-wrap gap-3">
                    <Link
                        to="/donate"
                        className="inline-flex items-center justify-center rounded-md bg-secondary px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary"
                    >
                        Donate Now
                    </Link>
                    <button
                        type="button"
                        className="inline-flex items-center justify-center rounded-md bg-black px-6 py-3 font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-primary"
                    >
                        See Our Impact
                    </button>
                </div>
            )}
        </section>
    );
};

export default MottoCta;
