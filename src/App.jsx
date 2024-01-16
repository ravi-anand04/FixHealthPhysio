import { useState } from "react";
import Physio from "./pages/Physio";
import Operations from "./pages/Operations";
import Patient from "./pages/Patient";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { employees } from "./constant";

function App() {
  const [physios, setPhysios] = useState(employees);

  const updatePhysios = (updatedPhysios) => {
    console.log("Mil gaya");
    setPhysios(updatedPhysios);
  };

  console.log("New Timings", physios);

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/physio"
            element={<Physio physios={physios} updatePhysios={updatePhysios} />}
          />
          <Route
            exact
            path="/operations"
            element={<Operations physios={physios} />}
          />
          <Route
            exact
            path="/patient"
            element={<Patient physios={physios} />}
          />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
