const express = require('express');
const router = express.Router()
const ensure = require("../middlewares/isAlreadyLoggedIn")
const adminModel = require('../models/admin-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const adminController = require("../controllers/adminController")

router.get("/",adminController.adminIndexPage);
router.get("/createProducts",adminController.createProducts);


module.exports = router;