const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors());
// middleware

app.use(express.json())

app.use(express.urlencoded({ extended: true }))


// routers
const router = require('./routes/productRouter.js')
app.use('/', router)

//static Images Folder

//app.use('/Images', express.static('./Images'))


//port

const PORT = process.env.PORT || 4000

//server

app.listen(PORT, () => {
    console.log(`server is running on port ${PORT}`)
})
