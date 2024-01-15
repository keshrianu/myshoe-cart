import React, { useState } from "react";

const UserTwo = () => {
  const [data, Setdata] = useState("1");

  function getNum() {
    let random = Math.floor(Math.random() * 6) + 1;
    Setdata(random);
  }

  return (
    <>
      <div className="contain">
        <h1>{data}</h1>
        <button onClick={getNum}>Get No</button>
      </div>
    </>
  );
};

export default UserTwo;
