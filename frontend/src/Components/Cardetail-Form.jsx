import React, { useState } from "react";

const CardetailForm = () => {
  const [car, setCar] = useState({
    brand: "",
    carname: "",
    fuel: "",
    modelyear: "",
    price: "",
  });

  const handlInput = (e) => {
    let { name, value } = e.target;

    setCar({ ...car, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:2222/car/add", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(car),
      });
      if (response.ok) {
        alert("Car Data is Successfuly Add");
        setCar({ brand: "", carname: "", fuel: "", modelyear: "", price: "" });
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="container-fluid py-5 h-75">
        <div className="row justify-content-center align-items-center h-100">
          <div className="col-lg-6">
            <div className="wow fadeInUp" data-wow-delay="0.2s">
              <form onSubmit={handleSubmit}>
                <div className="row g-3">
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="brand"
                        name="brand"
                        value={car.brand}
                        onChange={handlInput}
                        placeholder="Car Brand Name"
                        required
                      />
                      <label for="brand">Car Brand Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="carname"
                        name="carname"
                        value={car.carname}
                        onChange={handlInput}
                        placeholder="Car Name"
                        required
                      />
                      <label for="carname">Car Name</label>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="text"
                        className="form-control"
                        id="fuel"
                        name="fuel"
                        value={car.fuel}
                        onChange={handlInput}
                        placeholder="fuel"
                        required
                      />
                      <label for="fuel">Fuel Type Add</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="modelyear"
                        name="modelyear"
                        value={car.modelyear}
                        onChange={handlInput}
                        placeholder="model"
                        required
                      />
                      <label for="modelyear">Car Model year</label>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-floating">
                      <input
                        type="number"
                        className="form-control"
                        id="price"
                        name="price"
                        value={car.price}
                        onChange={handlInput}
                        placeholder="Price"
                        required
                      />
                      <label for="price">Car Price</label>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="form-floating">
                      <input
                        type="file"
                        className="form-control"
                        id="images"
                        name="images"
                      />
                      <label for="images">images</label>
                    </div>
                  </div>

                  <div className="col-12">
                    <button
                      className="btn btn-success w-100  py-3"
                      type="submit"
                    >
                      Add Car Data
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CardetailForm;
