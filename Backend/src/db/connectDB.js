import mongoose from 'mongoose';

const connectDB = async () => {
	try {
		console.log('Connecting to MongoDB');
		console.log(process.env.MONGODB_URI);
		const connectionInstance = await mongoose.connect(
			`${process.env.MONGODB_URI}`
		);
		console.log(
			'\n Monogo DB connected!! DB Host:',
			connectionInstance.connection.host
		);
	} catch (error) {
		console.log('MongoDB connection error', error);
		process.exit(1);
	}
};
export default connectDB;
