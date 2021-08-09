import React from "react";
import logo from "../img/logo.png";
import {Link} from 'react-router-dom';

function HeaderBar() {
  return (
    <header>
      <div className="header-container">
        <div className="right-menu">
          <div className="logo">
          <img src={logo}  alt="logo"></img>
          </div> 
         {/* <a href="/">CSUP Blog</a>*/}
         <Link to="/">CSUP Blog</Link>
        </div>
        <div className="left-menu">
            {/*<a href='/'>Home</a>*/}
            <Link to="/">Home</Link>
            <Link to='/create'className="button-container">Add Post</Link>
        </div>
      </div>
    </header>
  );
}

export default HeaderBar;
