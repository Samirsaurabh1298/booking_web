import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"

dotenv.config();
const app = express();

// MongoDB Connection Function
const connectDB = async () => {
    try {
      console.log(process.env.MONGO);
    await mongoose.connect(process.env.MONGO, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Connected to MongoDB!");
  } catch (error) {
    console.error("❌ MongoDB Connection Error:", error.message);
    process.exit(1);
  }
};


// Connect to Database before starting the server
connectDB();

app.listen(8000, () => {
  console.log("🚀 Server running on port 8000");
});
