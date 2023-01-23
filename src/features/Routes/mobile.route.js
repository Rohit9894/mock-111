const express = require("express");
const mobileData = require("../Models/mobile.model");
const mobileRouter = express.Router();

mobileRouter.post("/", async (req, res) => {
  console.log("hello");
  try {
    const { body } = req;
    const postData = new mobileRouter(body);
    await postData.save();
    res.send("succesfully added");
  } catch (e) {
    res.send(e.message);
  }
});
mobileRouter.get("/", async (req, res) => {
  let data = await mobileData.find({});
  res.send(data);
});

module.exports = mobileRouter;
