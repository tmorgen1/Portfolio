import React from 'react';
import ProjectData from '../components/PTWProjectsData';
import PageTitle from '../components/PageTitle';
import MenuItems from '../components/MenuItems';
import {useState} from 'react';

const PTWProjectsPage = () => {
    const [menuItems] = useState(ProjectData);

    return (
        <div className="ProjectsPage">
            <div className="title">
                <PageTitle title={'Prof & Tech Projects'} span={'Prof & Tech Projects'}/>
            </div>
            <div className="projectsData">
                <MenuItems menuItem={menuItems}/>
            </div>
        </div>
    );
}

export default PTWProjectsPage;