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
      <div className="labels">
      <i class="fa fa-envelope" style={{paddingRight:"5px"}}></i>
        <label>Email </label>
        <input type="email" style={{marginLeft:"10px"}} placeholder="Enter your email" />
      <i class="fa fa-envelope" style={{paddingRight:"5px"}}></i>
        
        <label style={{marginLeft:"10px"}}>Phone  </label>
        <input type="number" style={{marginLeft:"10px"}} placeholder="Enter your phone number" />
      </div>
      <div>
      <i icon="fa fa-location" />
        <select>
          <option>Gujranwala</option>
          <option>Lahore</option>
          <option>Karachi</option>
          <option>Faisalabad</option>
          <option>Islambabd</option>
          <option>Multan</option>
          <option>Sarghoda</option>
        </select>
      </div>
      <button>login</button>
    </form>
  );
};
export default Form;
