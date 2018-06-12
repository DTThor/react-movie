import React, { Component } from 'react'
import axios from 'axios'
import Movie from './components/Movie'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'

const DEFAULT_STATUS = 'Search a massive database of movies and TV shows!'
const SearchStatus = ({text}) => (<h1>{text}</h1>)

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      search: '',
      status: DEFAULT_STATUS
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  fetchMovies(search){
    const { movies, status } = this.state
    let typedSearch = `http://www.omdbapi.com/?apikey=df1379a2&s=${search}`
    axios.get(typedSearch)
    .then(result=> {
      return result.data.Error ? this.setState({status: result.data.Error})
      : this.setState({movies: result.data.Search})
    })
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


  render(){
    const {movies, search, status} = this.state
    return (
      <div className="tc code bg-lightest-blue">
        <Header />
        <SearchBar
          search={search}
          handleSearchChange={this.handleSearchChange}
          handleSubmit={this.handleSubmit}
        />
        {status && <SearchStatus text={status} /> }
        {movies.length === 0 && !status ? <SearchStatus text={status} /> : <MovieList movies={movies} />}

      </div>
    )


  }
}


export default App
