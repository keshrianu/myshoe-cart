import React from "react";
import sideimg1 from "./Image/sideimg1.jpg";
import sideimg2 from "./Image/sideimg2.jpg";
import sideimg3 from "./Image/sideimg3.jpg";
import sideimg4 from "./Image/sideimg4.jpg";

import shoe1 from "./Image/shoe1.png";
import shoe2 from "./Image/shoe2.avif";
import shoe3 from "./Image/shoe3.png";
import shoe4 from "./Image/shoe4.png";
import shoe5 from "./Image/shoe5.jpg";
import shoe6 from "./Image/shoe6.jpg";
import shoe7 from "./Image/shoe7.jpg";
import shoe8 from "./Image/shoe8.jpg";

const details = [
  {
    Product: "shoe",
    Product_brand: "Nike",
    Price: 10,
    img: 
      <img
        src={shoe1}
        alt="Nike Shoe"
        style={{ width: "280px", height: "200px" }}
      />
    
  },
  {
    Product: "shoe",
    Product_brand: "Adidas",
    Price: 20,
    img: (
      <img
        src={shoe2}
        alt="Adidas Shoe"
        style={{ width: "280px", height: "200px" }}
      />
    ),
  },
  {
    Product: "shoe",
    Product_brand: "Reebok",
    Price: 30,
    img: (
      <img
        src={shoe3}
        alt="Reebok Shoe"
        style={{ width: "280px", height: "200px" }}
      />
    ),
  },
  {
    Product: "shoe",
    Product_brand: "Puma",
    Price: 40,
    img: (
      <img
        src={shoe3}
        alt="Puma Shoe"
        style={{ width: "280px", height: "200px" }}
      />
    ),
  },
  {
    Product: "shoe",
    Product_brand: "Nike",
    Price: 50,
    img: (
      <img
        src={shoe4}
        alt="Nike Shoe"
        style={{ width: "280px", height: "200px" }}
      />
    ),
  },
  {
    Product: "shoe",
    Product_brand: "Adidas",
    Price: 60,
    img: (
      <img
        src={shoe5}
        alt="Adidas Shoe"
        style={{ width: "280px", height: "200px" }}
      />
    ),
  },
  {
    Product: "shoe",
    Product_brand: "Reebok",
    Price: 70,
    img: (
      <img
        src={shoe6}
        alt="Reebok Shoe"
        style={{ width: "280px", height: "200px" }}
      />
    ),
  },
  {
    Product: "shoe",
    Product_brand: "Puma",
    Price: 80,
    img: (
      <img
        src={shoe7}
        alt="Puma Shoe"
        style={{ width: "280px", height: "200px" }}
      />
    ),
  },
  {
    Product: "shoe",
    Product_brand: "Puma",
    Price: 80,
    img: (
      <img
        src={shoe8}
        alt="Puma Shoe"
        style={{ width: "280px", height: "200px" }}
      />
    ),
  },
];

const sideimg = [
  {
    Product_brand: "Nike",
    img: (
      <img
        src={sideimg1}
        alt="Nike Shoe"
        style={{ width: "250px", height: "135px" }}
      />
    ),
  },
  {
    Product_brand: "Puma",
    img: (
      <img
        src={sideimg2}
        alt="Puma Shoe"
        style={{ width: "250px", height: "135px" }}
      />
    ),
  },
  {
    Product_brand: "Reebok",
    img: (
      <img
        src={sideimg3}
        alt="Reebok Shoe"
        style={{ width: "250px", height: "135px" }}
      />
    ),
  },
  {
    Product_brand: "Adidas",
    img: (
      <img
        src={sideimg4}
        alt="Adidas Shoe"
        style={{ width: "250px", height: "135px" }}
      />
    ),
  },
];

export { details, sideimg };
