import Order from "../models/order.model.js"
import Service from "../models/service.model.js"
import createError from "../utils/createError.js"

export const createOrder = async (req, res, next) => {
    try {
        const service = await Service.findById(req.params.serviceId);

        const newOrder = new Order({
            serviceId: service._id,
            image: service.images[0],
            title: service.title,
            buyerId: req.userId,
            sellerId: service.userId,
            price: service.price,
            payment_intent: "temporary"
        });

        await newOrder.save();
        res.status(201).send({ message: "Order created successfully" });
    } catch (error) {
        next(error)
    }
}

export const getOrders = async (req, res, next) => {
    try {

    } catch (error) {
        next(error)
    }
}