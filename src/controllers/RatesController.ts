import { RequestHandler } from "express";
import { ratesModel } from "../models/Rates";

//Get the rates given a weight
export const getCarrierRates: RequestHandler = async (req, res) => {
  const { weight } = req.query;
  if (!weight) {
    res.status(400).send("Missing weight");
    return;
  }
  const weightNumber = parseFloat(weight as string);
  if (isNaN(weightNumber)) {
    res.status(400).send("Invalid weight");
    return;
  }
  const rates = await ratesModel.findOne({ weight: weightNumber });
  if (!rates) {
    res.status(404).send("No rates found");
    return;
  }
  res.status(200).send(rates);
};

//Create a new rate
export const createCarrierRates: RequestHandler = async (req, res) => {
  const { weight } = req.body;
  if (!weight) {
    res.status(400).send("Missing weight or price");
    return;
  }
  const weightNumber = parseFloat(weight as string);
  if (isNaN(weightNumber)) {
    res.status(400).send("Invalid weight");
    return;
  }
  const newRate = new ratesModel(req.body);
  await newRate.save();
  res.status(201).json(newRate);
};
