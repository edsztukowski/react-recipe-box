var React = require('react');

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {
        title: props.title,
        ingredients: props.ingredients
      }
    }
    this.handleIngredients = this.handleIngredients.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
  }

  handleEdit(props) {
    var newStorage = {
      recipes: JSON.parse(localStorage.getItem('recipes')).recipes
    }
    for (var i = 0; i < newStorage.recipes.length; i++) {
      if (newStorage.recipes[i].title === this.props.title) {
        newStorage.recipes[i].ingredients = this.state.recipes.ingredients.split(',');
      }
    }
    localStorage.setItem('recipes', JSON.stringify(newStorage));
  }

  handleIngredients(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        recipes: {
          title: this.state.title,
          ingredients:value
        }
      }
    })
  }

  render() {
    return(
      <div className="recipe-form">
        <form onSubmit={this.handleEdit}>
        <p>{this.state.recipes.title}</p>
          <input
            id="ingredients"
            placeholder="new recipe ingredients"
            type="text"
            autoComplete="off"
            value={this.state.recipes.ingredients}
            onChange={this.handleIngredients}
          />
        </form>
      </div>
    )
  }

}

module.exports = EditRecipe
