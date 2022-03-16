import express, { Request, Response, Router } from 'express';
import {computeRates} from './CorreosController';

const api:Router = express.Router()

api.get('/correos/computeRates/', computeRates);

export default api