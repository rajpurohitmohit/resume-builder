import mongoose from "mongoose";
const connectDB = async () => {
    try {
        const mongoUrl = process.env.MONGODB_URL;
        if (!mongoUrl) {
            throw new Error("MONGODB_URL is not defined in environment variables");
        }
        const connect = await mongoose.connect(mongoUrl);
        console.log("Database Connected:", connect.connection.host, connect.connection.name);
    }
    catch (err) {
        console.log(err);
    }
};
export default connectDB;
//# sourceMappingURL=db.js.map