import React, { ReactElement } from "react";
import {
    RiDiscordLine as DiscordIcon,
    RiLinkedinLine as LinkedinIcon,
    RiInstagramLine as InstagramIcon,
    RiGithubLine as GithubIcon
} from "react-icons/ri";

interface SocialMediaIconProps {
    icon: ReactElement;
    url: string;
}

const SocialMediaBar = () => {
    const iconProps = {size: 50, className: "social-icon"};

    return (
        <div className="social-container">
            <SocialMediaIcon url="https://discord.hawkhacks.ca"
                icon={<DiscordIcon {...iconProps} />}
            />
            <SocialMediaIcon url="https://linkedin.com/company/hawkhacks"
                icon={<LinkedinIcon {...iconProps} />}
            />
            <SocialMediaIcon url="https://instagram.com/wluhawkhacks/"
                icon={<InstagramIcon {...iconProps} />}
            />
            <SocialMediaIcon url="https://github.com/LaurierHawkHacks"
                icon={<GithubIcon {...iconProps} />}
            />
        </div>
    );
};

const SocialMediaIcon = ({icon, url}: SocialMediaIconProps) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            {icon}
        </a>
    );
};

export { SocialMediaBar };
