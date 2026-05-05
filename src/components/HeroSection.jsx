import { useEffect, useState } from "react";
const slides = ["/hero-bg-1.jpg", "/hero-bg-2.jpg", "/hero-bg-3.jpg"];
const SLIDER_INTERVAL = 5000;

const HeroSection = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, SLIDER_INTERVAL);

        return () => clearTimeout(timer);
    }, [currentSlide]);

    return (
        <section
            className="relative h-screen w-full overflow-hidden"
            id="hero-section"
        >
            <div className="absolute inset-0">
                <div
                    className={`flex h-full w-full transition-transform duration-700 ease-in-out`}
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <div
                            key={index}
                            className="h-full w-full shrink-0 bg-cover bg-center"
                            style={{ backgroundImage: `url('${slide}')` }}
                        ></div>
                    ))}
                </div>
            </div>
            <div className="relative z-10 h-full w-full flex flex-col justify-center items-center gap-4 md:gap-6 text-white backdrop-grayscale">
                <h1 className="text-3xl md:text-4xl lg:text-6xl max-w-xl font-bold text-center">
                    {/* Lifting up a fallen person is the good will of a good
                    person. */}
                    ዝወደቐ ሰብ ምልዓል ናይ ሰናይ ሰብ ሰናይ ድሌት እዩ
                </h1>
                <p className="text-xl">
                    Restoring Dignity and Hope in Tigray - One Life at a time
                </p>
                <div className="flex flex-col md:flex-row gap-6">
                    <button className="px-6 py-2 bg-primary shadow-xl font-semibold rounded hover:bg-secondary transition-colors duration-300 cursor-pointer">
                        Donate Now
                    </button>
                    <button className="px-6 py-2 bg-transparent text-secondary border border-secondary shadow-xl font-semibold rounded hover:bg-secondary hover:text-white transition-colors duration-300 cursor-pointer">
                        See Our Impact
                    </button>
                </div>
            </div>
            <div className="absolute z-20 flex gap-5 bottom-8 left-1/2 -translate-x-1/2">
                {slides.map((_, index) => (
                    <button
                        key={index}
                        type="button"
                        aria-label={`Go to slide ${index + 1}`}
                        className={`w-2 h-2 rounded-full relative cursor-pointer transition-colors duration-300 after:content-[''] after:absolute after:left-1/2 after:top-1/2 after:-translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:rounded-full after:border after:pointer-events-none hover:bg-secondary ${currentSlide === index ? "bg-primary after:border-primary" : "bg-white/50 after:border-white/50"}`}
                        onClick={() => setCurrentSlide(index)}
                    ></button>
                ))}
            </div>
        </section>
    );
};

export default HeroSection;
