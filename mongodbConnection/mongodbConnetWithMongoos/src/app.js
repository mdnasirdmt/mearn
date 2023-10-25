// Using Node.js `require()`
const mongoose = require('mongoose');
const collection1 = 'posts'
// Using ES6 imports
// import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const db3 = await mongoose.connect('mongodb://127.0.0.1:27017/blog', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
        
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to connect to the database
connectDB();

