const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const multer = require('multer')
const path = require('path')

const app = express()
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json({limit: '1mb'}))
app.use(express.json())
app.use(cors())

const ExampleData = require('./exampleData.js')

app.post('/api/login',[], (req, res) => {
    console.log(req.body)
    res.send(ExampleData.user[0])
})

app.get('/api/getProductList',[], (req, res) => {
    console.log(req)
    res.send(ExampleData.productList)
})

app.listen(3001)