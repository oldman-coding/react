import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Counter from './components/Counter';
import AddItem from './components/AddItem';
import Contact from './components/Contact';
import Boxes from './components/Boxes';
import { useState } from 'react';

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import dataBoxes from './data/dataBoxes'


library.add(faStar,)

function App() {
  const [boxes, setBoxes] = useState (dataBoxes)

  const boxesElements = boxes.map(box => <Boxes key={box.id} on={box.on} />)
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Counter />
      <AddItem />
      <Contact />
      {boxesElements}
    </div>
  );
}

export default App;
