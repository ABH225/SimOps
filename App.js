import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Planner from "./pages/Planner";
import Handover from "./pages/Handover";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/planner">
          <Planner />
        </Route>
        <Route path="/handover">
          <Handover />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
