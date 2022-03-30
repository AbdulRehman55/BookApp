const db = require('../models')

// // image Upload
// const multer = require('multer')
// const path = require('path')


// create main Model
const Book = db.books
const Review = db.reviews

// main work

// 1. create book

const addBook = async (req, res) => {

    let info = {
       // bookId:req.body.bookId,
        title: req.body.title,
        author:'dont know',
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published : false
    }

    const book = await Book.create(info)
    res.status(200).send(book)
    console.log(book)

}



// 2. get all books

const getAllBooks = async (req, res) => {

    let books = await Book.findAll({})
    res.status(200).send(books)

}

// 3. get single book

const getOneBook = async (req, res) => {

    let id = req.params.id
    let book = await Book.findOne({ where: { id: id }})
    res.status(200).send(book)

}

// 4. update Book

const updateBook = async (req, res) => {

    let id = req.params.id

    let book = await Book.update(req.body, { where: { id: id }})
   book= await Book.findOne({ where: { id: id }})

    res.status(200).send(book)
   

}

// 5. delete book by id

const deleteBook = async (req, res) => {

    let id = req.params.id
    
    await Book.destroy({ where: { id: id }} )

    res.status(200).send('Book is deleted !')

}

// 6. get published book

const getPublishedBook = async (req, res) => {

    const books =  await Book.findAll({ where: { published: true }})

    res.status(200).send(books)

}

// 7. connect one to many relation Book and Reviews

const getBookReviews =  async (req, res) => {

    const id = req.params.id

    const data = await Book.findOne({
        include: [{
            model: Review,
            as: 'review'
        }],
        where: { BookId: id }
    })

    res.status(200).send(data)

}


// // 8. Upload Image Controller

// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, 'Images')
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + path.extname(file.originalname))
//     }
// })

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: '1000000' },
//     fileFilter: (req, file, cb) => {
//         const fileTypes = /jpeg|jpg|png|gif/
//         const mimeType = fileTypes.test(file.mimetype)  
//         const extname = fileTypes.test(path.extname(file.originalname))

//         if(mimeType && extname) {
//             return cb(null, true)
//         }
//         cb('Give proper files formate to upload')
//     }
// }).single('image')









module.exports = {
    addBook,
    getAllBooks,
    getOneBook,
    updateBook,
    deleteBook,
    getPublishedBook,
    getBookReviews
   // upload
    
}
