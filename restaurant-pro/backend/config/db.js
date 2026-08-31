import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/grand_restaurant');
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`MongoDB Connection Warning/Error: ${error.message}`);
    console.log('App will operate in fallback memory/mock database mode if MongoDB server is offline.');
  }
};
