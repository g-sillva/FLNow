import mongoose from 'mongoose';
const { Schema } = mongoose;

const ConversationSchema = new Schema({
    conversationId: {
        type: String,
        required: true,
        unique: true
    },
    sellerId: {
        type: String,
        required: true
    },
    buyerId: {
        type: String,
        required: true
    },
    readBySeller: {
        type: Boolean,
        default: false,
    },
    readByBuyer: {
        type: Boolean,
        default: false,
    },
    lastMessage: {
        type: String,
        required: false
    }
}, {
    timestamps: true
});

export default mongoose.model("Conversation", ConversationSchema);