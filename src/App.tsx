import React from "react";
import PropTypes from "prop-types";
import Icon from "@assets/icon.svg";

import { Clock } from "./components/Clock";
import { Subscribe } from "./components";

const App = () => {
    return (
        <div className="app-container">
            <div className="content-container">
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                    <img className="icon" src={Icon} />
                </a>

                {/* <div className="card"> */}
                <h1 className="title">
                    {"<HawkHacks />"}
                </h1>
                <Clock />
                {/* </div> */}
                {/* <Subscribe /> */}
            </div>

            <div className="background-container" />
        </div>
    );
};

export default App;
