import PropertyInput from './PropertyInput';
import Properties from './Properties';
import Map from './map/Map';
import { InputProvider } from '../context/InputContext'


function App() {
  return (
    <div className="App">

      <InputProvider>
        <PropertyInput />
      </InputProvider>

      <Properties />

      <Map />
      
    </div>
  );
}

export default App;
