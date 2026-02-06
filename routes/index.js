const express = require("express")
const router = express.Router()
const utilities = require("../utilities")
const classificationModel = require("../models/classification-model")



router.get("/", async (req, res) => {
  const classifications = await classificationModel.getClassifications()
  const nav = utilities.buildNav(classifications)
  res.render("index", { title: "Home", nav })
})



module.exports = router