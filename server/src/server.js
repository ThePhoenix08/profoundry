import express from "express";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import ENV_VARIABLES from "./constants.js";
import cors from "cors";
import connectDB from "./db/connectDB.js";

dotenv.config({
  path: "./.env",
});
connectDB();

const app = express();

// middlewares
app.use(cors({ credentials: true, origin: "*" })); // ! IMPORTANT: change origin to your frontend domain
app.use(express.json()); // for parsing application/json
app.use(cookieParser()); // for parsing cookies
app.use(express.static("public")); // for serving static files
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// routes
app.get("/health", (_req, res) => {
  res.send("Hello, server is healthy. Welcome to Profoundry!");
});

app.listen(ENV_VARIABLES.PORT, () => {
  console.log(`Server is running on port ${ENV_VARIABLES.PORT}`);
});