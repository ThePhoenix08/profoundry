import mongoose from "mongoose";
import ENV_VARIABLES from "../constants.js";

const connectDatabase = async () => {
  try {
    const connectURL = ENV_VARIABLES.MONGODB_URI;
    await mongoose.connect(connectURL);
    console.log(`Server is connected to the database ${connectURL}`);
  } catch (error) {
    console.log(`Connecting to the database : ${error}`);
  }
};

export default connectDatabase;
