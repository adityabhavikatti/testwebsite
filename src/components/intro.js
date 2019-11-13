import React, { Component } from 'react'
import TextLoop from "react-text-loop";

export default class Intro extends Component {
  render() {
    return (
    <div className="intro-page">
        <div className="container-fluid">
            <h1 className="center">Hi!</h1>
            <h1 className="center">I'm Aditya</h1>
            <h2 className="center skills"> And I am a&nbsp;
                  <TextLoop interval={2500} springConfig={{ stiffness: 300, damping: 10 }}>
                  <span>Developer</span>
                  <span>Designer&nbsp;&nbsp;</span>
                  <span>Coder&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                </TextLoop>
            </h2>
            <h4 className="center skills">Front-End Developer | React | AWS | Networking | Wordpress </h4>
            <div className="social-icons animate-icons center">
            <ul>
                <li><a href="https://github.com/adityabhavikatti/" target="blank"><i className="fa fa-github"></i></a></li>
                <li><a href="https://www.linkedin.com/in/adityabhavikatti/" target="blank"><i className="fa fa-linkedin"></i></a></li>
                <li><a href="https://www.facebook.com/aditya.bhavikatti/" target="blank"><i className="fa fa-facebook"></i></a></li>
                <li><a href="mailto:aditya.bhavikatti@gmail.com" target="blank"><i className="fa fa-envelope"></i></a></li>
            </ul>
            </div> 
        </div>
    </div>
    );
  }
}
