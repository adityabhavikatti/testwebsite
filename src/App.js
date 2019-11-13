import React from 'react';
import './Assets/scss/App.scss';
import Header from './components/header'
import Intro from './components/intro'
import About from './components/about'
import Portfolio from './components/portfolio'
import Timeline from './components/timeline'


function App() {
  return (
    <div>
      <Header></Header>
      <div className="content"> 
        <Intro></Intro>
        {/* <About></About>
        <Portfolio></Portfolio>
        <Timeline></Timeline> */}
      </div>
    </div>
  );
}

export default App;
