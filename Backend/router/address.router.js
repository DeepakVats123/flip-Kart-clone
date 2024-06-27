import express from 'express'
import {postaddress,getaddress,deleteAdress} from '../Controllers/address.controller.js';

const addressRouter = express.Router();

addressRouter.post('/create/:id', postaddress)
addressRouter.get('/:id', getaddress)
addressRouter.delete('/:id', deleteAdress)

export default addressRouter