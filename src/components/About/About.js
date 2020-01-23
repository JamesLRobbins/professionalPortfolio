import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import { Icon } from 'semantic-ui-react'
import "./About.css";

function About() {

    
    return (
        <Wrapper>
    <div className="container about">
        <p> I was born and raised in Muncy, PA.  At the age of 8, my family and I moved to Tennessee where I've lived ever since.
            At the age of 10, I received my first guitar and started taking lessons at the age of 11.  Over the years, I picked up
            bass, drums, mandolins, and a little bit of piano as well.  I graduated with a degree in Audio Engineering and released
            my first album "Last Words" in 2016 which I wrote, recorded, and engineered on my own.  I'm currently working on a new
            musical project "Static Siren" which I plan on having an album out mid to late 2019.</p>

        <p> Aside from music, I'm also an avid video game collector.  I own around 1,500 games/consoles spanning from 1976 to now.  
            In 2017, I started a Youtube channel where I discuss my video game collection along with fun skits I do on my own or with
            friends.  I'm excited about starting a new career as a web developer.  I plan on having my own website up by the 
            beginning of next year that will include all of my music and video projects, along with some collaborations from friends
            as well.</p>

            <div className="row extLinks">
                <div className="col-md-4">
                    <div className="ui animated button black" tabindex="0"><a href="https://www.linkedin.com/in/james-robbins-08750953/" target="_blank" rel="noopener noreferrer">
                            <div className="visible content">LinkedIn</div>
                            <div className="hidden content">LinkedIn <Icon name="linkedin icon" /></div>
                        </a></div>
                </div>
                <div className="col-md-4">
                    <button className="ui animated button black"><a href="https://github.com/JamesLRobbins" target="_blank" rel="noopener noreferrer">
                        <div className="visible content">GitHub</div>
                        <div className="hidden content">GitHub <Icon name="github icon" /></div>
                        </a></button>
                </div>
                <div className="col-md-4">
                    <button className="ui animated button black"><a href="https://pdfhost.io/v/YmWU++eGO_James_Robbins_Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <div className="visible content">Resume</div>
                        <div className="hidden content">Resume <Icon name="edit icon" /></div>   
                        </a></button>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12" id="contact">
                    JamesLRobbins86@gmail.com | 615-830-3901
                </div>
            </div>
    </div>
    </Wrapper>
    )
}

export default About

