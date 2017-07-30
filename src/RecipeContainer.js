var React = require('react')

class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: [
        {
          title: 'Apple Pie',
          ingredients: ['milk', 'apples']
        },
        {
          title: 'Pumpkin Pie',
          ingredients: ['Crust', 'Pumpkins']
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
            <div className="ingredients-container">
              Ingredients:
                {curr.ingredients.map(function(curr) {
                  return (
                    <ul className="ingredients-list">
                      <li>
                        {curr}
                      </li>
                    </ul>
                  )
                })}
            </div>
          </div>
        )
      })}
      </div>
    )
  }

}

module.exports = RecipeContainer
