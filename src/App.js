import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home';
import ChangeColor from "./components/ChangeColor";
import ChangeRim from "./components/ChangeRims";
import ChangeSaddlery from "./components/ChangeSaddlery";
import ChangeEquipment from "./components/ChangeEquipments";
import ChangeAccessories from "./components/ChangeAccessories";
import Recap from "./components/Recap";


export default function App() {
  return (
    <Router>
      <div>


        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>

          <Route path="/colors">
            <ChangeColor />
          </Route>

          <Route path="/rims">
          <ChangeRim />
          </Route>

          <Route path="/saddlery">
          <ChangeSaddlery />
          </Route>

          <Route path="/equipments">
          <ChangeEquipment />
          </Route>

          <Route path="/accessories">
          <ChangeAccessories />
          </Route>

          <Route path="/recap">
          <Recap />
          </Route>

          <Route path="/">
          <Home />
          </Route>


        </Switch>
      </div>
    </Router>
  );
}