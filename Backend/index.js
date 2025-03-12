import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();

const PORT = process.env.PORT || 5002;
const URI = process.env.MONGODB_URI;

app.use(express.json());

try {
  mongoose.connect(URI);
  console.log("MongoDB Connected");
} catch (error) {
  console.log(error);
}

app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server Is Running on port ${PORT}`);
});
