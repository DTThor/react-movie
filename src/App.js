import React, { Component } from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'

const PreSearch = () => <h1> Search a massive database of movies and TV shows! </h1>
const EmptySearch = () => <h3> Movie not found! </h3>

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      search: '',
      error: ''
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  fetchMovies(search){
    const { movies } = this.state
    let typedSearch = `http://www.omdbapi.com/?apikey=df1379a2&s=${search}`
    axios.get(typedSearch)
    .then(result=> {
      return result.data.Error ? this.setState({error: result.data.Error})
      : this.setState({movies: result.data.Search})
    })
  }

  handleSearchChange(e){
    this.setState({ search: e.target.value, error: '', movies: [] })
  }

  handleSubmit(e){
    e.preventDefault()
    const { search, movies } = this.state
    this.fetchMovies(search)
  }


  render(){
    const {movies, search, error} = this.state
    return (
      <div className="tc code bg-lightest-blue">
        <Header />
        <SearchBar
          search={search}
          handleSearchChange={this.handleSearchChange}
          handleSubmit={this.handleSubmit}
        />
        {error && <EmptySearch /> }
        {movies.length === 0 && !error ? <PreSearch /> : <MovieList movies={movies} />}

      </div>
    )


  }
}


export default App
