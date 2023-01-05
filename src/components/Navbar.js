import React from "react";

const Navbar = () => {
    return(
        <div className="header">
            <div className="logo">
                <h1>odira</h1>
            </div>
            <nav className="navbar">
                <ul className="navbar-items">
                    <li><a href="#" className="nav-link">Home</a></li>
                    <li><a href="#" className="nav-link">About</a></li>
                    <li><a href="#" className="nav-link">Blog</a></li>
                </ul>
            </nav>
        </div>
    )
}
export default Navbar