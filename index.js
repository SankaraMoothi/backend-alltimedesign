import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import authRoute from "./routes/authRoute.js";
import taskRoute from "./routes/taskRoute.js";
const app = express();
dotenv.config();

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

mongoose.set("strictQuery", true);

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("Connected to mongoDB!");
  } catch (error) {
    console.log(error);
  }
};
app.use("/api/auth", authRoute);

app.use("/api/task", taskRoute);
app.get("/", function (request, response) {
  response.send("🙋‍♂️, 🌏 🎊✨🤩!!!!!");
});

app.listen(PORT, () => {
  connect();
  console.log("Hai Guys");
});