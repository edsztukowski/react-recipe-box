var React = require('react');
var Button = require('react-bootstrap').Button;

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
          title: this.state.recipes.title,
          ingredients:value
        }
      }
    })
  }

  render() {
    return(
      <div className="edit-form">
        <form onSubmit={this.handleEdit}>
        <h2 className="edit-header">{this.state.recipes.title}</h2>
        <p>Edit recipes with comma separated values and hit enter</p>
          <input
            id="ingredients"
            placeholder="new recipe ingredients"
            type="text"
            autoComplete="off"
            value={this.state.recipes.ingredients}
            onChange={this.handleIngredients}
          />
        </form>
        <Button className="close-btn" onClick={this.props.hideModal}>Close</Button>
      </div>
    )
  }

}

module.exports = EditRecipe
