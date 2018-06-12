import React, { Component } from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      search: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  fetchMovies(search){
    const { movies } = this.state
    let typedSearch = `http://www.omdbapi.com/?apikey=df1379a2&s=${search}`
    axios.get(typedSearch)
    .then(result=> this.setState({movies: result.data.Search}))
  }

  handleSearchChange(e){
    this.setState({ search: e.target.value })
  }

  handleSubmit(e){
    e.preventDefault()
    const { search } = this.state
    this.fetchMovies(search)
  }


  render(){
    const {movies, search} = this.state
    return movies.length < 1 ?
    (
      <div className="tc code bg-lightest-blue">
        <Header />
        <SearchBar
          handleSearchChange={this.handleSearchChange}
          handleSubmit={this.handleSubmit}
        />
        <h1>
          Search a massive database of movies and TV shows!
        </h1>
      </div>
    ) :
     (
      <div className="tc code bg-lightest-blue">
        <Header />
        <SearchBar
          handleSearchChange={this.handleSearchChange}
          handleSubmit={this.handleSubmit}
        />
        <MovieList movies={movies} />
      </div>
    )
  }
}


export default App
