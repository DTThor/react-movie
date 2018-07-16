const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.Promise = global.Promise
const isTest = process.env.NODE_ENV === 'test'
mongoose.connect(`mongodb://localhost/${isTest ? 'Moviedb_test' : 'Moviedb'}`)

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./routes'))

module.exports = app
