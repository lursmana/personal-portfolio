import React from 'react';
import './App.css';
import Header from './components/header/header.jsx'
import About from './components/about/about.jsx'
import Nav from './components/nav/nav.jsx'
import Experience from './components/experience/experience.jsx'
import Portfolio from './components/portfolio/portfolio.jsx'
import Contact from './components/contact/contact.jsx'
import Footer from './components/footer/footer.jsx'



function App() {
  return (
    <>
    <Header />
    <Nav />
    <About />
    <Experience />
    <Portfolio />
    <Contact />
    <Footer />
    </>
  );
}

export default App;
