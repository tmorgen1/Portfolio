import React from 'react';
import ProjectData from '../components/CSProjectsData';
import PageTitle from '../components/PageTitle';
import Categories from '../components/Categories';
import MenuItems from '../components/MenuItems';
import {useState} from 'react';

const allCategories = ['All', ...new Set(ProjectData.map(item => item.category))];

const CSProjectsPage = () => {
    const [categories, setCategories] = useState(allCategories);
    const [menuItems, setMenuItems] = useState(ProjectData);

    const filter = (category) => {
        if (category == 'All') {
            setMenuItems(ProjectData);
            return;
        }
        const filteredData = ProjectData.filter((item) => {
            return item.category === category;
        });
        setMenuItems(filteredData);
    }

    return (
        <div className="ProjectsPage">
            <div className="title">
                <PageTitle title={'Comp Sci Projects'} span={'Comp Sci Projects'}/>
            </div>
            <div className="projectsData">
                <Categories filter={filter} categories={categories}/>
                <MenuItems menuItem={menuItems}/>
            </div>
        </div>
    );
}

export default CSProjectsPage;