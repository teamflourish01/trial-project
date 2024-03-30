import Cardetail from "../Model/Car.js";

// Car Data Add Api
export const carAdd = async (req, res) => {
  try {
    const cardetail = await Cardetail(req.body);
    const doc=await cardetail.save();
    res.status(200).json({msg: "Car Details is Add",doc });
  } catch (error) {
    res.status(500).json(error);
  }
};

// Fetch Car All Data Api
export const fetchCarData = async (req, res) => {
  try {
    const cardetail = await Cardetail.find({});
    res.status(200).json({msg:"Car Data Fetch",cardetail});
  } catch (error) {
    res.status(500).json(error);
  }
};
