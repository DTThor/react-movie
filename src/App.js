import React, { Component } from 'react'
import axios from 'axios'
import MovieCard from './components/MovieCard'
import Header from './components/Header'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import RecentSearches from './components/RecentSearches'

const DEFAULT_STATUS = 'Search a massive database of movies and TV shows!'
const SearchStatus = ({text, color}) => (
  <div className='dib'>
    <h1 className={color}>{text}</h1>
  </div>
)

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
    this.handleRecentSubmit = this.handleRecentSubmit.bind(this)
    this.clearSearch = this.clearSearch.bind(this)
    this.clearHistory = this.clearHistory.bind(this)
  }

  fetchMovies(search){
    const { movies, status, color } = this.state
    const { DEV_API_URL, PROD_API_URL, NODE_ENV } = process.env
    let typedSearch =`${NODE_ENV === 'production' ? PROD_API_URL : DEV_API_URL}${search}`
    axios.get(typedSearch)
    .then(({ data }) => {
      const status = data.Error || ''
      const movies = data.Search || []
      const color = data.Error ? 'red' : 'black'
      const history = this.state.history.includes(search) || data.Error ? this.state.history : [search, ...this.state.history]
      history.length > 5 && history.pop()
      this.setState({ status, movies, color, history })
    })
    .catch((error) => this.setState({ status: error.message || 'Something went wrong...', color: 'red'  }))
  }

  handleSearchChange(e){
    this.setState({ search: e.target.value, status: DEFAULT_STATUS, movies: [], color: 'black' })
  }

  handleSubmit(e){
    e.preventDefault()
    const { search, status, history } = this.state
    this.setState({ status: 'Loading...' }, () => this.fetchMovies(search))
  }

  handleRecentSubmit(e){
    e.preventDefault()
    const { search, status, history } = this.state
    this.setState({ status: 'Loading...', search: e.target.innerText }, () => this.fetchMovies(this.state.search))
  }

  clearSearch(e){
    const { search, status, movies, color } = this.state
    this.setState({ search: '', movies: [], status: DEFAULT_STATUS, color: 'black'})
  }

  clearHistory(e){
    e.preventDefault()
    const { history, search, status, movies } = this.state
    this.setState({ history: [], movies: [], search: '', status: DEFAULT_STATUS })
  }


  render(){
    const {movies, search, status, color, history} = this.state
    return (
      <div className="tc code bg-lightest-blue">
        <Header />
        <RecentSearches
          onClick={this.handleRecentSubmit}
          history={history}
          clearHistory={this.clearHistory}
        />
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
