import React from "react";

interface SpacerProps {
    w?: number;
    h?: number;
}

const Spacer = ({w, h}: SpacerProps) => (
    <div style={{width: w, height: h}} />
);

export { Spacer };
