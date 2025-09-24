import mongoose from "mongoose";

const connectDB = async () => {
    try {
       // await mongoose.connect(process.env.MONGO_URI);
        await mongoose.connect('mongodb+srv://JOBPORTAL:JOBPORTAL@cluster0.a2dvbx1.mongodb.net/');
        console.log('mongodb connected successfully');
    } catch (error) {
        console.log(error);
    }
}
export default connectDB;