import React from 'react';
import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Portfolio from './components/portfolio/Portfolio';

const App = () => {
  return (
    <>
      <Sidebar/>
        <main className='main'>
        <Home />
        <About />
        <Portfolio />
      </main>
    </>
  );
}

export default App;
