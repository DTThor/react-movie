const mongoose = require('mongoose')
const axios = require('axios')
const Movie = require('../../models/movie')

const searchMovies = (req, res) => {
  const { OMDB_API_KEY } = process.env
  let typedSearch = `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&s=${req.params.query}`
  axios.get(typedSearch)
  .then(({ data }) => {
    data.Error ? res.json(data) :
    data.Search.forEach(element => {
      element = new Movie(element)
      element.save((err, movie) =>{
        if(err)
        res.send(err)
      })
    })
    res.json(data)
  })
  .catch((error) => {
    res.end(error.message)
  })
}

module.exports = searchMovies
