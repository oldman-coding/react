import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';

import { library } from '@fortawesome/fontawesome-svg-core'
import {   } from '@fortawesome/free-brands-svg-icons'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import data from "./data/data.js"

library.add(faStar)

function App() {
  return (
    <div className="app">
      <Navbar />
      <Hero />
      <Card 
        data = {data}
      />

    </div>
  );
}

export default App;
