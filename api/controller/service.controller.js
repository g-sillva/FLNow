import createError from "../utils/createError.js";
import Service from "../models/service.model.js";

export const getServices = async (req, res, next) => {
    try {
        const services = await Service.find();
        res.status(200).json(services);
    } catch (err) {
        next(err);
    }
}

export const getService = async (req, res, next) => {
    try {
        const service = await Service.findById(req.params.id);
        if (!service) return next(createError(404, "Service not found."));
        res.status(200).json(service);
    } catch (err) {
        next(err);
    }
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
    try {
        const service = await Service.findById(req.params.id);

        if (!service) return next(createError(404, "Service not found."));

        if (service.userId !== req.userId) {
            return next(createError(403, "You can only delete your own services."));
        }

        await Service.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Service has been deleted.', code: 200 }); 
    } catch (err) {
        next(err);
    }
}
