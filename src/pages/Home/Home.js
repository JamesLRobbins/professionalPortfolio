import React from 'react';
import NavBar from "../../components/NavBar/NavBar";
import Root from "../../components/Root/Root";
import About from "../../components/About/About";
import Contact from "../../components/Contact/Contact";
import Projects from "../../components/Portfolio/Portfolio";
import "./style.css";


export default class Home extends React.Component {
    constructor (props) {
        super(props)
        this.toggleAbout = this.toggleAbout.bind(this)
        this.toggleContact = this.toggleContact.bind(this)
        this.toggleProjects = this.toggleProjects.bind(this)

        this.state = {
            showAbout: false,
            showProjects: true,
            showContact: false,
        }
    }

    toggleAbout (event) {
        event.preventDefault()
            this.setState({
                showAbout: true,
                showProjects: false,
                showContact: false
            })
    }

    toggleContact (event) {
        event.preventDefault()
            this.setState({
                showAbout: false,
                showProjects: false,
                showContact: true
        })

    }

        
        toggleProjects (event) {
        event.preventDefault()
            this.setState({
                showAbout: false,
                showProjects: true,
                showContact: false
        }) 

    }
 
    render() {
        const {showAbout} = this.state;
        const {showContact} = this.state;
        const {showProjects} = this.state;
        return (
            <div>
                <NavBar
                about = {<li onClick={this.toggleAbout} className="hvr-pulse-grow">About</li>}
                projects = {<li onClick={this.toggleProjects} className="hvr-pulse-grow">Projects</li>}
                contact = {<li onClick={this.toggleContact} className="hvr-pulse-grow">Contact</li>}
                />
                <div>
                   
                <Root />
                {showAbout === true ? <About /> : ""}
                {showContact === true ? <Contact /> : ""}
                {showProjects === true ? <Projects /> : ""}
                    </div>
            </div>


        )
    }
}

