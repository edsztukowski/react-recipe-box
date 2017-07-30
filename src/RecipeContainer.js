var React = require('react')

class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          title: 'Apple Pie',
          ingredients: ['milk ', 'apples']
        },
        {
          title: 'Pumpkin Pie',
          ingredients: ['Crust ', 'Pumpkins']
        },
      ]
    }
  }



  render() {
    var recipesList = this.state.recipes;
    return (
      <div className="row all-recipes">
      {recipesList.map(function(curr, index) {
        return (
          <div className="recipe-box">
            <div className="recipe-title">Title: {curr.title}</div>
            <div className="ingredients-list">Ingredients: {curr.ingredients}</div>
          </div>
        )
      })}
      </div>
    )
  }

}

module.exports = RecipeContainer
