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

app.get('/api/user_details',[], (req, res) => {
    console.log(req.body)
    res.send(ExampleData.user[0])
})


app.get('/api/product_list',[], (req, res) => {
    console.log(req)
    res.send(ExampleData.productList)
})

app.get('/api/product',[], (req, res) => {
    console.log(req)
    res.send(ExampleData.product)
})

app.get('/api/market_rate',[], (req, res) => {
    console.log(req)
    res.send(ExampleData.marketRate)
})

app.get('/api/home',[], (req, res) => {
    console.log(req)
    res.send(ExampleData.home)
})

app.get('/api/search',[], (req, res) => {
    console.log(req)
    res.send(ExampleData.search)
})

app.get('/api/buying_request',[], (req, res) => {
    console.log(req)
    res.send(ExampleData.buyingRequest)
})

app.get('/api/selling_request',[], (req, res) => {
    console.log(req)
    res.send(ExampleData.sellingRequest)
})

app.get('/api/trending',[], (req, res) => {
    console.log(req)
    res.send(ExampleData.trendingCategories)
})

app.get('/api/cards',[], (req, res) => {
    res.send(ExampleData.userCards)
})

app.get('/api/balance',[], (req, res) => {
    res.send(ExampleData.userBalance)
})

app.get('/api/archived_length',[], (req, res) => {
    res.send({archived: ExampleData.userArchived.length})
})

app.get('/api/archived',[], (req, res) => {
    res.send(ExampleData.userArchived)
})

app.get('/api/transactions_length',[], (req, res) => {
    res.send({transactions: ExampleData.transactions.length})
})

app.get('/api/transactions',[], (req, res) => {
    res.send(ExampleData.transactions)
})

app.listen(3001)