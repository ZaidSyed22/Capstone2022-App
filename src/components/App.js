import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../css/App.css";
import "../css/Navbar.css";
import Home from "./Home";
import Pagetemplate from "./Pagetemplate";
import PropertyInput from "./PropertyInput";
import Properties from "./Properties";
import Map from "./map/Map";

import { InputProvider } from '../context/InputContext'
import { OutputProvider } from '../context/OutputContext'
import SaveButton from './databaseDisplay/SaveButton';
import SavedDeal from "./databaseDisplay/SavedDeal";
import Login from './Login';
import Signup from './Signup';
import Donate from "./Donate";

function App() {
  return (
    <div className="App">
      <Router>
        <Pagetemplate>
          <Switch>
            <Route path="/" exact>
              <Home />
            </Route>

            <Route path="/login" exact>
              <Login />
            </Route>

            <Route path="/signup" exact>
              <Signup />
            </Route>

            <Route path="/donate" exact>
              <Donate />
            </Route>

            <Route path="/PropertyInput.js" exact>
              <InputProvider>
                <OutputProvider>
                  <PropertyInput />
                  <Map />
                  <Properties />
                  <SaveButton />
                </OutputProvider>
              </InputProvider>
            </Route>
            
            <Route path="/deals" exact>
              <InputProvider>
                  <OutputProvider>
                    <SavedDeal />
                  </OutputProvider>
                </InputProvider>
            </Route>

      {/* <Route path="/Properties.js" exact>  
        <OutputProvider>
          <Properties />
        </OutputProvider>
      </Route> */}

      {/* <Route path="./map/Map.js" exact>  
      <Map />
      </Route> */}

  </Switch>
</Pagetemplate>
</Router>
    </div>
  );
}

export default App;
