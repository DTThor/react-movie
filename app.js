const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')

const app = express()

mongoose.Promise = global.Promise
const { TEST_DB_NAME, DB_NAME, MONGODB_URI } = process.env
const isTest = process.env.NODE_ENV === 'test'
const isDev = process.env.NODE_ENV === 'development'
const isProd = process.env.NODE_ENV === 'production'
if (isTest) {
  mongoose.connect(`${TEST_DB_NAME}`)
}else if (isDev) {
  mongoose.connect(`${DB_NAME}`)
}else if (isProd) {
  mongoose.connect(`${MONGODB_URI}`)
}

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(require('./routes'))

module.exports = app
