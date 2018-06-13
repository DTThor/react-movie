import React, { Component } from 'react'
import axios from 'axios'
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'

const DEFAULT_STATUS = 'Search a massive database of movies and TV shows!'
const SearchStatus = ({text, color}) => <h1 className={color}>{text}</h1>

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      search: '',
      status: DEFAULT_STATUS,
      color: 'black'
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  fetchMovies(search){
    const { movies, status, color } = this.state
    let typedSearch = `http://www.omdbapi.com/?apikey=df1379a2&s=${search}`
    axios.get(typedSearch)
    .then(({ data }) => {
      const status = data.Error || ''
      const movies = data.Search || []
      const color = data.Error ? 'red' : 'black'
      this.setState({ status, movies, color })
    })
    .catch((error) => this.setState({ status: error.message || 'Something went wrong...', color: 'red'  }))
  }

  handleSearchChange(e){
    this.setState({ search: e.target.value, status: DEFAULT_STATUS, movies: [] })
  }

  handleSubmit(e){
    e.preventDefault()
    const { search, status } = this.state
    this.setState({ status: '' })
    this.fetchMovies(search)
  }

  clearSearch(e){
    e.preventDefault()
    const { search, status, movies, color } = this.state
    this.setState({ search: '', movies: [], status: DEFAULT_STATUS, color: 'black'})
  }


  render(){
    const {movies, search, status, color} = this.state
    return (
      <div className="tc code bg-lightest-blue">
        <Header />
        <SearchBar
          search={search}
          onSearchChange={this.handleSearchChange}
          onSubmit={this.handleSubmit}
          onCancel={this.clearSearch}
        />
        {status && <SearchStatus text={status} color={color} /> }
        {movies.length > 0 && <MovieList movies={movies} />}

      </div>
    )


  }
}


export default App
