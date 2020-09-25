require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
mongoose.set("useNewUrlParser", true); // below done to remove "deprecated" error
mongoose.set("useFindAndModify", false);
mongoose.set("useCreateIndex", true);
mongoose.set("useUnifiedTopology", true);

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
// mongoose.connect("mongodb://localhost:27017", {
//   useNewUrlParser: true,
// });
// app.get("index", (req, res) => {
//   console.log("<h2>Event has started</h2>");
// });
const db = mongoose.connection;
db.on("error", (error) => console.error(error));
db.once("open", () => {
  console.log("<h2>Database connection initilaize</h2>");
});
app.use(express.json());
const subscribersRouter = require("./routes/subscribers");
app.get("/localhost:3000/subscribers", subscribersRouter);
app.listen(3000, () => {
  console.log("<h2>Sever has started</h2>");
});
