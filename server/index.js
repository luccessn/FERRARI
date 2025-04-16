const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const ImagesModel = require("./Models/images");
//
//
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/ferrari");
//

app.get("/getImages", (req, res) => {
  ImagesModel.find()
    .then((images) => res.json(images))
    .catch((err) => res.json(err));
});
//

app.listen(3001, () => {
  console.log("running");
});
