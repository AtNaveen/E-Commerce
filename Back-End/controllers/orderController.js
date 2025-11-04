import orderModel from "../models/orderModel.js";
import userModel from "../models/userModel.js";
import Stripe from "stripe";


const currency = "inr";
const deliveryCharge = 10;

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);


const placeOrders = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, amount, address } = req.body;

    const newOrder = new orderModel({
      userId,
      items,
      amount,
      address,
      paymentMethod: "COD",
      payment: false,
      date: Date.now(),
    });

    await newOrder.save();
    await userModel.findByIdAndUpdate(userId, { cartData: {} });

    res.json({ status: 200, msg: "Order Placed" });
  } catch (error) {
    console.log(error);
    res.json({ status: 404, msg: error.message });
  }
};

const placeOrdersStripe = async (req, res) => {
  try {
    const userId = req.userId;
    const { items, amount, address } = req.body;
    const { origin } = req.headers;

    const orderData = {
      userId,
      items,
      amount,
      address,
      paymentMethod: "Stripe",
      payment: false,
      date: Date.now(),
    };

    const newOrder = new orderModel(orderData);
    await newOrder.save();

    const line_items = items.map((item) => ({
      price_data: {
        currency: currency,
        product_data: {
          name: item.name,
        },
        unit_amount: item.price * 100,
      },
      quantity: item.quantity,
    }));

    line_items.push({
      price_data: {
        currency: currency,
        product_data: {
          name: "Delivery Charges",
        },
        unit_amount: deliveryCharge * 100,
      },
      quantity: 1,
    });

    const session = await stripe.checkout.sessions.create({
      success_url: `${origin}/verify?success=true&orderId=${newOrder._id}`,
      cancel_url: `${origin}/verify?success=false&orderId=${newOrder._id}`,
      line_items,
      mode: "payment",
    });

    res.json({ status: 200, session_url: session.url });
  } catch (error) {
    console.log(error);
    res.json({ status: 504, msg: error.message });
  }
};


const verifyStripe = async (req, res) => {
  const { orderId, success } = req.body;
  const userId = req.userId;

  try {
    if (success === "true") {
      await orderModel.findByIdAndUpdate(orderId, { payment: true });
      await userModel.findByIdAndUpdate(userId, { cartData: {} });
      res.json({ success: true });
    } else {
      await orderModel.findByIdAndDelete(orderId);
      res.json({ status: false });
    }
  } catch (error) {
    console.log(error);
    res.json({ status: 504, message: error.message });
  }
};

const allOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({});
    res.json({ status: 200, orders });
  } catch (e) {
    console.log(e);
    res.json({ status: 404, message: e.message });
  }
};


const userOrders = async (req, res) => {
  try {
    const userId = req.userId; 
    const orders = await orderModel.find({ userId });
    res.json({ status: 200, orders });
  } catch (e) {
    console.log(e);
    res.json({ status: 404, message: e.message });
  }
};

const updateStatus = async (req, res) => {
  try {
    const { orderId, status } = req.body;
    await orderModel.findByIdAndUpdate(orderId, { status });
    res.json({ status: 200, msg: "Status Updated" });
  } catch (e) {
    console.log(e);
    res.json({ status: 404, message: e.message });
  }
};

export { placeOrders, placeOrdersStripe, verifyStripe, allOrders, updateStatus, userOrders };
