import React from "react";
import "./TicTac.css";
const Square = (props) => {
  return (
    <>
      <div
        onClick={props.onClick}
        className="square"
        style={{
          border: "1px solid",
          height: "100px",
          width: "80%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h5>{props.value}</h5>
      </div>
    </>
  );
};

export default Square;
