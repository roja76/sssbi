const express = require('express');
const router = express.Router();

const categoryController = require('../controller/categoriesController');

// get all productss
router.get('/getAll', categoryController.getAll);

// get products by ID
// router.get('/:id',kidsController.getItemById);

// // // create new products
router.post('/insert', categoryController.addCategory );

// // // update products
 router.put('/update', categoryController.updateCategory);

// // // delete products
router.delete('/delete',categoryController.deleteCategory);

module.exports = router;