import cors from "cors";
import express from 'express';

import { addItem, updateItem,deleteItem,getItems, deleteAllCart} from '../Controllers/cart.controllers.js';

const cartRouter = express.Router()
cartRouter.use(cors());

cartRouter.post('/', addItem)
cartRouter.get('/', getItems)
cartRouter.patch('/:id', updateItem)
cartRouter.delete('/:id', deleteItem)
cartRouter.delete('/deleteall/:id', deleteAllCart)

export default cartRouter