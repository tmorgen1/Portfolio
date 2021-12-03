import React from 'react'
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HomePage = () => {
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="heroText">
                    Welcome! I am <span>Thomas Morgenstern</span>
                </h1>
                <p className="homeSubText">
                    I am a senior Computer Science student attending the University of West Georgia. I am incredibly interested in reverse engineering software and malware analysis!
                </p>
                <div className="icons">
                    <a className="iconLink" href="https://github.com/tmorgen1" target="_blank">
                        <FontAwesomeIcon icon={faGithub} className="icon gh" />
                    </a>
                    {/* <a className="iconLink" href="https://www.linkedin.com/in/" target="_blank">
                    <FontAwesomeIcon icon={faLinkedin} className="icon li" />
                </a> */}
                </div>
            </header>
        </div>
    );
}

export default HomePage;