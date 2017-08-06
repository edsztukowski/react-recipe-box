//Modal pops up with edit function
  //this will create a new object for the recipe
  //update function can then run when ready
    //the update will do the following
      //search through local storage for the object that has the same title
      //splice it
      //as part of the splice, replace is with the new object made in edit
      //update function can be the same

var React = require('react');

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    //fetch this data from local storage?
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
        newStorage.recipes[i].ingredients = this.state.recipes.ingredients;
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
          ingredients:value.split(', ')
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
