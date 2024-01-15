import React, { useState } from "react";
import "./Project.css";


const UserOne = () => {
  const [data, Setdata] = useState("1");
  const [data1, Setdata1] = useState("1");
  const [sum, Setsum] = useState("0");

  function getNumber() {
    var random = Math.floor(Math.random() * 6) + 1;
    Setdata(random);
  }

  function getNum() {
    var random1 = Math.floor(Math.random() * 6) + 1;
    Setdata1(random1);
  }
  function getsum() {
    const sum = data + data1;

    Setsum(sum);
  }

  return (
    <>
      <div className="whole">
        <div className="container">
          <h1>{data}</h1>
          <button onClick={getNumber}>Get No</button>
        </div>
        <div className="plus"> +</div>
        <div className="contain">
          <h1>{data1}</h1>
          <button onClick={getNum}>Get No</button>
        </div>
        <div className="equal"> =</div>

        <div className="contain">
          <h1>{sum}</h1>

          <button onClick={getsum}>Get Sum</button>
        </div>
        <h1>
          {sum % 2 === 0 ? "We can go for next Round" : "sorry lets more try"}
        </h1>
      </div>

    </>
  );
};

export default UserOne;
