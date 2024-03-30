import React from "react";
import Navbar from "./Components/Navbar";
import CardetailForm from "./Components/Cardetail-Form";
import { BrowserRouter, Route, Routes } from "react-router-dom";
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/caradd" element={<CardetailForm />} />
        </Routes>
        <CardetailForm />
      </BrowserRouter>
    </>
  );
};

export default App;
