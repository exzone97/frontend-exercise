import React from "react";
import Logo from './../../assets/images/y-logo-white.png';

export const Header = function (props) {
  return (
    <div>
        <div className="background" >
            <img src={Logo} width="50px" alt="Y-Logo" style={{position:"relative", top:"1.5rem", left:"2rem"}}/>
            <div className="background-text">
                <p className="header-title">
                    Hello! I'm Jonathan Alva
                </p>
                <p className="header-subtitle">
                    Consult, Design, and Develop Websites
                </p> 
                <div className="container-fluid header-text">
                    <p>Have something great in mind? Feel free to contact me. <br/> I'll help you to make it happen.</p>
                </div>
                <div className="" style={{paddingTop:"1.5rem"}}>
                    <button className="header-button">LET'S MAKE CONTACT</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
