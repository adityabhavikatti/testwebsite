import React, { Component } from 'react';
import ScrollTop from 'react-scrolltop-button';

export default class About extends Component {
  render() {
    return (
      <div className="about-page" id="about">
        <div className="container-fluid">
          <h1>About</h1>
            <p>
              I am a graduate student at Cal State Fullerton studying Computer Science. I am a frontend and networking developer with a few years of industrial experience. Having recently interned at <a href="https://red.com/" target="_blank">RED Digital Cinema</a>
            </p>
        </div>
        <ScrollTop
          text= {<i class="fa fa-chevron-up"></i>}
          distance={100}
          breakpoint={768}
          style={{ backgroundColor: "transparent", fontSize: "10px", position: "fixed", bottom: "0", right: "0" }}
          className="scroll-your-role"
          speed={550}
          target={0}
        />
      </div>
      )
  }
}
