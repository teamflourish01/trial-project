import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectionDB } from "./Database/Db.js";
import { carRouter } from "./Router/Car.js";
const app = express();
dotenv.config();

// Middaleware
app.use(cors({ origin: true }));
app.use(express.json());

// all Routing path
app.use("/car", carRouter);

// Port And DataBase Connection
connectionDB().then(() => {
  app.listen(process.env.PORT, () => {
    console.log("http://localhost:2222");
  });
});
