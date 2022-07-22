import React from "react";
import Form from "./Form";
import sideimg from "./side-image.jpg";

const Card = () => {
  return (
    <div className="card">
      <img src={sideimg} alt="" className="image" />
      <Form />
    </div>
  );
};
export default Card;
