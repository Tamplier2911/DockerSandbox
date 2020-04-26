import "./IndexVisited.css";
import React, { useState, useEffect } from "react";
import axios from "axios";

const IndexVisited = () => {
  const fetchValues = async () => {
    const values = await axios({ method: "GET", url: "/api/values/current" });
    setInputValues({ ...inputValues, values: values.data });
  };

  const fetchIndexes = async () => {
    const indexes = await axios({ method: "GET", url: "/api/values/all" });
    setInputValues({ ...inputValues, seenIndexes: indexes.data });
  };

  useEffect(() => {
    fetchValues();
    fetchIndexes();
  }, []);

  const [inputValues, setInputValues] = useState({
    seenIndexes: [{ number: 1 }, { number: 2 }, { number: 3 }],
    values: { 1: 1, 2: 1, 3: 2 },
  });
  const { seenIndexes, values } = inputValues;

  return (
    <div>
      <div>
        <h4>Indexes:</h4>
        <div>
          <div>
            {seenIndexes.map(({ number }, i) => (
              <span key={i}>{number + ","}</span>
            ))}
          </div>
        </div>
      </div>
      <div>
        <h4>Calculated Values:</h4>
        <div>
          {Object.keys(values).map((key, i) => (
            <div key={i}>
              For index: {key} Fib equals: {values[key]}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default IndexVisited;
