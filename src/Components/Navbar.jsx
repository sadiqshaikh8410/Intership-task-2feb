import { useState } from "react";
import { Link } from "react-router-dom";
import '../assets/Style.css'

function Navbar() {
    const [mapOpen, setMapOpen] = useState(false);
    const [formOpen, setFormOpen] = useState(false);
     const [teamOpen, setteamOpen] = useState(false);


    return (<>
        <div className="navbar">
            <h2 className="navh1">INTERSHIP TASKS</h2>
        
<div className="list">
            <Link to="/">Home</Link>

            {/* MapDemo Dropdown */}
            <div
                className="dropdown"
                onMouseEnter={() => setMapOpen(true)}
                onMouseLeave={() => setMapOpen(false)}
            >
                <span>MapDemo ▼</span>

                {mapOpen && (
                    <div className="dropdown-menu">
                        <Link to="/mapdemo1">MapDemo1</Link>
                        <Link to="/mapdemo2">MapDemo2</Link>
                        <Link to="/mapdemo3">MapDemo3</Link>
                        <Link to="/mapdemo4">MapDemo4</Link>
                        <Link to="/mapdemo5">MapDemo5</Link>
                        <Link to="/mapdemo6">MapDemo6</Link>
                        <Link to="/mapdemo7">MapDemo7</Link>
                        <Link to="/mapdemo8">MapDemo8</Link>
                        <Link to="/mapdemo9">MapDemo9</Link>
                        <Link to="/mapdemo10">MapDemo10</Link>

                    </div>
                )}
            </div>

            <div
                className="dropdown"
                onMouseEnter={() =>  setFormOpen(true)}
                onMouseLeave={() =>  setFormOpen(false)}
            >
                <span>Form Demos ▼ </span>

                {formOpen && (
                    <div className="dropdown-menu">
                        <Link to="/Formdemo1">Formdemo1</Link>
                        <Link to="/Formdemo2">Formdemo2</Link>
                        <Link to="/Formdemo3">Formdemo3</Link>
                        <Link to="/Formdemo4">Formdemo4</Link>
                    </div>
                )}
            </div>
            
            <div
                className="dropdown"
                onMouseEnter={() =>  setteamOpen(true)}
                onMouseLeave={() =>  setteamOpen(false)}
            >
                <span>Cricket Teams ▼ </span>

                {teamOpen && (
                    <div className="dropdown-menu">
                        <Link to="/Team1">Team1</Link>
                        <Link to="/Team2">Team2</Link>
                        <Link to="/"></Link>
                        <Link to="/"></Link>
                    </div>
                )}
            </div>
</div>
    
        </div>
        </>
    );
}

export default Navbar;
