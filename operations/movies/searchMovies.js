const mongoose = require('mongoose')
const axios = require('axios')
const Movie = require('../../models/movie')
const API_KEY = 'df1379a2'

module.exports = (req, res) => {
  let typedSearch = `https://www.omdbapi.com/?apikey=${API_KEY}&s=happy`
  axios.get(typedSearch)
  .then(({ data }) => {
    data.Search.forEach(element => {
      element = new Movie(element)
      element.save((err, movie) =>{
        if(err)
        res.send(err)
      })
    })
    res.json(data.Search)
  })
}
