import jwt  from "jsonwebtoken";
import cartItemModel from "../Models/cartItem.model.js"
import orderItemModel from "../Models/orderItems.model.js";

const getItems = async(req,res) => {
    try {
        const token = req.query.token; 
        const decode = jwt.verify(token,process.env.JWT_SECRET); // verify token
        const { _id} = decode; // get user
        const cartItems = await cartItemModel.find({userId: _id}); // get cart items
        return res.status(200).send(cartItems); 
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
    
} 

const addItem = async (req, res)=> {
    const token = req.body.token; // take token from localStorage
    const decode = jwt.verify(token,process.env.JWT_SECRET); // verify token
    const { _id} = decode; // get user
    const obj = req.body;
    delete obj.token;
    obj.userId  = _id;
    console.log(obj)
    try {
        const cartItem = await cartItemModel.create(obj);
        return res.send({
            "message": "Added cart item successfully",
        });
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }

}

const updateItem = async (req, res)=> {
    try {
        const updatedCartItem = await cartItemModel.findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.send(updatedCartItem);
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
}

const deleteItem = async (req, res)=> {
    try {
        const deletedCartItem = await cartItemModel.findByIdAndDelete(req.params.id);
        res.send({
            "message": "Delete cart item successfully"
        });
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
}


const deleteAllCart = async(req, res) => {
    try {
        const data = await cartItemModel.find({userId: req.params.id});
        // console.log(data, 'data');
        await orderItemModel.insertMany(data);
        await cartItemModel.deleteMany({userId: req.params.id});
        res.send({
            "message": "Delete cart items successfully",
            data: data
        });
    } catch (error) {
        return res.status(500).send({
            status: 'error',
            error: 'Server Error'
        })
    }
}

export {getItems,deleteItem,updateItem,addItem, deleteAllCart}