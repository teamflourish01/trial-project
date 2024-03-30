import Cardetail from "../Model/Car.js";

// Car Data Add Api
export const carAdd = async (req, res) => {
  try {
    const cardetail = await Cardetail(req.body);
    await cardetail.save();
    res.status(200).json({ msg: "Car Details is Add" });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Fetch Car All Data Api
export const fetchCarData = async (req, res) => {
  try {
    const cardetail = await Cardetail.find({});
    res.status(200).json(cardetail);
  } catch (error) {
    res.status(500).json(error);
  }
};
