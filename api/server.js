const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const app = express();
dotenv.config();
mongoose.set('strictQuery', true);

try {
    mongoose.connect(process.env.MONGO_URL);
    console.log('Connected to mongoDB');
} catch (error) {
    console.log(error);
}

app.listen(5432, () => {
    console.log('Backend server is running!');
})