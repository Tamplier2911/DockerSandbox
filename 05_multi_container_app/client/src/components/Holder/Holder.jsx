import "./Holder.css";
import React from "react";

// components
import IndexForm from "../IndexForm/IndexForm";
import IndexVisited from "../IndexVisited/IndexVisited";

const Holder = () => {
  return (
    <div>
      <h4>Enter Index:</h4>
      <IndexForm />
      <IndexVisited />
    </div>
  );
};

export default Holder;
