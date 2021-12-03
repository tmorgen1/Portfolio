import React from 'react';

function SkillsSection({skill}) {
    return (
        <div className="SkillsSection">
            <div className="skillsContainer">
                <h5 className="skillTitle">{skill}</h5>
            </div>
        </div>
    )
}

export default SkillsSection;