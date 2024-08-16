import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
const Header = ()=>{
    return(
        <div className="Header-container">
            <img src="https://i.pinimg.com/736x/14/cc/6e/14cc6ea85296791a795f344b948ee084.jpg" alt="Logo" className="Logo"/>
            <nav className="Header-components">
            <span >Home </span>
            <span >About </span>
            <span>xxxx</span>
            <span>xxxx </span>
            {/* <span>Logout</span> */}
            <Link to="/Home">Logout</Link>
            </nav>





        </div>
    )
}
export default Header