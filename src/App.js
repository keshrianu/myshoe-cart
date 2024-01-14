import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./Product/About";
import Cart from "./Product/Cart";
import HelpCenter from "./Product/HelpCenter";
import Nav from "./Product/Nav";
import Profile from "./Product/Profile";
import Product from "./Product/Product";
import Page404 from "./Product/Page404";
import Login from "./Product/Login";

function App() {
  const [searchItem, setSearchItem] = useState("");
  const [items, setItems] = useState(0);

  const user = {
    name: "Anurag keshri",
    role: "Web Developer",
    email: "keshrianurag777@gmail.com",
    location: "Ranchi, Jharkhand, India",
    joined: "January 1, 2022",
  };

  return (
    <>
      <BrowserRouter>
        <Nav setSearchItem={setSearchItem} searchItem={searchItem} items={items} />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/product" element={<Product searchItem={searchItem} items={items} setItems={setItems} />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/wish" element={<About />} />
          <Route path="/profile" element={<Profile user={user} />} />
          <Route path="/cart" element={<Cart items={items} />} />
          <Route path="/*" element={<Page404 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;