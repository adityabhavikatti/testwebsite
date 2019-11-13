import React, { Component } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";


export default class Header extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <header id="myHeader">
       <div className="logo">
Aditya Bhavikatti
</div>
<nav className="nav" id="navbar">
<ul className="nav-items">
<li className="nav-item">
    <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      About
    </Link>
  </li>
  <li className="nav-item">
    <Link
      activeClass="active"
      to="portfolio"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      Portfolio
    </Link>
  </li>
  <li className="nav-item">
    <Link
      activeClass="active"
      to="timeline"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      Timeline
    </Link>
  </li>
</ul>
</nav>
      </header>
    );
  }
}


/* <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">Disabled</a>
      </li>
    </ul>
  </div>
</nav> */

/* <div className="logo">
Aditya Bhavikatti
</div>
<nav className="nav" id="navbar">
<ul className="nav-items">
<li className="nav-item">
    <Link
      activeClass="active"
      to="about"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      About
    </Link>
  </li>
  <li className="nav-item">
    <Link
      activeClass="active"
      to="portfolio"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      Portfolio
    </Link>
  </li>
  <li className="nav-item">
    <Link
      activeClass="active"
      to="timeline"
      spy={true}
      smooth={true}
      offset={0}
      duration={500}
    >
      Timeline
    </Link>
  </li>
</ul>
</nav> */
