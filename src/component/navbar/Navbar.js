import React from 'react'
import "./Navbar.css"
import { Link } from "react-router-dom"
function Navbar() {
    return (
        <div className='nav_bar spacebtwn_flex'>
            <div className="logo"><h3>Resume Builder</h3></div>
            {/* <Resumedata className="export_btn"/> */}
            <Link to="/resume">
                <button className='show_resume'>View Resume</button>
            </Link>
        </div>
    )
}

export default Navbar