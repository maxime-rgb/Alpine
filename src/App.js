import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';
import ChangeColor from "./components/ChangeColor";
import ChangeRim from "./components/ChangeRims";
import ChangeSaddlery from "./components/ChangeSaddlery";


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

          <Route path="/">
          <Home />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}


function Users() {
  return <h2>Users</h2>;
}
