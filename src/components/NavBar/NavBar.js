import React from "react";
import "./style.css";

function NavBar(props) {
    return <div className="container-flex navigation">

<nav className="navbar navbar-expand-md navbar-dark bg-dark">
    <div className="navbar-brand abs"><h1>James Robbins</h1></div>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsingNavbar">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="navbar-collapse collapse" id="collapsingNavbar">
        <ul className="navbar-nav">
            <li className="nav-item">
                <div className="nav-link hvr-grow">{props.about}</div>
            </li>
            <li className="nav-item">
                <div className="nav-link hvr-grow">{props.projects}</div>
            </li>
            <li className="nav-item">
                <div className="nav-link hvr-grow" data-toggle="collapse">{props.contact}</div>
            </li>
        </ul>
    </div>
</nav>
   


  </div>
}

export default NavBar