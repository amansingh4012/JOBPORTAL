import mongoose from "mongoose";

const connectToDB = async () => {
    try {

        await mongoose.connect(process.env.MONGO_URI);

        console.log(" DATABASE connected")
        
    } catch (error) {
        console.log(" DATABASE connection failed");
        console.error(error);
        
    }

}

export default connectToDB;