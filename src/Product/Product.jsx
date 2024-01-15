import React, { useEffect, useState } from "react";
import "./Product.css";
import { details, sideimg } from "./Data";


const Product = ({ searchItem, items, setItems }) => {
  const [priceRange, setPriceRange] = useState([10, 80]);
  const [selectedBrands, setSelectedBrands] = useState([]);
  const [imageIndex, setImageIndex] = useState(0);
  const [newlist, setnewlist] = useState([...details]);
 

  let filteredData = details.filter((curItem) => {
    if (searchItem === "") {
      return curItem;
    } else if (
      curItem.Product_brand.toLowerCase().includes(searchItem.toLowerCase())
    ) {
      return curItem;
    }
    return null; 
  });

  useEffect(() => {
    setnewlist(filteredData);

  }, [searchItem]);

 

  const handleRangeChange = (event) => {
    const newValue = parseInt(event.target.value, 10);
    setPriceRange([priceRange[0], newValue]);
  };

  const handleCheckboxChange = (event) => {
    const brand = event.target.value;
    let updatedBrands;

    if (event.target.checked) {
      updatedBrands = [...selectedBrands, brand];
    } else {
      updatedBrands = selectedBrands.filter(
        (selectbrand) => selectbrand !== brand
      );
    }

    setSelectedBrands(updatedBrands);
    
  };

  const filteredDetails = details.filter(
    (product) =>
      product.Price >= priceRange[0] &&
      product.Price <= priceRange[1] &&
      (selectedBrands.length === 0 ||
        selectedBrands.includes(product.Product_brand))
  );

  function added() {
    setItems(items + 1);
    // alert(`${items} Items added Successfully`);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setImageIndex((index) => (index + 1) % sideimg.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [imageIndex]);

  return (
    <>
     
      <div className="main">
        <div className="side">
          <div className="sideimg">
            {sideimg[imageIndex].img}
            {sideimg[imageIndex].Product_brand}
          </div>

          <h1>Filter of Product</h1>

          <label>
            Price Range: Rs{priceRange[0]} - Rs{priceRange[1]}
          </label>
          <br />
          <input
            type="range"
            min={10}
            max={80}
            step={1}
            onChange={handleRangeChange}
          />
          <br />

          <div className="checkbox">
            <input
              type="checkbox"
              name="Nike"
              value="Nike"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Nike">Nike</label> <br />
            <input
              type="checkbox"
              name="Adidas"
              value="Adidas"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Adidas">Adidas</label> <br />
            <input
              type="checkbox"
              name="Reebok"
              value="Reebok"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Reebok">Reebok</label>
            <br />
            <input
              type="checkbox"
              name="Puma"
              value="Puma"
              onChange={handleCheckboxChange}
            />
            <label htmlFor="Puma">Puma</label>
            <br />
          </div>

          <table className="table">
            <thead>
              <tr className="heading">
                <th>Product</th>
                <th>Brand</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {filteredDetails.map((product, index) => (
                <tr key={index}>
                  <td>{product.Product}</td>
                  <td>{product.Product_brand}</td>
                  <td>Rs{product.Price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="img">
       
          {newlist.map((product, index) => (
            <div key={index}>
              <p>{product.img}</p>
              <p>{product.Product}</p>
              <p>{product.Product_brand}</p>
              <p>Rs {product.Price} /-</p>
              <button className="addcart" onClick={added}>
                Add To Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Product;
