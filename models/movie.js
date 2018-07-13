const mongoose = require('mongoose')
const Schema = mongoose.Schema

let MovieSchema = Schema({
  Title: {
    type: String
  },
  Year: {
    type: String
  },
  Poster: {
    type: String
  }
})


let MovieModel = mongoose.model('Movie', MovieSchema)

module.exports = MovieModel
