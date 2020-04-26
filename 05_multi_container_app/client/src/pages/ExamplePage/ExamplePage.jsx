import "./ExamplePage.css";
import React from "react";
import { Link } from "react-router-dom";

const ExamplePage = () => {
  return (
    <div>
      <h1>Example Page</h1>
      <div>
        <Link to="/">Back to Home Page</Link>
      </div>
    </div>
  );
};

export default ExamplePage;
