import {
    Facebook,
    Instagram,
    Linkedin,
    Mail,
    Phone,
    Twitter,
} from "lucide-react";

const socialIcons = {
    facebook: Facebook,
    instagram: Instagram,
    linkedin: Linkedin,
    twitter: Twitter,
    x: Twitter,
};

const TeamContactCard = ({ person, dark = false }) => {
    const cardClass = dark
        ? "border-white/15 bg-white/5 text-white"
        : "border-gray-200 bg-white text-gray-900";
    const roleClass = dark ? "text-secondary" : "text-primary";
    const metaClass = dark ? "text-white/75" : "text-gray-600";
    const dividerClass = dark ? "border-white/10" : "border-gray-200";

    const socialEntries = Object.entries(person.socials ?? {}).filter(
        ([, url]) => Boolean(url),
    );

    return (
        <article className={` ${cardClass}`}>
            <img
                src={person.image}
                alt={person.name}
                className="h-48 w-full object-cover"
            />

            <div className="p-5 rounded-b-2xl border border-gray-300 bg-white/50 backdrop-blur-sm">
                <h3 className="text-lg font-semibold">{person.name}</h3>
                <p className={`mt-1 text-sm font-medium ${roleClass}`}>
                    {person.role}
                </p>

                <div
                    className={`mt-4 flex flex-col gap-2 text-sm ${metaClass}`}
                >
                    <p className="inline-flex items-center gap-2">
                        <Mail size={15} className={roleClass} />
                        {person.email}
                    </p>
                    <p className="inline-flex items-center gap-2">
                        <Phone size={15} className={roleClass} />
                        {person.phone}
                    </p>
                </div>

                <div
                    className={`mt-4 flex items-center gap-2 border-t pt-4 ${dividerClass}`}
                >
                    {socialEntries.map(([network, url]) => {
                        const SocialIcon = socialIcons[network] ?? Linkedin;

                        return (
                            <a
                                key={network}
                                href={url}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={`${person.name} ${network}`}
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-300 text-gray-600 transition-colors hover:border-primary hover:text-primary"
                            >
                                <SocialIcon size={15} />
                            </a>
                        );
                    })}
                </div>
            </div>
        </article>
    );
};

export default TeamContactCard;
