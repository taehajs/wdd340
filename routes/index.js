const express = require("express")
const router = express.Router()
const utilities = require("../utilities")

router.get("/", async (req, res) => {
  const classifications = await require("../models/classification-model").getClassifications()
  const nav = utilities.buildNav(classifications)
  res.render("index", { title: "Home", nav })
})



module.exports = router