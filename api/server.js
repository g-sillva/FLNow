import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import userRoute from './routes/user.route.js';
import serviceRoute from './routes/service.route.js';
import reviewRoute from './routes/review.route.js';
import orderRoute from './routes/order.route.js';
import messageRoute from './routes/message.route.js';
import conversationRoute from './routes/conversation.route.js';

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

try {
    mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to mongoDB');
} catch (error) {
    console.log(error);
}

app.use('/api/users', userRoute);
app.use('/api/services', serviceRoute);
app.use('/api/orders', orderRoute);
app.use('/api/conversations', conversationRoute);
app.use('/api/messages', messageRoute);
app.use('/api/reviews', reviewRoute);

app.listen(5432, () => {
    console.log('Backend server is running!');
})