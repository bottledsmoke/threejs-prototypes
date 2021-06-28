import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Prototypes from "Pages/Prototypes";

function App() {
  return (
    <div className="App">
      <Router>
          <Switch>
            <Route exact path={"/"}>
              <Prototypes />
            </Route>
            <Route path={"/prototypes"}>
              <Prototypes></Prototypes>
            </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
