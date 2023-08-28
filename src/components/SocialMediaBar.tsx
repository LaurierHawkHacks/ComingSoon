import React, { ReactNode } from "react";
import {
    RiDiscordLine as DiscordIcon,
    RiTwitterLine as TwitterIcon,
    RiInstagramLine as InstagramIcon,
    RiGithubLine as GithubIcon
} from "react-icons/ri";

interface SocialMediaIconProps {
    icon: ReactNode;
    url: string;
}

const SocialMediaBar = () => {
    return (
        <div className="social-container">
            <SocialMediaIcon url="https://discord.gg/z8XbEEXkqN" icon={DiscordIcon} />
            <SocialMediaIcon url="https://twitter.com/wluhawkhacks" icon={TwitterIcon} />
            <SocialMediaIcon url="https://instagram.com/wluhawkhacks/" icon={InstagramIcon} />
            <SocialMediaIcon url="https://github.com/LaurierHawkHacks" icon={GithubIcon} />
        </div>
    );
};

const SocialMediaIcon = ({icon, url}: SocialMediaIconProps) => {
    const IconComponent = icon;
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <IconComponent size={50} className="social-icon" />
        </a>
    );
};

export { SocialMediaBar };
