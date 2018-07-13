const router = require('express').Router()
const searchMovies = require("../operations/movies/searchMovies")

router.get('/search', searchMovies)

module.exports = router
