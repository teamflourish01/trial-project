import React from "react";
import Navbar from "../src/Components/Navbar";
import Slidess from './Components/Slidess'
import CardetailForm from "./Components/Cardetail-Form";
import {  Route, Routes } from "react-router-dom";

import AboutUs from "./Components/About-Us";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Slidess />} />

        <Route path="/caradd" element={<CardetailForm />} />
        <Route path="/aboutus" element={<AboutUs />} />
      </Routes>
    </>
  );
};

export default App;
