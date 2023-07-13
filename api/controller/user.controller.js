import User from "../models/user.model.js";

export const deleteUser = async (req, res) => {
    const user = await User.findOne({ _id: req.params.id, isDeleted: false });

    if (!user) return res.status(404).send({ message: 'User not found.'});

    if (!user._id.equals(req.userId)) {
        return res.status(403).send({ message: 'You can only delete your own account.'});
    }
    await User.findByIdAndUpdate(req.params.id, { isDeleted: true, deletedAt: new Date() });
    res.status(200).send({ message: 'User deleted.' });
};