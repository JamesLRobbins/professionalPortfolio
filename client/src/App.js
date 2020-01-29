import React, { Component } from 'react';

import Home from "./pages/Home/Home"
import './App.css';

class App extends Component {

  //   // Initialize state
  // state = { contact: [] }

  // // Fetch passwords after first mount
  // componentDidMount() {
  //   this.contactForm();
  // }

  // contactForm = () => {
  //   // Get the passwords and store them in state
  //   fetch('/api/form')
  //     .then(res => res.json())
  //     .then(contact => this.setState({ contact }));
  // }

  render() {
  return (
  <Home />
  );
}
}

export default App;
