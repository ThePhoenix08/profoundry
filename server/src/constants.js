import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});

let localUri = "mongodb://localhost:27017/profoundry";

const ENV_VARIABLES = {
  PORT: process.env.PORT,
  MONGODB_URL: process.env.DATABASE_URL,
  LOCALDB_URL: localUri,
  DEV_MODE: process.env.DEV_MODE === "true" || true,
};

export default ENV_VARIABLES;
