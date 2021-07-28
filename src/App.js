import React, { useEffect } from "react";
import { Launch } from "./Components/Launch/Launch";
import { LaunchInfo } from "./Components/LaunchInfo/LaunchInfo";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import "./App.css";
import {Navbar} from './Components/Navbar/Navbar'

function App() {
  useEffect(() => {
    <Launch />;
  });
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Launch" component={Launch} />
        <Route exact path="/Launch/:id" component={LaunchInfo} /> 
        <Route
          path="*"
          component={() => {
            <h2>Page Not found</h2>;
          }}
        />
      </Switch>
    </Router>
  );
}

export default App;
