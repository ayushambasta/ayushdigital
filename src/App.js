import React from 'react';
import './App.css';

import Head from './components/head';
import Timeline from './components/timeline';
import About from './components/about';
import Services from './components/services';
import Skill from './components/skill';
import Thank from './components/thank';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
        <Head></Head>
        <About></About>
        <Timeline></Timeline>
        <Services></Services>
        <Skill></Skill>
        <Thank></Thank>
    </div>
  );
}

export default App;
