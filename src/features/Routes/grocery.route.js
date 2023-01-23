const express = require("express");
const groceryData = require("../Models/grocery.model");
const groceryRouter = express.Router();

groceryRouter.post("/", async (req, res) => {
  console.log("hello");
  try {
    const { body } = req;
    const postData = new groceryData(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
groceryRouter.get("/", async (req, res) => {
  let data = await groceryData.find({});
  res.send(data);
});

module.exports = groceryRouter;
