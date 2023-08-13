import mongoose from 'mongoose';
const { Schema } = mongoose;

const ServiceSchema = new Schema({
    userId: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    shortTitle: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    shortDescription: {
        type: String,
        required: false,
    },
    totalStars: {
        type: Number,
        default: 0
    }, 
    starNumber: {
        type: Number,
        default: 0,
    }, 
    category: {
        type: String,
        required: true,
    }, 
    price: {
        type: Number,
        required: true,
    }, 
    images: {
        type: [String],
        required: false,
    },
    deliveryTime: {
        type: Number,
        required: true,
    },
    revisionAmount: {
        type: Number,
        required: true
    },
    features: {
        type: [String],
        required: false
    },
    sales: {
        type: Number,
        default: 0
    }
}, {
    timestamps: true
});

export default mongoose.model("Service", ServiceSchema);