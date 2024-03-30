import mongoose from "mongoose";

export const connectionDB = async () => {
  try {
    await mongoose.connect(process.env.URI);
    console.log("DB is Connected");
  } catch (error) {
    console.log(error, "DB is Not Connected");
  }
};
