import React from 'react';
import Resume from '../resources/Thomas Morgenstern - Resume.pdf';

function ImageSection() {
    return (
        <div className="ImageSection">
            <div className="aboutInfo">
                <h4>I am<span> Thomas Morgenstern</span></h4>
                <p className="aboutText">
                    I am currently a senior at the University of West Georgia, and am about to obtain my Bachelor's degree in Computer Science. 
                    I am a committed software engineer with excellent problem solving skills. I have expertise and experience in a variety of areas, as 
                    well as being a proficient full stack developer. One of my greatest interests in the field is Software Reverse Engineering and Malware Analysis.
                </p>
                <div className="aboutDetails">
                    <div className="leftSection">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Location</p>
                    </div>
                    <div className="rightSection">
                        <p>: Thomas Morgenstern</p>
                        <p>: 22</p>
                        <p>: Luthersville, Georgia</p>
                    </div>
                </div>
                <div className="btnContainer">
                    <a className="btn" href={Resume} target="_blank" download>Download Resume</a>
                </div>
            </div>
        </div>
    )
}

export default ImageSection;