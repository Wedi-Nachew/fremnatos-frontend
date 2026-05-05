import { Mail, MapPin, Phone } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-black px-6 py-10 text-white md:px-10 md:py-14">
            <div className="mx-auto max-w-7xl">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div>
                        <h3 className="text-2xl font-bold text-white">
                            Fremnatos
                        </h3>
                        <p className="mt-3 text-white/70">
                            Restoring dignity and hope through compassionate
                            care for children, elders, and mentally distressed
                            individuals.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white">
                            Quick Links
                        </h4>
                        <ul className="mt-3 space-y-2 text-white/70">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Home
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Children Care
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Elderly Care
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Mentally Disabled Care
                                </a>
                            </li>

                            <li>
                                <a href="#" className="hover:text-white">
                                    News & Events
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white">
                            About Us
                        </h4>
                        <ul className="mt-3 space-y-2 text-white/70">
                            <li>
                                <a href="#" className="hover:text-white">
                                    Our Story
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Our Impact
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Gallery
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Get Involved
                                </a>
                            </li>
                            <li>
                                <a href="#" className="hover:text-white">
                                    Legal
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-lg font-semibold text-white">
                            Contact
                        </h4>
                        <ul className="mt-3 space-y-3 text-white/70">
                            <li className="inline-flex items-start gap-2">
                                <MapPin size={16} className="mt-0.5 shrink-0" />
                                Mekelle, Tigray, Ethiopia
                            </li>
                            <li className="inline-flex items-center gap-2">
                                <Phone size={16} className="shrink-0" />
                                +251 911 123 456
                            </li>
                            <li className="inline-flex items-center gap-2">
                                <Mail size={16} className="shrink-0" />
                                info@fremnatos.org
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-8 border-t border-white/15 pt-5 text-sm text-white/60">
                    © {new Date().getFullYear()} Fremnatos. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
