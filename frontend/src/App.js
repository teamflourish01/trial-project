
import React from 'react'
import Navbar from '../src/Components/Navbar'
import Slidess from './Components/Slidess'
// import Slidess from './Components/Slidess'
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
      </BrowserRouter>
    </>
  );
};


  
export default App;
