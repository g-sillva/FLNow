import mongoose from 'mongoose';
const { Schema } = mongoose;

const OrderSchema = new Schema({
    buyerId: {
        type: String,
        required: true,
    },
    serviceId: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    isCompleted: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: true
});

export default mongoose.model("Order", OrderSchema);