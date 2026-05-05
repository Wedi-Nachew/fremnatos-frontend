const PageHero = ({
    label,
    title,
    description,
    backgroundImage,
    contentPaddingTop = "pt-14 md:pt-28",
    applyGrayScale = true,
    id = "hero-section",
    sectionClassName = "relative flex h-136 w-full overflow-hidden",
    overlayClassName = "bg-black/30",
    backgroundClassName = "h-full w-full bg-cover bg-center",
    contentClassName = "relative z-20 flex h-full w-full flex-col justify-center px-6 md:px-10",
    containerClassName = "mx-auto w-full max-w-7xl",
    labelClassName = "inline-flex rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold tracking-[0.2em] text-white uppercase backdrop-blur-sm",
    titleClassName = "mt-5 max-w-3xl text-3xl font-bold leading-[1.05] text-white md:text-5xl",
    descriptionClassName = "mt-4 max-w-2xl text-base leading-relaxed text-white/85 md:text-lg",
    children,
}) => {
    return (
        <section id={id} className={sectionClassName}>
            <div className="absolute inset-0">
                <div
                    className={backgroundClassName}
                    style={{ backgroundImage: `url('${backgroundImage}')` }}
                />
            </div>

            <div className={`absolute inset-0 z-10 ${overlayClassName}`}></div>

            <div
                className={`${contentClassName} ${applyGrayScale ? "backdrop-grayscale" : ""} ${contentPaddingTop}`}
            >
                <div className={containerClassName}>
                    {label ? (
                        <span className={labelClassName}>{label}</span>
                    ) : null}
                    {title ? <h1 className={titleClassName}>{title}</h1> : null}
                    {description ? (
                        <p className={descriptionClassName}>{description}</p>
                    ) : null}
                    {children}
                </div>
            </div>
        </section>
    );
};

export default PageHero;
