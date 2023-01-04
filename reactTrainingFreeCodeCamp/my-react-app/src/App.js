import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Main from './components/Main';
import Header from './components/Header';
import About from './components/About';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

library.add(faLinkedin, faGithub, faEnvelope)

function App() {
  return (
    <div className="app">
      <Header />
      <About />
    </div>
  );
}

export default App;
