const mongoose = require('mongoose')
const Movie = require('../../models/movie')

module.exports = (req, res) => {
  Movie.remove({}, (err) => {
    if (err)
      res.send(err)
    return res.json({ message: 'All movies deleted!' })
  })
}
