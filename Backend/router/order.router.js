import cors from "cors"
import express from 'express';
import {getItems} from '../Controllers/order.controllers.js';

const orderRouter = express.Router()
orderRouter.use(cors());

// orderRouter.post('/', addItem)
orderRouter.get('/:id', getItems)

export default orderRouter