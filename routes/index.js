const router = require('express').Router()
const searchMovies = require("../operations/movies/searchMovies")
const getAll = require("../operations/movies/getAll")

router.get('/search/:query', searchMovies)
router.get('/movies', getAll)

module.exports = router
