import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Header from './components/Header';
import About from './components/About';
import Footer from './components/Footer';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub, faTwitter, faFacebookSquare, faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(faLinkedin, faGithub, faEnvelope, faTwitter, faFacebookSquare, faInstagram)

function App() {
  return (
    <div className="app">
      <Header />
      <About />
      <Footer />
    </div>
  );
}

export default App;
