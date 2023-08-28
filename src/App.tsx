import React from "react";
import PropTypes from "prop-types";
import Icon from "@assets/icon.svg";
import { Card, Clock, Spacer, Subscribe, SocialMediaBar } from "./components";

interface ContainerProps {
    children: React.ReactNode;
}

const App = () => {
    return (
        <AppContainer>
            <ContentContainer>
                <a href="https://youtube.com/watch?v=dQw4w9WgXcQ" target="_blank" rel="noreferrer">
                    <img className="icon" src={Icon} />
                </a>

                <Spacer h={50} />

                <Card>
                    <Clock />
                    <Spacer h={50} />
                    <h1 className="title">HawkHacks 2024</h1>
                    <p>Laurier | In-Person & Online</p>
                    <Spacer h={50} />

                    <p style={{width: "400px", textAlign: "center", color: "var(--black)"}}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam euismod velit eu erat semper convallis. Maecenas efficitur
                        sed nibh in vulputate. In in mauris et felis aliquet auctor sit amet id neque.
                    </p>

                    <SocialMediaBar />
                </Card>
            </ContentContainer>

            <BackgroundContainer />
        </AppContainer>
    );
};

const AppContainer = ({children}: ContainerProps) => (
    <div className="app-container">
        {children}
    </div>
);

const ContentContainer = ({children}: ContainerProps) => (
    <div className="content-container">
        {children}
    </div>
);

const BackgroundContainer = () => (
    <div className="background-container" />
);

export default App;
