import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Counter from './components/Counter';
import AddItem from './components/AddItem';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Counter />
      <AddItem />
    </div>
  );
}

export default App;
