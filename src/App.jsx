import React from "react";
import "./App.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main1st from "./components/Main/Main1st";

function App() {
  const reload = () => window.location.reload();
  return (
    <>
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            render={propsOfRouter => <Main1st {...propsOfRouter} />}
          />
          <Route exact path="/report.html" onEnter={reload} />
        </Switch>
      </Router>
      {/* <img src={logo} className="App-logo" alt="logo" /> */}
    </>
  );
}

export default App;
