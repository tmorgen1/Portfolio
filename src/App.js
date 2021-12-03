import { Routes, Route } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/HomePage';
import CSProjectsPage from './pages/CSProjectsPage';
import PTWProjectsPage from './pages/PTWProjectsPage';
import About from './pages/About';
import Contact from './pages/Contact'
import NavBar from './components/NavBar';
import { useState } from 'react';


const App = () => {
    const [navBarToggle, setNavBarToggle] = useState(false);

    const navBarClick = () => {
        setNavBarToggle(!navBarToggle);
    }

    return (
        <div className="App">
            <div className={`sidebar ${navBarToggle ? 'navBarToggle' : ''}`}>
                <NavBar />
            </div>

            <div className="navBtn" onClick={navBarClick}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>

            <div className="mainContent">
                <div className="content">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/aboutme" element={<About />} />
                        <Route path="/csprojects" element={<CSProjectsPage />} />
                        <Route path="/proftechwritingprojects" element={<PTWProjectsPage />} />
                        <Route path="/contactme" element={<Contact />} />
                    </Routes>
                </div>
            </div>
        </div >
    );
}


export default App;
