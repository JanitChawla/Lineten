import React, { useState } from "react";
import './Header.css';
import menuIcon from "../../img/menu2.png";

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  // const [dialogue, setDialogue] = useState('');

  // const render = ()=> {
  //   return <div className="hoverbox" >Coming soon 😃</div>
  // }

  // const handleHover = ()=> {
  //   setDialogue(render);
  // }

  // const handleLeave = ()=> {
  //   setDialogue('');
  // }

    return (
      <header>
        <nav>
          <img src={menuIcon} onClick={()=>setShowLinks(!showLinks)} className="menu-icon" alt="menu-icon"/>
          <ul className="nav-menu" id={showLinks ? "hidden" : ""} >
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#work">Work</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="https://medium.com/@chawlajanit">Blogs</a></li>
            
            {/* <li onMouseOver={handleHover} onMouseLeave={handleLeave}><button className="hover"  rel="noopener noreferrer" target="_blank">Blogs {dialogue}</button></li> */}
          </ul>
        </nav>
      </header>
    );
};

export default Header;
