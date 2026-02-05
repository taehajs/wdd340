const express = require('express');
const path = require('path');
const router = express.Router();

router.use(express.static(path.join(__dirname, '../public')));

router.get("/css", express.static(path.join(__dirname, '../public/css')));
router.get("/images", express.static(path.join(__dirname, '../public/images')));
router.get("/js", express.static(path.join(__dirname, '../public/js')));

module.exports = router;



