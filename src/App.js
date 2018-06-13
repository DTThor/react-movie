import React, { Component } from 'react'
import axios from 'axios'
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import RecentSearches from './components/RecentSearches'

const DEFAULT_STATUS = 'Search a massive database of movies and TV shows!'
const SearchStatus = ({text, color}) => <div className='dib'><h1 className={color}>{text}</h1></div>

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies: [],
      search: '',
      status: DEFAULT_STATUS,
      color: 'black',
      history: []
    }
    this.handleSearchChange = this.handleSearchChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
  }

  fetchMovies(search){
    let { movies, status, color, history } = this.state
    let typedSearch = `http://www.omdbapi.com/?apikey=df1379a2&s=${search}`
    axios.get(typedSearch)
    .then(({ data }) => {
      const status = data.Error || ''
      const movies = data.Search || []
      const color = data.Error ? 'red' : 'black'
      history = [search, ...this.state.history]
      history.length > 5 && history.pop() 
      this.setState({ status, movies, color, history })
    })
    .catch((error) => this.setState({ status: error.message || 'Something went wrong...', color: 'red'  }))
  }

  handleSearchChange(e){
    this.setState({ search: e.target.value, status: DEFAULT_STATUS, movies: [] })
  }

  handleSubmit(e){
    e.preventDefault()
    const { search, status, history } = this.state
    this.setState({ status: 'Loading...' }, () => this.fetchMovies(search))
  }

  clearSearch(e){
    e.preventDefault()
    const { search, status, movies, color } = this.state
    this.setState({ search: '', movies: [], status: DEFAULT_STATUS, color: 'black'})
  }


  render(){
    const {movies, search, status, color, history} = this.state
    return (
      <div className="tc code bg-lightest-blue">
        <Header />
        <RecentSearches history={history} />
        <SearchBar
          search={search}
          status={status}
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
