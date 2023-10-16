import React from 'react';
import './App.css';
import Portfolio from './about';
import venkyImage from './images/venkatesh.jpg';
import ContactInfo from './contact';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={venkyImage} alt="venky" style={{ width: "150px", height: "160px", borderRadius: "50%" }} />
        <h1>Boda Venkatesh</h1>
      </header>
      <nav className="App-nav">
        <a href="#about">About</a>
        <a href="#portfolio">Portfolio</a>
        <a href="#contact">Contact</a>
      </nav>
      <section id="about" className="App-section">
        <h2>About Me</h2>
        <Portfolio />
      </section>
      <section id="portfolio" className="App-section">
        <h2>Portfolio</h2>
        <a href="https://drive.google.com/file/d/1CcbAx-hIOOidwIUlwzYKNt_UdFJ4QE6H/view" target="c">Resume</a><br></br>
       <a href="https://www.linkedin.com/in/venkatesh-boda-460479269?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="blank">
       visit Linkedin</a><br></br>
      </section>
      <section id="contact" className="App-section">
        <h2>Contact</h2>
        <ContactInfo/>
      </section>
      <footer className="App-footer">
        <p>&copy; {new Date().getFullYear()} All Rights Reserved 🥸</p>
      </footer>
    </div>
  );
}

export default App;