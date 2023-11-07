import React from "react";
import Icon from "@assets/icon.svg";

interface CardProps {
    children: React.ReactNode;
}

const Card = ({children}: CardProps) => {
    return (
        <div className="card">
            <img src={Icon} className="card-background" />
            {children}
        </div>
    );
};

export { Card };
