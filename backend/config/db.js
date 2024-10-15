/*import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI; // Make sure this is the correct variable name
        if (!uri) {
            throw new Error('MONGO_URI is not defined');
        }
        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};

export { connectDB };
*/

import mongoose from 'mongoose';
const connectDB = async () => {
    try {
        const uri = process.env.MONGO_URI; // Make sure this is the correct variable name
        if (!uri) {
            throw new Error('MONGO_URI is not defined');
        }
        // Remove the deprecated options from here
        await mongoose.connect(uri);
        console.log('MongoDB connected');
    } catch (error) {
        console.error('MongoDB connection error:', error.message);
        process.exit(1);
    }
};
export { connectDB };
