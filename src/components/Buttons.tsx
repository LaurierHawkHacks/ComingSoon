import React from "react";

const Buttons = () => (
    <div className="button-container">
        <form action="https://eepurl.com/hDHf8b" target="_blank">
            <button>Newsletter</button>
        </form>

        <form action="https://hawkhacks.ca/sponsorships.pdf" target="_blank" method="GET">
            <button style={{ whiteSpace: "nowrap" }}>Sponsor Us</button>
        </form>
    </div>
);

export { Buttons };
