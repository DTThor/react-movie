const request = require('supertest')
const mongoose = require('mongoose')
const app = require('../../app')
const Movie = require('../../models/movie.js')
const seeds = require('./seeds')

describe('/movies', () => {
  beforeEach(async () => {
    await Movie.remove()
    await Movie.insertMany(seeds)
  })

  it('should respond 200 to GET all movies', async () => {
    const res = await request(app).get("/movies")
    expect(res.statusCode).toBe(200)
  })

  it('should GET all movies', async () => {
    const res = await request(app).get("/movies")
    expect(res.body).toHaveLength(5)
  })

  it('should respond 404 to POST on a bad route', async () => {
      const res = await request(app).post("/movies/boogeyman")
      expect(res.statusCode).toBe(404)
  })
})

describe('/search', () => {
  beforeEach(async () => {
    await Movie.remove()
    await Movie.insertMany(seeds)
  })

  it('should GET all movies with a search', async () => {
    const res = await request(app).get("/search/Star Wars")
    expect(res.body.Search).toHaveLength(10)
  })
})
