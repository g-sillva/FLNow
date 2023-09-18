import Order from "../models/order.model.js"
import Service from "../models/service.model.js"
import Stripe from "stripe"

export const getOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({
            ...(req.isSeller ? { sellerId: req.userId } : { buyerId: req.userId }),
            isCompleted: true
        });

        res.status(200).send(orders);
    } catch (error) {
        next(error)
    }
}

export const confirmPayment = async (req, res, next) => {
    try {
        const order = await Order.findOneAndUpdate({ payment_intent: req.body.payment_intent }, { isCompleted: true });
        res.status(200).send(order);
    } catch (error) {
        next(error)
    }
}

export const createPaymentIntent = async (req, res, next) => {
    try {
        const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

        const service = await Service.findById(req.params.id);

        const paymentIntent = await stripe.paymentIntents.create({
            amount: service.price,
            currency: "usd",
            automatic_payment_methods: {
                enabled: true
            }
        });

        const newOrder = new Order({
            serviceId: service._id,
            image: service.images[0],
            title: service.title,
            buyerId: req.userId,
            sellerId: service.userId,
            price: service.price,
            payment_intent: paymentIntent.id
        });

        await newOrder.save();
        res.status(200).send({ client_secret: paymentIntent.client_secret });
    } catch (error) {
        next(error)
    }
}