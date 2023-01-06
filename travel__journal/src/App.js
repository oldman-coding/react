import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEarthAmericas, faLocationPin, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Section from './components/Section';

library.add(faEarthAmericas, faLocationPin, faLocationDot)

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section /> 
    </div>
  );
}

export default App;
