import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const dbConnect = async () => {
	try {
		await mongoose.connect(process.env.DB_URL, {});
		console.log("Connected to MongoDB");
		return true;
	} catch (error) {
		console.error(`Unable to connect to MongoDB: ${error.message}`);
		return false;
	}
};

export default dbConnect;
