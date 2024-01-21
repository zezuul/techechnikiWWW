import mongoose from "mongoose";

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`mongodb connected`);
    } catch (error) {
        console.error(`OOPS ${error.message}`);
        process.exit(1);
    }
}

export default connectDB;