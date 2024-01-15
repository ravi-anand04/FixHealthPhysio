import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Hey</h1>
      <h1>Operations - /operations</h1>
      <h1>Patient - /patient</h1>
      <h1>Physio - /physio</h1>
      <Link to="/physio">Hi</Link>
    </div>
  );
};

export default Home;
