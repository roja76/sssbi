const express = require('express');
const router = express.Router();
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
    uploadDir: './dist/assets/post-imgs'
});


const postcontroller = require('../controller/postContoller');

// get all productss
router.get('/getAll', postcontroller.getAll);

// get products by ID
// router.get('/:id',kidsController.getItemById);

// // // create new products
// router.post('/insert', postcontroller.addPost );

// // // update products
 router.post('/update', multipartMiddleware,postcontroller.updatePost);

// // // delete products
router.post('/delete',postcontroller.deletePost);
// router.post('/test', postcontroller.test);



//insert data
router.post('/insert',multipartMiddleware,postcontroller.savedata);

module.exports = router;