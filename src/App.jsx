import { useState } from "react";
import Physio from "./pages/Physio";
import Operations from "./pages/Operations";
import Patient from "./pages/Patient";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [physios, setPhysios] = useState([
    { id: 1, name: "Physio 1" },
    { id: 2, name: "Physio 2" },
    // ... other physios ...
  ]);

  const [availableSlots, setAvailableSlots] = useState([
    { id: 1, day: "Monday", time: "5:30 AM" },
    // ... other available slots ...
  ]);

  const handleAvailabilitySelect = (selectedDate, selectedTime) => {
    // Update the available slots based on the selected date and time
    setAvailableSlots([
      ...availableSlots,
      { id: Date.now(), day: selectedDate, time: selectedTime },
    ]);
  };

  return (
    <div>
      <Router>
        <Routes>
          <Route
            exact
            path="/physio"
            element={<Physio onAvailabilitySelect={handleAvailabilitySelect} />}
          />
          <Route
            exact
            path="/operations"
            element={<Operations physios={physios} />}
          />
          <Route exact path="/patient" element={<Patient />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
