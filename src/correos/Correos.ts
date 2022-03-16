import {Rates} from "../Rates";

export const calculateRates = (from, to, weight) => {
    let rates : Rates;
    rates = {price : 0};

    if (weight < 20)
        rates.price = 4.15;
    else if (20 < weight && weight < 50)
        rates.price = 4.25;
    else if (50 < weight && weight < 100)
        rates.price = 4.7;
    else if (100 < weight && weight < 500)
        rates.price = 5.95;
    else if (500 < weight && weight < 1000)
        rates.price = 8.6;
    else if (1000 < weight && weight < 2000)
        rates.price = 9.05;
    else
        return {error: "Weight not supported!"}

    return rates;
};