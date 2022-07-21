import React from "react";

const Inputfield = (props) => {
  return (
    <div className="input-field">
      <label>{props.type.label}</label>
      <input
        type={props.type.type}
        placeholder={"Enter " + props.type.label}
      ></input>
    </div>
  );
};
export default Inputfield;
