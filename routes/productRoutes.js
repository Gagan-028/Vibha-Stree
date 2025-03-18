const express = require('express');
const router = express.Router();
const upload = require('../config/multer-config');
const productModel = require('../models/product-model');
const productController = require('../controllers/productController');
const ensure = require('../middlewares/middleware');



router.post("/create", upload.single("image"), productController.createProduct);




module.exports = router;