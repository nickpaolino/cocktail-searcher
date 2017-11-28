import React from 'react'

import Cocktail from '../components/Cocktail.js'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import CocktailsView from '../components/CocktailsView.js'


class CocktailsList extends React.Component {
  createCocktails = () => {
    return this.props.cocktails.map((cocktailData) => {
      return (
      <div>
        <Route path={`/cocktails/${cocktailData.id}`} render={() => {
          return <CocktailsView cocktail={cocktailData} />
        }}/>
        <Cocktail key={cocktailData.id} cocktail={cocktailData} />
      </div>
      )
    })
  }

  render(){
    return(
      <div className="cocktail list">
        {this.createCocktails()}
      </div>
    )
  }
}

export default CocktailsList
