import mongoose from 'mongoose'
import dotenv from 'dotenv'

dotenv.config();


const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

// mongodb+srv://bkabhi:<password>@cluster0.obucu9c.mongodb.net/?retryWrites=true&w=majority
const connection = async () => {
    await mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.obucu9c.mongodb.net/flipkart?retryWrites=true&w=majority`);
    // await mongoose.connect('mongodb://127.0.0.1:27017/address')
}

export default connection

