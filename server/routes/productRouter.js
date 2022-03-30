// import controllers review, books
const bookController = require('../controllers/bookController.js')
const reviewController = require('../controllers/reviewController')
const userController=require('../controllers/userController')

// router
const router = require('express').Router()

//user routes

router.post('/addUser',userController.addUser)

router.post('/user/login',userController.loginUser)


// use routers  
router.post('/addBook', bookController.addBook)

router.get('/allBooks', bookController.getAllBooks)

router.get('/published', bookController.getPublishedBook)



// Review Url and Controller

router.get('/allReviews', reviewController.getAllReviews)
router.post('/addReview/:id', reviewController.addReview)

// get book Reviews
 router.get('/getBookReviews/:id', bookController.getBookReviews)




// Books router
router.get('/:id', bookController.getOneBook)

router.put('/:id', bookController.updateBook)

router.delete('/:id', bookController.deleteBook)

module.exports = router
