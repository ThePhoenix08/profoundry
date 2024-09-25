import mongoose from "mongoose";
import ENV_VARIABLES from "../constants.js";

const connectDatabase = () => {
  try {
    const connectURL = ENV_VARIABLES.MONGODB_URI;
    mongoose.connect(connectURL);
    console.log(`Server is connected to the database ${connectURL}`);
  } catch (error) {
    console.log(`Connecting to the database : ${error}`);
  }
};

export default connectDatabase;
