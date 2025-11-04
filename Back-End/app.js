import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import connectDB from './config/Mongodb.js'
import connectCloudinary from './config/Cloudinary.js';
import userRouter from './routes/userRoute.js';
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js';
import orderRoute from './routes/orderRoute.js';

const app = express();
const PORT = process.env.PORT || 4000
connectDB();
connectCloudinary()

app.use(express.json())
app.use(cors())
 app.use ('/api/user',userRouter)
 app.use('/api/product',productRouter)
 app.use('/api/cart',cartRouter)
 app.use('/api/order',orderRoute)

app.get('/',(req,res)=>{
    res.send("API WORKING");
})

app.listen(PORT,()=>{
    console.log("SERVER STARTED");

})