import React, { Component } from 'react'
import Movie from './components/Movie'
import MovieList from './components/MovieList'
import SearchBar from './components/SearchBar'
import movies from './movies.js'

class App extends Component {
  constructor() {
    super()
    this.state = {
      movies,
      searchfield: ''
    }
    this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange(e){
    this.setState({ searchfield: e.target.value })
  }

  filterMoviesBy({ movies, searchfield }){
    return movies.filter(movie =>
       movie.title.toLowerCase().includes(searchfield.toLowerCase())
    )
  }



  render(){
    const {movies, searchfield} = this.state
    return (
      <div className="tc code">
        <SearchBar searchChange={this.onSearchChange}/>
        <MovieList movies={this.filterMoviesBy({movies, searchfield})}/>
      </div>
    )
  }
}


export default App
