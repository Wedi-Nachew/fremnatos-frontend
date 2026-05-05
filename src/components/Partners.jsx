import Marquee from "react-fast-marquee";
import {
    Building2,
    Cross,
    Gift,
    Globe,
    GraduationCap,
    HandHeart,
    Handshake,
    HeartPulse,
    Landmark,
    Leaf,
    ShieldCheck,
    Stethoscope,
} from "lucide-react";

const partners = [
    { name: "Global Care", icon: Globe },
    { name: "Unity Health", icon: Stethoscope },
    { name: "Kind Hands", icon: HandHeart },
    { name: "Bright Future", icon: GraduationCap },
    { name: "Safe Haven", icon: ShieldCheck },
    { name: "Hope Bridge", icon: Handshake },
    { name: "Green Impact", icon: Leaf },
    { name: "City Foundation", icon: Building2 },
    { name: "Mercy House", icon: Landmark },
    { name: "Wellness Aid", icon: HeartPulse },
    { name: "Community Care", icon: Cross },
    { name: "Giving Circle", icon: Gift },
];

const Partners = () => {
    return (
        <section className="bg-white px-6 py-6 md:px-10 md:py-10">
            <div className="mx-auto max-w-7xl flex flex-col gap-4 md:gap-6">
                <p className="text-lg text-primary md:text-xl">
                    Donors and Partners
                </p>
                <h2 className="max-w-xl text-3xl font-bold leading-tight md:text-4xl">
                    Trusted by our valued
                    <span className="font-semibold text-primary">
                        {""} partners {""}
                    </span>
                    and generous
                    <span className="font-semibold text-primary"> donors</span>
                </h2>

                <div className="overflow-hidden bg-white py-5">
                    <Marquee
                        gradient={false}
                        speed={45}
                        autoFill={true}
                        pauseOnHover={true}
                    >
                        {partners.map((partner) => {
                            const Icon = partner.icon;

                            return (
                                <div
                                    key={partner.name}
                                    className="group mx-3 flex min-w-52 items-center gap-3 bg-white px-5 py-4"
                                >
                                    <div className="rounded-lg bg-gray-50 p-2">
                                        <Icon
                                            size={54}
                                            className="text-gray-400 grayscale transition-all duration-300 group-hover:text-primary group-hover:grayscale-0 group-hover:brightness-110"
                                        />
                                    </div>
                                    <p className="text-base font-semibold text-gray-500 transition-colors duration-300 group-hover:text-black">
                                        {partner.name}
                                    </p>
                                </div>
                            );
                        })}
                    </Marquee>
                </div>
            </div>
        </section>
    );
};

export default Partners;
