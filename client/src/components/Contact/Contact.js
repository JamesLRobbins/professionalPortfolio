import React, { Component } from "react";
import { Form, FormGroup, Input, Label, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
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
      message: '',
      successModal: false,
      validEmailModal: false,
      enterAllInfoModal: false
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

      this.setState({successModal: !this.state.successModal})

    await axios.post('/api/form', {
      name,
      email,
      message
    })
    
  }  else if (name === "" || email === "" || message === "")  {
    this.setState({enterAllInfoModal: !this.state.enterAllInfoModal})
  } else if (this.emailIsValid(email) === false) {
    this.setState({validEmailModal: !this.state.validEmailModal})
  }
    
  }

  toggleSuccessModal() {
    this.setState({
      successModal: !this.state.successModal
    })
  }

  toggleValidEmail() {
    this.setState({
      validEmailModal: !this.state.validEmailModal
    })
  }

  toggleAllInformation() {
    this.setState({
        enterAllInfoModal: !this.state.enterAllInfoModal
    })
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

      <Modal isOpen={this.state.successModal}>
        <ModalHeader toggle={this.toggleSuccessModal.bind(this)}>Success!</ModalHeader>
        <ModalBody>Thank you for your interest.  I'll be in touch.</ModalBody>
        <ModalFooter>
          <Button onClick={this.toggleSuccessModal.bind(this)}>Close</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.validEmailModal}>
        <ModalHeader toggle={this.toggleValidEmail.bind(this)}>Sorry!</ModalHeader>
        <ModalBody>Please Enter A Valid Email</ModalBody>
        <ModalFooter>
          <Button onClick={this.toggleValidEmail.bind(this)}>Close</Button>
        </ModalFooter>
      </Modal>

      <Modal isOpen={this.state.enterAllInfoModal}>
        <ModalHeader toggle={this.toggleAllInformation.bind(this)}>Sorry!</ModalHeader>
        <ModalBody>Please Enter All Information</ModalBody>
        <ModalFooter>
          <Button onClick={this.toggleAllInformation.bind(this)}>Close</Button>
        </ModalFooter>
      </Modal>

      </Wrapper> 
    );
  }
}


export default Contact;