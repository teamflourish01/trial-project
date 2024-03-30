import mongoose from "mongoose";

const carSchema = new mongoose.Schema({
  brand: { type: String, require: true },
  carname: { type: String, require: true },
  fuel: { type: String, require: true },
  modelyear: { type: Number, require: true },
  price: { type: Number, require: true },
  image: { type: String },
});

const Cardetail = new mongoose.model("Cardetail", carSchema);

export default Cardetail;
