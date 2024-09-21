import mongoose from "mongoose";
import ENV_VARIABLES from "../constants.js";

const connectDB = async () => {
  try {
    const uri = ENV_VARIABLES.MONGODB_URI;
    // const uri = ENV_VARIABLES.localUri;

    const { connection } = await mongoose.connect(uri);

    console.log(`🗄️  Connected to: ${uri}`);
    console.info(
      `⚙️  MongoDB connected, DB HOST: http://${connection.host}:${ENV_VARIABLES.PORT}`
    );
  } catch (error) {
    console.error("⚠️  Error connecting to the database:", error);
    process.exit(1);
  }
};

export default connectDB;
