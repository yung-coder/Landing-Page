import React from 'react';

import { AboutUs,  Footer, Gallery, Header, Intro,  SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <AboutUs />
    <SpecialMenu />
    <Intro />
    <Gallery />
    <Footer />
  </div>
);

export default App;
