import User from "../models/user.model.js";
import createError from "../utils/createError.js";

export const deleteUser = async (req, res, next) => {
    const user = await User.findOne({ _id: req.params.id, isDeleted: false });

    if (!user) return next(createError(404, 'User not found.'));

    if (!user._id.equals(req.userId)) {
        return next(createError(403, 'You can only delete your own account.'));
    }
    await User.findByIdAndUpdate(req.params.id, { isDeleted: true, deletedAt: new Date() });
    res.status(200).send({ message: 'User deleted.' });
};