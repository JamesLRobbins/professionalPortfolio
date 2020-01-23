import React from "react";
import Wrapper from "../Wrapper/Wrapper";
import "./style.css";

function Contact() {
    return (
      <Wrapper>
    <div className="container contact">

        <div className="row">
                <div className="col-md-12">
                    <form>
                        <div className="form-group">
                          <label for="exampleFormControlInput1">Name</label>
                          <input type="email" className="form-control" id="exampleFormControlInput1" />
                        </div>
                        <div className="form-group">
                                <label for="exampleFormControlInput1">Email</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1" />
                              </div>
                              <div className="form-group">
                                    <label for="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="5"></textarea>
                                  </div>
                                  <button type="submit" className="btn btn-primary">Submit</button>
                 
                      </form>
                </div>
            </div>
        </div>
        </Wrapper>
        
    )
        
}

export default Contact;