import User from "../models/user.model.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send("User has been created!");

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const login = (req, res) => {
    // TODO
}

export const logout = (req, res) => {
    // TODO
}