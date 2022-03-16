import {RequestHandler} from "express";
import {calculateRates} from "./Correos";

export const computeRates: RequestHandler = async (req, res) => {
    try {
        let from = req.query.getKey("from");
        let to = req.query.getKey("to");
        let weight = req.query.getKey("weight");

        if (from == null) {
            from = "Oviedo";
        }
        if (to == null) {
            to = "Oviedo";
        }
        if (weight == null) {
            weight = 1000;
        }

        const rate = await calculateRates(from, to, weight);
        res = rate;
        return res.json();
    } catch (error) {
        res = error;
        return res.json();
    }
};
