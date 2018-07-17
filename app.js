const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.Promise = global.Promise
const { TEST_DB_NAME, DB_NAME } = process.env
const isTest = process.env.NODE_ENV === 'test'
mongoose.connect(`${isTest ? TEST_DB_NAME : DB_NAME}`)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./routes'))

module.exports = app
