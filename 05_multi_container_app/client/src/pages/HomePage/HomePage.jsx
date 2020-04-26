import "./HomePage.css";
import React from "react";
import { Link } from "react-router-dom";

// component
import Holder from "../../components/Holder/Holder";

const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <Holder />
      <div style={{ marginTop: "10px" }}>
        <Link to="/example">Visit Example Page</Link>
      </div>
    </div>
  );
};

export default HomePage;
