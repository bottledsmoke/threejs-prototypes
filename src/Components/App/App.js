import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Prototypes from "Pages/Prototypes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path={"/"} element={<Prototypes />}></Route>
          <Route path={"prototypes/*"} element={<Prototypes />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
