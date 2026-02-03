const classificationModel = require("..classflcation-model");
const utilities = require("../utilities");


async function buildHome(req, res, next) {
  try {
    const classifications = await classificationModel.getClassifications();
    const nav = utilities.buildNav(classifications);
    res.render("index", { title: "Home", nav });
  } catch (error) {
    next(error);
  }

}


module.exports = { buildHome };