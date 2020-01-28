import React from "react";
import "./style.css";

function Root() {
    return <div className="container">
        <div className="row">
            <div className="col-md-12">
            <img src={require("../../Images/james.jpg")} alt="James" className="jamesImg" />
            </div> 
        </div>

        <div className="row title"> 
            <div className="col-md-12">Web Developer and Audio Engineer</div>
            </div>

    </div>
}

export default Root;