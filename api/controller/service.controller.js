import createError from "../utils/createError.js";
import Service from "../models/service.model.js";

export const getServices = async (req, res, next) => {
    
}

export const getService = async (req, res, next) => {
    
}

export const createService = async (req, res, next) => {
    if (!req.isSeller) return next(createError(403, "User is not a seller."));

    const newService = new Service({
        userId: req.userId,
        ...req.body
    });

    try {
        const savedService = await newService.save();
        res.status(201).json(savedService);
    } catch (err) {
        next(err);
    }
}

export const deleteService = async (req, res, next) => {
    
}
