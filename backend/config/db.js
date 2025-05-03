import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(` MongoDB Connected`);
  } catch (error) {
    console.error(` MongoDB Error: ${error.message}`);
    process.exit(1); // Exit the app on failure
  }
};

export default connectDB;