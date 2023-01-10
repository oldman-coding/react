import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Counter from './components/Counter';
import AddItem from './components/AddItem';
import Contact from './components/Contact';
import Boxes from './components/Boxes';

import { faStar } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'

library.add(faStar,)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Counter />
      <AddItem />
      <Contact />
      <Boxes darkMode ={true} />
    </div>
  );
}

export default App;
