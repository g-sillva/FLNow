import User from "../models/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import createError from "../utils/createError.js";

export const register = async (req, res, next) => {
    try {
        const hash = bcrypt.hashSync(req.body.password, 5);
        const newUser = new User({
            ...req.body,
            password: hash,
        });

        await newUser.save();
        res.status(201).send(newUser);

    } catch (err) {
        next(err);
    }
}

export const login = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email, isDeleted: false });
        if (!user) {
            return next(createError(404, 'User not found.'));
        }

        const isPassCorrect = bcrypt.compareSync(req.body.password, user.password);
        if (!isPassCorrect) {
            return next(createError(400, 'Wrong password.'));
        }

        const token = jwt.sign({
            id: user._id,
            isSeller: user.isSeller
        }, process.env.JWT_KEY);

        const { ...info } = user;
        res.cookie('accessToken', token, { httpOnly: true }).status(200).send(info._doc);

    } catch (err) {
        return next(err)
    }
}

export const logout = (req, res) => {
    res.clearCookie('accessToken', {
        sameSite: 'none',
        secure: true
    }).status(200).send({ message: 'User has been logged out.', code: 200 });
}