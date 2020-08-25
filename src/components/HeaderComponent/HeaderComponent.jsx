import React from "react";
import Background from './../../assets/images/work-desk__dustin-lee.jpg';
import Logo from './../../assets/images/y-logo-white.png';

export const Header = function (props) {
  return (
    <div>
        <div style={{backgroundImage:`url(${Background})`, backgroundBlendMode:"multiply", backgroundColor:"#007bc1", height:"90vh", backgroundSize:"cover", backgroundPosition:"center"}}>
            <img src={Logo} width="50px" alt="Y-Logo" style={{position:"relative", top:"1.5rem", left:"2rem"}}/>
            <div style={{textAlign: "center", position: "relative", top: "50%", color: "white", transform: "translateY(-75%)"}}>
                <h5>
                    Hello! I'm Jonathan Alva
                </h5>
                <h6>
                    Consult, Design, and Develop Website
                </h6>
                <p>Have something great in mind? Feel free to contact me. </p>
                <p>I'll help you to make it happen.</p>
                <button>LET'S MAKE CONTACT</button>
            </div>
        </div>
    </div>
  );
};

export default Header;
