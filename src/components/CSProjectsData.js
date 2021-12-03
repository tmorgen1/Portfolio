import froggerImage from '../images/projectImages/frogger.png';
import weatherImage from '../images/projectImages/weatherapp.png';
import clinicImage from '../images/projectImages/clinic.png';

const CSProjectsData = [
    {
        id: 1,
        category: 'Java',
        link: 'https://github.com/tmorgen1/DevOps-WeatherApp',
        image: weatherImage,
        title: 'Weather GUI/Server Application',
        description: 'This project was completed in a Developer Operations course. The focus of this project was to work throughout the semester to develop a fully functional server sided service application with a connecting gui application. However, we were also tasked with following some of the methodologies discussed in the course, such as: developing with an AGILE mindset; the principles of flow, feedback, and continual learning; continuous integration; and continous deployment.'
    },
    {
        id: 2,
        category: 'C#',
        link: 'https://github.com/nwilli27/Memefrogger',
        image: froggerImage,
        title: 'Frogger Remake',
        description: 'This was a several week long project in a Program Construction course. The focus of this project was to develop something fun and interesting using some of the most recent things learned in the class. Although developing a game is sort of tedious in a UWP C# environment, it was still a fun endeavor and I think my group produced something pretty entertaining.'
    },
    {
        id: 3,
        category: 'C#',
        link: 'https://github.com/tmorgen1/ClinicDatabaseSystem',
        image: clinicImage,
        title: 'Clinic Database System',
        description: 'This was a half semester long project in a Database/Information Management course. The focus of this was to develop something that could be used by a clinic to book appointments with patients, enter information obtained during appointments, and even order tests for patients. It employs a MySQL database to store and organize the data collected, uses encryption when storing confidential information such as passwords, and uses up to date methodologies to prevent SQL Injection attacks.'
    }
];

export default CSProjectsData;