import React, { useRef } from "react";
import logo from "./images/logo.svg";


function Header(){
    const hamRef = useRef()
    const menuRef = useRef()

    function hamClick(){
        hamRef.current.classList.toggle("active")
        menuRef.current.classList.toggle("active")
    }

    function itemClick(){
        hamRef.current.classList.remove("active")
        menuRef.current.classList.remove("active")
    }

    return(
        <nav>
            <div className="left">
                <img src={logo} alt="Logo" />
            </div>

            <ol className="navMenu" ref={menuRef}>
                <li onClick={itemClick} >Home</li>
                <li onClick={itemClick} >About</li>
                <li onClick={itemClick} >Contact</li>
                <li onClick={itemClick} >Blog</li>
                <li onClick={itemClick} >Careers</li>
            </ol>

            <button className="req">Request Invite</button>

            <div className="hamburger" onClick={() => (hamClick())} ref={hamRef}>
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
    )
}

export default Header
















