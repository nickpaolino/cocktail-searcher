import React from 'react'

class CocktailForm extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      name: '',
      description: '',
      instructions: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.submitForm(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render(){
    return (
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            Submit Cocktail
            Name: <input type="text" name="name" onChange={this.handleChange}/>
            Description: <input type="text" name="description" onChange={this.handleChange}/>
            Instructions: <input type="text" name="instructions" onChange={this.handleChange}/>
            <input type="submit" />
          </form>
        </div>
    )
  }
}

export default CocktailForm
