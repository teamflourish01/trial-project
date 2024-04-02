import React from "react";
import Navbar from "./Components/Navbar";
import CardetailForm from "./Components/Cardetail-Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./Components/About-Us";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/caradd" element={<CardetailForm />} />
          <Route path="/aboutus" element={<AboutUs />} />
        </Routes>
        
      </BrowserRouter>
    </>
  );
};

export default App;
