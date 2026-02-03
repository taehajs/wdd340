const express = require("express");
const router = express.Router();
const invController = require("../controllers/inventoryController");

// Inventory Routes
router.get("/", invController.buildByClassificationId);

router.get("/type/:classificationId", invController.buildByClassificationId);

module.exports = router;