import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEarthAmericas, faLocationPin, faLocationDot} from '@fortawesome/free-solid-svg-icons'
import Section from './components/Section';
import tourInfo from './components/tourInfo';

library.add(faEarthAmericas, faLocationPin, faLocationDot)

function App() {
  const tourElements = tourInfo.map(tour => {
    return (
      <Section 
        key = {tour.id} 
        {...tour}
      />
    )
  })

  return (
    <div className="App">
      <Navbar />
      <div>
        {tourElements}
      </div>
    </div>
  );
}

export default App;
