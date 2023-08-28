import React from "react";

interface SpacerProps {
    h: number;
}

const Spacer = ({h}: SpacerProps) => (
    <div style={{height: h}} />
);

export { Spacer };
