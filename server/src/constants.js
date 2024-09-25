import dotenv from "dotenv";
dotenv.config();

let localUri = "mongodb://localhost:27017/profoundry";

const ENV_VARIABLES = {
  PORT: process.env.PORT || 4000,
  MONGODB_URI: process.env.DATABASE_URL,
  LOCALDB_URL: localUri,
  DEV_MODE: false,
};

export default ENV_VARIABLES;
