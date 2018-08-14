const router = require('express').Router()
const searchMovies = require("../operations/movies/searchMovies")
const getAll = require("../operations/movies/getAll")
const deleteAll = require('../operations/movies/deleteAll')

router.get('/search/:query', searchMovies)
router.get('/', getAll)
router.delete('/terminate', deleteAll)

module.exports = router
