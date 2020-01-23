import React, { Component } from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./style.css";

class Contact extends Component {

    state = {
        fullname: "",
        email: "",
        message: ""
    }

    handleInputChange = event => {

      this.setState({
        [event.target.name]: event.target.value
      });
      console.log(this.state)
    };

    render() {

    return (
      <Wrapper>
    <div className="container contact">

        <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="form-group">
                          <label htmlFor="exampleFormControlInput1">Name</label>
                          <input 
                            value={this.state.fullname}
                            name="fullname"
                            onChange={this.handleInputChange}
                            type="text"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                              <label htmlFor="exampleFormControlInput2">Email</label>
                              <input 
                                value={this.state.email}  
                                name="email"
                                onChange={this.handleInputChange}
                                type="text"
                                className="form-control"
                                />
                              </div>
                              <div className="form-group">
                                  <label htmlFor="exampleFormControlTextarea1">Message</label>
                                  <textarea 
                                  value={this.state.message}
                                  name="message"
                                  onChange={this.handleInputChange}
                                  type="text"
                                  className="form-control"
                                  />
                                  </div>
                                  <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">Submit</button>
                 
                      </form>
                </div>
            </div>
        </div>
        </Wrapper>
        
    )
       
    }
}

export default Contact;