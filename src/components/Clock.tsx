import React from "react";
import PropTypes from "prop-types";

const Clock = () => {
    const [date, setDate] = React.useState(new Date());
    React.useEffect(() => {
        const timer = setInterval(() => setDate(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    const hackathonStartTime = 1709938800000; // use currentmillis.com to find this number
    const countdown = hackathonStartTime - date.getTime();
    const days = (countdown - (countdown % 86400000)) / 86400000;
    const hours = ((countdown % 86400000) - (countdown % 3600000)) / 3600000;
    const minutes = ((countdown % 3600000) - (countdown % 60000)) / 60000;
    const seconds = ((countdown % 60000) - (countdown % 1000)) / 1000;

    return (
        <div className="clock-container">
            <ClockPiece>
                <h4>{days}</h4>
                <p>DAYS</p>
            </ClockPiece>
            <ClockDivider />
            <ClockPiece>
                <h4>{hours}</h4>
                <p>HRS</p>
            </ClockPiece>
            <ClockDivider />
            <ClockPiece>
                <h4>{minutes}</h4>
                <p>MINS</p>
            </ClockPiece>
            <ClockDivider />
            <ClockPiece>
                <h4>{seconds}</h4>
                <p>SECS</p>
            </ClockPiece>
        </div>
    );
};

const ClockDivider = () => (
    <div className="clock-divider">
        <h4>:</h4>
    </div>
);

const ClockPiece = ({children}: {children?: React.ReactNode}) => (
    <div className="clock-section">
        {children}
    </div>
);

ClockPiece.propTypes = {
    children: PropTypes.any
};

export { Clock };
