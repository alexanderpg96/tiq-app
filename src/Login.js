import React, { Component } from "react";
import "./login.scss";
import logo from "./assets/images/logo.svg"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/fontawesome-free-solid";
import { faClock } from "@fortawesome/fontawesome-free-regular";
 
class Login extends Component {

  constructor() {
    super();
    this.state = {
      currentTime: null
    }
    setInterval(this.doDate, 1000);
  }

  doDate = event => {
    let today = new Date();
    let time;
    if (today.getHours() > 12) {
      time = today.getHours() - 12 + ":" + today.getMinutes() + " PM";
    } else {
      time = today.getHours() + ':' + today.getMinutes() + " AM";
    }

    if (this.state.currentTime !== time) {
      this.setState({currentTime: time })
    }
  }

  render() {
    return (
      <div className="login-container">
        <div className="logo-container">
          <img src={logo} />
        </div>
        <div className="app-name-container">
          <h1 className="abril-font">Tiq</h1>
        </div>
        <div className="input-container">
          <input type="email" placeholder="email@address.com"></input>
        </div>
        <div className="button-container">
          <div className="next-button">
          <FontAwesomeIcon icon={faArrowRight} />
          </div>
          <div className="button-text">
            press enter
          </div>
        </div>

        <div className="time-container">
          <span>
            <FontAwesomeIcon icon={faClock} />
          </span>
          <span style={{marginLeft: 7 + 'px'}}>
            { this.state.currentTime }
          </span>
        </div>
      </div>
    );
  }
}
 
export default Login;