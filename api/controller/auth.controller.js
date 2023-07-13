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

export const login = async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if (!user) return res.status(404).send({ message: 'User not found' });

        const isPassCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPassCorrect) return res.status(400).send({ message: 'Wrong password.' });

        const { ...info } = user;
        res.status(200).send(info._doc);

    } catch (err) {
        res.status(500).send({ message: err.message });
    }
}

export const logout = (req, res) => {
    // TODO
}