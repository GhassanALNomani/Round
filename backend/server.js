const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const mongoose = require("mongoose");


require("dotenv").config();


app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

mongoose.connect(
  process.env.MongoDB,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: true },
  () => {
    console.log("mongoDb is connect");
  }
);



app.use("/api/user", require("./routes/user"))
app.use("/api/place", require("./routes/place"))
app.use("/api/comment", require("./routes/comment"))

app.use("/api/tovisit", require("./routes/visit"))


app.listen(PORT, () => console.log(`server running in ${PORT}`));


const path = require('path')
app.use(express.static(path.join(__dirname, "build")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"))
})