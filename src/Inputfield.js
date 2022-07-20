import React from "react";

const Input_Fields = (props) => {
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
  export default Input_Fields;