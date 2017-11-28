import React from 'react'

class SearchBar extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      searchTerm: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, this.props.handleSearch(e.target.value))
  }

  render(){
    return(
      <div>
        Search for Cocktails: <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
      </div>
    )
  }
}

export default SearchBar
