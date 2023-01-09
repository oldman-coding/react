import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Form from './components/Form';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Form />
      <Counter />
    </div>
  );
}

export default App;
