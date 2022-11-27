const express = require("express");
const app = express();
const dotenv = require("dotenv");
const dbConnect = require("./config/database");
const cors = require("cors");

//importing route
const quizRouter = require("./routes/quizRoute.js");
const authRouter = require("./routes/authRoute.js");

//configuring environment variable
dotenv.config({ path: "backend/config/config.env" });
dbConnect();
const PORT = process.env.PORT || 4000;

//parse json body
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

//endpoint
app.get("/", (req, res) => {
  res.send("welcome to server");
});

//login
app.use("/api", authRouter);
app.use("/api", quizRouter);

app.listen(PORT, console.log("server running"));
console.log(PORT);
