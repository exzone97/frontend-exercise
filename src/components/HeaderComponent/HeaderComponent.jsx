import React from "react";
import Logo from './../../assets/images/y-logo-white.png';

export const Header = function (props) {
  return (
    <div>
        <div className="background" >
            <img className="background-logo" src={Logo} alt="Y-Logo"/>
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
                <div className="header-button-container">
                    <button className="header-button">LET'S MAKE CONTACT</button>
                </div>
            </div>
        </div>
    </div>
  );
};

export default Header;
