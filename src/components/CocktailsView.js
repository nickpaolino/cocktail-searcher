import React from 'react'

class CocktailsView extends React.Component {
  render(){
    console.log(this.props);
    return(
      <div className="cocktail view">
        <div className="header">
          {this.props.cocktail.name}
        </div>

        <div className="content">
          {this.props.cocktail.description}
        </div>

      </div>
    )
  }
}

export default CocktailsView
