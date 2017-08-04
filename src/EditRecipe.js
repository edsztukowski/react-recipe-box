var React = require('react');

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    //fetch this data from local storage
    this.state = {
      recipes: {
        title: props.title,
        ingredients: props.ingredients
      }
    }
  }

  render() {
    return(
      <div className="recipe-form">
        <p>{this.state.recipes.title}</p>
        <p>{this.state.recipes.ingredients.join(", ")}</p>
      </div>
    )
  }

}

module.exports = EditRecipe
