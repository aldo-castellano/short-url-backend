import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`Mongodb conectado en: ${url}`);
  } catch (error) {
    console.log(`error: ${error.messahe}`);
    process.exit(1);
  }
};
export default connectDB;
