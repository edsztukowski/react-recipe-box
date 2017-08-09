var React = require('react');

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: 'test',
      ingredients: ['test','test']
    }
    this.handleName = this.handleName.bind(this);
    this.handleIngredients = this.handleIngredients.bind(this);

  }
  handleName(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        recipeName:value
      }
    })
  }

  handleIngredients(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        ingredients:value
      }
    })
  }


  render() {
    return (

        <form onSubmit={this.props.addFunction.bind(null,this.state.recipeName, this.state.ingredients)}>

        <label className="header" htmlFor="newRecipe">
          Add New Recipe
        </label>
        <input
          id="title"
          placeholder="new recipe title"
          type="text"
          autoComplete="off"
          value={this.state.recipeName}
          onChange={this.handleName}
        />
        <input
          id="ingredients"
          placeholder="new recipe ingredients"
          type="text"
          autoComplete="off"
          value={this.state.ingredients}
          onChange={this.handleIngredients}
        />
        <button>

        </button>
      </form>
    )
  }

}

module.exports = Add
