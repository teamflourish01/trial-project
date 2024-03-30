import express from "express";
import { carAdd, fetchCarData } from "../Controller/Car.js";

export const carRouter = express.Router();

carRouter.post("/add", carAdd).get("/", fetchCarData);
