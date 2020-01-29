import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button } from 'reactstrap'
import Wrapper from "../Wrapper/Wrapper";
import axios from 'axios';
import { Icon } from 'semantic-ui-react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./style.css";

class Contact extends Component {
  constructor() {
    super()

    this.state = {
      name: '',
      email: '',
      message: ''
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)

  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  emailIsValid (email) {
    return /\S+@\S+\.\S+/.test(email)
}

  async handleSubmit(e) {
    e.preventDefault();

    const { name, email, message } = this.state

    if (name !== "" && email !=="" && this.emailIsValid(email) === true && message !== "") {

      e.target.reset();

      alert("Sent!")

    await axios.post('/api/form', {
      name,
      email,
      message
    })
    
  }  else if (name === "" || email === "" || message === "")  {
    alert("Please Enter All Information")
  } else if (this.emailIsValid(email) === false) {
    alert("Please Enter a valid email address")
  }
    
  }

  render() {
    return (
      <Wrapper>
      <Form onSubmit={this.handleSubmit} className="contact">
        <FormGroup>
          <Label for="name">Name:</Label>
          <Input
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.nameField}
            />
        </FormGroup>

         <FormGroup>
          <Label for="email">Email:</Label>
          <Input
            type="text"
            name="email"
            onChange={this.handleChange}
            />
        </FormGroup>  

         <FormGroup>
          <Label for="message">Message:</Label>
          <Input
            type="textarea"
            name="message"
            onChange={this.handleChange}
            />
        </FormGroup> 

        <Button className="ui animated button black">
          <div className="visible content">Submit</div>
          <div className="hidden content">Submit <Icon name="envelope" /></div>
          </Button>    

      </Form>
      </Wrapper> 
    );
  }
}


export default Contact;