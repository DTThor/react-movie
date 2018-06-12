import React, { Component } from 'react'
import axios from 'axios'
import Movie from './components/Movie'
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
    const { search } = this.state
    this.fetchMovies(search)
    e.preventDefault()
  }


  render(){
    const {movies, search} = this.state
    return (
      <div className="tc code">
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
