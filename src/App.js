import React from "react";
import UI from "./UI";
import Barchart from "./Data/Barchart";
import Linechart from "./Data/Linechart";
import Hooks from "./Hooks";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={UI} />
          <Route path="/barchart" exact component={Barchart} />
          <Route path="/linechart" exact component={Linechart} />
          <Route path="/Hooks" exact component={Hooks} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
