import React from "react";
import Inputfield from "./Inputfield";
import { types } from "./types";

const Form = () => {
  return (
    <form className="form">
      <h1 style={{ textAlign: "center" }}>Sign Up</h1>
      {types.map((type) => (
        <Inputfield type={type} />
      ))}

      <div>
        <input type="checkbox" />
        <label className="remember">Remember me</label>
      </div>
      <div>
        <select>
          <option>Gujranwala</option>
          <option>Lahore</option>
          <option>Gujranwala</option>
          <option>Gujranwala</option>
          <option>Gujranwala</option>
          <option>Gujranwala</option>
          <option>Gujranwala</option>
        </select>
      </div>
      <button>login</button>
    </form>
  );
};
export default Form;
