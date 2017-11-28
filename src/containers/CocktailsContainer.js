import React from 'react'

import CocktailsList from './CocktailsList.js'
import CocktailsView from '../components/CocktailsView.js'
import SearchBar from '../components/SearchBar.js'
import CocktailForm from '../components/CocktailForm.js'

class CocktailsContainer extends React.Component {
  constructor(){
    super()

    this.state = {
      cocktails: [],
      searchTerm: ''
    }
  }

  componentDidMount(){
    this.fetchCocktails()
  }

  handleSearch = (newTerm) => {

    this.setState({
      searchTerm: newTerm
    })
  }

  submitForm = (newCocktail) => {
    fetch('http://localhost:3000/api/v1/cocktails', {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newCocktail)
    }).then(() => this.fetchCocktails())
  }

  filteredCocktails = () => {
    return this.state.cocktails.filter((cocktail) => {
      return cocktail.name.toLowerCase().includes(this.state.searchTerm.toLowerCase())
    })
  }

  fetchCocktails = () => {
    fetch('http://localhost:3000/api/v1/cocktails')
    .then(res => res.json())
    .then(json => this.setCocktails(json))
  }

  setCocktails = (cocktailsData) => {
    this.setState({
      cocktails: cocktailsData
    })
  }

  render(){
    return (
      <div>
        <SearchBar handleSearch={this.handleSearch} />
        <CocktailForm submitForm={this.submitForm} />
        <CocktailsList cocktails={this.filteredCocktails()} />
      </div>
    )
  }
}

export default CocktailsContainer
