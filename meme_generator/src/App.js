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
import Messages from './components/Messages';

import Joke from './components/Joke';
import jokedata from './data/jokedata'; 
import InputForm from './components/InputForm';
import SignUp from './components/SignUp';

library.add(faStar,)

function App() {
  const [boxes, setBoxes] = useState (dataBoxes)
  const [jokes, setJokes] = useState (jokedata)
  /*
  function toggle(id) {
    setBoxes(prevBox => {
      let box = []
      for (let i=0; i < prevBox.length; i ++) {
        let currentBox = prevBox[i]
        if (i !== id) {
          box.push(currentBox)
        } else {
          box.push({
            ...currentBox,
            on: !currentBox.on
          })
        }
      }
      return box
    })
  }
  */

  // Imperative way set state
  function toggle(id) {
    setBoxes(prevBox => 
      prevBox.map(box => box.id === id ? {...box, on: !box.on, isShown: !box.isShown} : box )
    )
  }

  const boxesElements = boxes.map(box => 
    <Boxes 
      key={box.id} 
      on={box.on}
      id={box.id} 
      isShown = {box.isShown}
      toggle = {() => toggle(box.id)} />
  )
  
  const jokeElements = jokes.map(joke => 
    <Joke 
      key = {joke.id}
      heading = {joke.heading}
      description = {joke.description}
      isShown = {joke.isShown}
    />
  )
      
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Counter />
      <AddItem />
      <Contact />
      {boxesElements}
      <Messages />
      {jokeElements}
      <InputForm />
      <SignUp />
    </div>
  );
}

export default App;
