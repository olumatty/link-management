const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("mongoose");

dotenv.config();

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(cors({}));

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

app.get("/", (req, res) => {
  res.send("API IS RUNNING.....");
});

app.listen(PORT, () => {
  console.log(`The server is running on port ${PORT}`);
});
