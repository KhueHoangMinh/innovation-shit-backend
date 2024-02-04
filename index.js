const express = require('express')
const app = express()

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