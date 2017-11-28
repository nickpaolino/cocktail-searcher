import React from 'react'
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import CocktailsView from './CocktailsView.js'

const Cocktail = (props) => {
  return(
    <div>
      <Link to={`/cocktails/${props.cocktail.id}`}>{props.cocktail.name}</Link>
    </div>
    )
}

export default Cocktail
