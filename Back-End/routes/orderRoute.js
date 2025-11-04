import express from 'express'
import { placeOrders,placeOrdersStripe,verifyStripe,userOrders,updateStatus,allOrders } from '../controllers/orderController.js'
import adminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRoute = express.Router()

orderRoute.post('/list', adminAuth, allOrders)
orderRoute.post('/status', adminAuth, updateStatus)

orderRoute.post('/place', authUser,placeOrders)
orderRoute.post('/stripe', authUser, placeOrdersStripe)


orderRoute.post('/userorders', authUser, userOrders)

orderRoute.post('/verifyStripe',authUser,verifyStripe)


export default orderRoute;