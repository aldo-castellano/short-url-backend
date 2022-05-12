import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const db = await mongoose.connect(
      "mongodb+srv://admin:a2r0d1u1o2866@cluster0.y9ipz.mongodb.net/short-url?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
    );
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(`Mongodb conectado en: ${url}`);
  } catch (error) {
    console.log(`error: ${error.messahe}`);
    process.exit(1);
  }
};
export default connectDB;
