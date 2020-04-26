import "./IndexForm.css";
import React, { useState } from "react";
import axios from "axios";

const IndexForm = () => {
  const [inputValues, setInputValues] = useState({
    index: "",
  });

  const { index } = inputValues;

  const onInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    await axios({
      method: "POST",
      url: "/api/values",
      data: index,
    });
    setInputValues({ ...inputValues, index: "" });
  };

  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "1fr",
        gridRowGap: ".5rem",
      }}
    >
      <input
        type="text"
        name={"index"}
        value={index}
        onChange={(e) => onInputChange(e)}
      />
      <input type="submit" value="submit" />
    </form>
  );
};

export default IndexForm;
