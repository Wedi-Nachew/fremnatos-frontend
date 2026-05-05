import {
    ChevronDown,
    Clock3,
    Facebook,
    Instagram,
    Menu,
    MapPin,
    Phone,
    Twitter,
    X,
    LineChart,
    Mail,
    Youtube,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import fremnatosLogo from "../assets/fremnatos-primary.svg";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import usFlag from "../assets/us-flag.svg";
import etFlag from "../assets/ethiopia-flag.svg";
import tiFlag from "../assets/tigray-flag.svg";

const languages = [
    { code: "en", short: "EN", label: "English", flag: usFlag, alt: "US" },
    { code: "am", short: "አማ", label: "አማርኛ", flag: etFlag, alt: "ET" },
    { code: "ti", short: "ትግ", label: "ትግርኛ", flag: tiFlag, alt: "TI" },
];

const LanguageSelector = ({ light = false }) => {
    const { i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const currentLangCode = (i18n.resolvedLanguage || i18n.language || "en")
        .split("-")[0]
        .toLowerCase();
    const selected =
        languages.find((lang) => lang.code === currentLangCode) ?? languages[0];

    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const choose = (lang) => {
        i18n.changeLanguage(lang.code);
        setOpen(false);
    };

    const textClass = light
        ? "text-white hover:text-secondary"
        : "text-gray-800 hover:text-primary";

    const dropdownBg = "bg-white shadow-xl border border-gray-100";

    return (
        <div ref={ref} className="relative select-none">
            <button
                type="button"
                onClick={() => setOpen((p) => !p)}
                className={`inline-flex items-center gap-1.5 text-sm tracking-tight font-medium cursor-pointer transition-colors duration-300 ${textClass}`}
            >
                <img
                    src={selected.flag}
                    alt={selected.alt}
                    className="w-4 h-4"
                />
                <span>{selected.short}</span>
                <ChevronDown
                    size={13}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {open && (
                <div
                    className={`absolute right-0 top-full mt-2 w-36 rounded-xl ${dropdownBg} py-1 z-[200]`}
                >
                    {languages.map((lang) => (
                        <button
                            key={lang.code}
                            type="button"
                            onClick={() => choose(lang)}
                            className={`w-full font-medium tracking-tight cursor-pointer flex items-center gap-2.5 px-4 py-2 text-sm text-gray-700 transition-colors duration-300 hover:bg-primary/12 hover:text-primary ${
                                selected.code === lang.code
                                    ? "bg-primary/12 text-primary"
                                    : "bg-white"
                            }`}
                        >
                            <img
                                src={lang.flag}
                                alt={lang.alt}
                                className="w-4 h-4"
                            />
                            <span>{lang.label}</span>
                            {selected.code === lang.code && (
                                <span className="ml-auto text-primary">✓</span>
                            )}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

// About Us Dropdown
const aboutUs = [
    { label: "Our Story", to: "/our-story" },
    { label: "Our Impact", to: "/our-impact" },
    { label: "Gallery", to: "/gallery" },
    // { label: "Legal", to: "/our-story#transparency" },
];

// Our Programs Dropdown
const ourPrograms = [
    { label: "Children's Care", to: "/our-programs/children-care" },
    { label: "Elderly Care", to: "/our-programs/elderly-care" },
    {
        label: "Mental Health & Recovery",
        to: "/our-programs/mental-health-recovery",
    },
    // {
    //     label: "Skills Training & Employment",
    //     to: "/our-programs/skills-training-employment",
    // },
];

// Get involved
const getInvolved = [
    { label: "Volunteer", to: "/get-involved/volunteer" },
    { label: "Membership", to: "/get-involved/membership" },
    { label: "Partnerships", to: "/get-involved/partnerships" },
    { label: "Fundraising", to: "/get-involved/fundraising" },
];

const CustomDropDown = ({
    label,
    nav,
    linkClass,
    light = false,
    onNavigate,
}) => {
    const [open, setOpen] = useState(false);
    const ref = useRef(null);
    const hoverTimeout = useRef(null);

    // close on outside click (for mobile tap)
    useEffect(() => {
        const handler = (e) => {
            if (ref.current && !ref.current.contains(e.target)) setOpen(false);
        };
        document.addEventListener("mousedown", handler);
        return () => document.removeEventListener("mousedown", handler);
    }, []);

    const openMenu = () => {
        clearTimeout(hoverTimeout.current);
        setOpen(true);
    };
    const closeMenu = () => {
        hoverTimeout.current = setTimeout(() => setOpen(false), 120);
    };

    const labelClass = linkClass
        ? linkClass
        : `text-sm tracking-tight ${light ? "text-white" : "text-gray-800"}`;

    return (
        <div
            ref={ref}
            className="relative"
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
        >
            {/* Trigger */}
            <button
                type="button"
                onClick={() => setOpen((p) => !p)}
                className={`inline-flex items-center gap-1 text-sm tracking-tight cursor-pointer ${labelClass} after:hidden`}
            >
                {label}
                <ChevronDown
                    size={14}
                    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                />
            </button>

            {/* Dropdown panel */}
            {open && (
                <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-56 rounded-2xl bg-white shadow-xl border border-gray-100 py-2 z-200">
                    {/* Arrow */}
                    <span className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 rotate-45 bg-white border-l border-t border-gray-100 rounded-sm" />
                    {nav.map((item) => {
                        const itemLabel =
                            typeof item === "string" ? item : item.label;
                        const itemTo =
                            typeof item === "string"
                                ? `/${item.toLowerCase().replace(/\s+/g, "-")}`
                                : item.to;

                        return (
                            <Link
                                key={itemTo}
                                to={itemTo}
                                onClick={() => {
                                    setOpen(false);
                                    onNavigate?.();
                                }}
                                className="flex items-center gap-1.5 px-5 py-2.5 text-sm tracking-tight text-gray-700 hover:bg-primary/12 hover:text-primary transition-colors duration-300"
                            >
                                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                                {itemLabel}
                            </Link>
                        );
                    })}
                </div>
            )}
        </div>
    );
};

// Main Header
const Header = ({ showStickyHeader = false }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
        return () => {
            document.body.style.overflow = "";
        };
    }, [isMobileMenuOpen]);

    const isActive = (nav) => {
        const currentPath = window.location.pathname;
        return currentPath === nav.toLowerCase().replace(/\s+/g, "-");
    };

    const linkClass = (path, base = "text-gray-800") =>
        `relative text-sm tracking-tight ${base} after:absolute after:left-0 after:-bottom-0.5 after:w-0 after:h-0.5 after:bg-primary after:transition-all after:duration-300 hover:after:w-full ${isActive(path) ? "after:w-full" : "after:w-0"}`;

    const navLinks = [
        { to: "/news-and-events", label: "News and Events" },
        { to: "/sustainability", label: "Sustainability" },
    ];

    const closeMobile = () => setIsMobileMenuOpen(false);

    return (
        <>
            {/* Mobile top bar */}
            <header className="fixed top-0 left-0 right-0 z-70 md:hidden bg-accent border-b border-white/10">
                <div className="flex items-center justify-between px-4 py-2">
                    <Link
                        to="/"
                        className="flex items-center"
                        onClick={closeMobile}
                    >
                        <img
                            src={fremnatosLogo}
                            alt="Fremnatos logo"
                            className="h-11"
                        />
                    </Link>
                    <button
                        type="button"
                        aria-label={
                            isMobileMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                        className="inline-flex items-center justify-center rounded-md p-2 text-white"
                    >
                        {isMobileMenuOpen ? (
                            <X size={24} />
                        ) : (
                            <Menu size={24} />
                        )}
                    </button>
                </div>
            </header>

            {/* Mobile overlay */}
            <div
                className={`fixed inset-0 z-65 bg-black/40 transition-opacity duration-300 md:hidden ${
                    isMobileMenuOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={closeMobile}
            />

            {/* Mobile aside */}
            <aside
                className={`fixed left-0 top-14 z-75 h-[calc(100vh-56px)] w-full bg-accent border-t border-gray-200 px-5 py-6 transition-transform duration-300 ease-out md:hidden ${
                    isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
                }`}
            >
                <div className="flex justify-center mb-6">
                    <LanguageSelector light />
                </div>

                <nav className="flex flex-col items-center gap-5">
                    <Link
                        key="home"
                        to="/"
                        onClick={closeMobile}
                        className={`text-base uppercase tracking-wide font-medium transition-colors ${
                            isActive("/")
                                ? "text-secondary"
                                : "text-white hover:text-secondary"
                        }`}
                    >
                        Home
                    </Link>
                    {/* About Us dropdown in mobile */}
                    <CustomDropDown
                        label="About Us"
                        nav={aboutUs}
                        light
                        onNavigate={closeMobile}
                    />
                    {/* Our Programs dropdown in mobile */}
                    <CustomDropDown
                        label="Our Programs"
                        nav={ourPrograms}
                        light
                        onNavigate={closeMobile}
                    />
                    {navLinks.map((nav) => (
                        <Link
                            key={nav.to}
                            to={nav.to}
                            onClick={closeMobile}
                            className={`text-base uppercase tracking-wide font-medium transition-colors ${
                                isActive(nav.to)
                                    ? "text-secondary"
                                    : "text-white hover:text-secondary"
                            }`}
                        >
                            {nav.label}
                        </Link>
                    ))}

                    {/* Get Involved dropdown */}
                    <CustomDropDown
                        label="Get Involved"
                        nav={getInvolved}
                        linkClass={linkClass("/get-involved")}
                        light
                    />
                    <Link
                        to="/contact-us"
                        onClick={closeMobile}
                        className={`text-base uppercase tracking-wide font-medium transition-colors ${
                            isActive("/contact-us")
                                ? "text-secondary"
                                : "text-white hover:text-secondary"
                        }`}
                    >
                        Contact Us
                    </Link>
                </nav>

                <div className="mt-10 flex flex-col items-center gap-5">
                    <Link
                        to="/donate"
                        onClick={closeMobile}
                        className="px-6 py-2 bg-primary text-white shadow-xl font-semibold rounded hover:bg-secondary transition-colors duration-300 cursor-pointer"
                    >
                        Donate Now
                    </Link>
                </div>
            </aside>

            {/* Desktop transparent header */}
            <motion.header
                className={`absolute top-0 left-0 right-0 z-50 w-full border-b border-white/10 transition-all duration-500 ease-out hidden md:block ${
                    showStickyHeader
                        ? "opacity-0 -translate-y-2 pointer-events-none"
                        : "opacity-100 translate-y-0"
                }`}
                initial={{
                    backgroundColor: "transparent",
                    borderColor: "transparent",
                    y: -10,
                }}
                animate={{
                    backgroundColor: "rgba(0,0,0,0.1)",
                    borderColor: "rgba(255,255,255,0.1)",
                    y: 0,
                }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 1 }}
            >
                <motion.div className="">
                    {/* Info bar */}
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-[auto_1fr] items-center gap-3 text-sm text-black/90 bg-white px-4 sm:px-6 lg:px-12 py-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <Link to="/" className="flex items-center">
                            <img
                                src={fremnatosLogo}
                                alt="fremnatos logo"
                                className="h-12"
                            />
                        </Link>
                        <div className="hidden md:flex items-center justify-end gap-5 flex-wrap">
                            <span className="inline-flex items-center gap-1.5 cursor-pointer hover:text-primary">
                                <MapPin size={16} />
                                Kebelle 14, Mekelle, Ethiopia
                            </span>
                            <a
                                href="mailto:info@fremnatos.org"
                                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                            >
                                <Mail size={16} />
                                info@fremnatos.org
                            </a>

                            <a
                                href="tel:+251962555999"
                                className="inline-flex items-center gap-1.5 hover:text-primary transition-colors"
                            >
                                <Phone size={16} />
                                +251962555999
                            </a>

                            <div className="flex items-center gap-2">
                                <a
                                    href="#"
                                    aria-label="Facebook"
                                    className="hover:text-primary"
                                >
                                    <Facebook size={16} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="Instagram"
                                    className="hover:text-primary"
                                >
                                    <Instagram size={16} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="X"
                                    className="hover:text-primary"
                                >
                                    <Twitter size={16} />
                                </a>
                                <a
                                    href="#"
                                    aria-label="LinkedIn"
                                    className="hover:text-primary"
                                >
                                    <Youtube size={16} />
                                </a>
                            </div>

                            <LanguageSelector />
                        </div>
                    </motion.div>

                    {/* Nav row */}
                    <motion.div
                        className="hidden md:flex items-center justify-between mt-2 px-4 sm:px-6 lg:px-12 py-2"
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <div className="flex items-center gap-8">
                            <Link
                                to="/"
                                className={linkClass("/", "text-white")}
                            >
                                Home
                            </Link>
                            {/* About Us dropdown */}
                            <CustomDropDown
                                label="About Us"
                                nav={aboutUs}
                                linkClass={linkClass("/about-us", "text-white")}
                                light
                            />
                            {/*  Our Programs dropdown */}
                            <CustomDropDown
                                label="Our Programs"
                                nav={ourPrograms}
                                linkClass={linkClass(
                                    "/our-programs",
                                    "text-white",
                                )}
                                light
                            />
                            {navLinks.map((nav) => (
                                <Link
                                    key={nav.to}
                                    to={nav.to}
                                    className={linkClass(nav.to, "text-white")}
                                >
                                    {nav.label}
                                </Link>
                            ))}

                            {/* Get Involved dropdown */}
                            <CustomDropDown
                                label="Get Involved"
                                nav={getInvolved}
                                linkClass={linkClass(
                                    "/get-involved",
                                    "text-white",
                                )}
                                light
                            />

                            <Link
                                to="/contact-us"
                                className={linkClass(
                                    "/contact-us",
                                    "text-white",
                                )}
                            >
                                Contact Us
                            </Link>
                        </div>
                        <Link
                            to="/donate"
                            className="px-6 py-2 text-white bg-primary shadow-xl font-semibold rounded hover:bg-secondary transition-colors duration-300 cursor-pointer"
                        >
                            Donate Now
                        </Link>
                    </motion.div>
                </motion.div>
            </motion.header>

            {/* Desktop sticky header  */}
            <header
                className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out hidden md:block ${
                    showStickyHeader
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-2 pointer-events-none"
                }`}
            >
                <div className="w-full border border-gray-200 px-4 sm:px-6 py-1 md:py-1.5 bg-white md:shadow-sm transition-all duration-300">
                    <div className="grid grid-cols-[1fr_auto_auto] md:grid-cols-[auto_1fr_auto_auto] items-center gap-4">
                        <Link to="/" className="flex items-center">
                            <img
                                src={fremnatosLogo}
                                alt="Fremnatos logo"
                                className="h-13"
                            />
                        </Link>

                        <nav className="hidden md:flex items-center justify-center gap-8 text-sm font-medium text-gray-800">
                            <Link to="/" className={linkClass("/")}>
                                Home
                            </Link>
                            {/* About Us dropdown */}
                            <CustomDropDown
                                label="About Us"
                                nav={aboutUs}
                                linkClass={linkClass("/about-us")}
                                light
                            />
                            {/* Our Programs dropdown */}
                            <CustomDropDown
                                label="Our Programs"
                                nav={ourPrograms}
                                linkClass={linkClass("/our-programs")}
                                light
                            />
                            {navLinks.map((nav) => (
                                <Link
                                    key={nav.to}
                                    to={nav.to}
                                    className={linkClass(nav.to)}
                                >
                                    {nav.label}
                                </Link>
                            ))}

                            {/* Get Involved dropdown */}
                            <CustomDropDown
                                label="Get Involved"
                                nav={getInvolved}
                                linkClass={linkClass("/get-involved")}
                                light
                            />

                            <Link
                                to="/contact-us"
                                className={linkClass("/contact-us")}
                            >
                                Contact Us
                            </Link>
                        </nav>

                        <div className="justify-self-end flex items-center gap-4">
                            <LanguageSelector />
                            <Link
                                to="/donate"
                                className="px-6 py-2 text-white bg-primary shadow-xl font-semibold rounded hover:bg-secondary transition-colors duration-300 cursor-pointer"
                            >
                                Donate Now
                            </Link>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
