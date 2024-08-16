import React from "react";
import Lottie from 'lottie-react';
import animationData from '../lotties/Building.json';
import { Link } from "react-router-dom";

const Landing=()=>{
    return(
<div>
        <div className="Header-container">
        <img src="https://i.pinimg.com/736x/14/cc/6e/14cc6ea85296791a795f344b948ee084.jpg" alt="Logo" className="Logo"/>
        <nav className="Header-components">
        <span >Home </span>
        <span >About </span>
        <span>xxxx</span>
        <span >xxxx </span>
        {/* <span>Logout</span> */}
        <Link to="/">Signup</Link>
        </nav>
        </div>
        <div className="Landing-Body">
             <Lottie 
                    animationData={animationData}
                    loop={true}
                    autoplay={true}
                    style={{ height: 600, width: 900, marginBottom: '20px',marginLeft:'100px' }} 
                />
                

        </div>
        </div>
    )
}
export default Landing