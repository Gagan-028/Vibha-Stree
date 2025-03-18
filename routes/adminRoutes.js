const express = require('express');
const router = express.Router()
const ensure = require("../middlewares/middleware")
const adminModel = require('../models/admin-model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const adminController = require("../controllers/adminController")


router.get("/",ensure.isAdmin,adminController.adminIndexPage);
router.get("/createProducts",ensure.isAdmin,adminController.createProducts);
router.get("/createCoupons",ensure.isAdmin, adminController.createCoupons)
router.get("/profile",ensure.isAdmin,adminController.adminProfile);

module.exports = router;