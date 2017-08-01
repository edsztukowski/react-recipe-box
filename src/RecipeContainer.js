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
          ingredients: ['Crust', 'Pumpkins', 'Milk']
        },
      ]
    }
    this.editButton = this.editButton.bind(this)
  }

  editButton(props) {

    //push this data to local storage
    this.props.title;
    this.props.ingredients
  }

  render() {
    var recipesList = this.state.recipes;
    return (
      <div className="row all-recipes">
      {recipesList.map(function(curr, index) {
        return (
          <div className="recipe-box">
            <div className="recipe-title"><h3>Title: {curr.title}</h3></div>
            <div className="ingredients-container">
              <h4>Ingredients:</h4>
                {curr.ingredients.map(function(curr) {
                  return (
                    <ul className="ingredients-list">
                      <li>
                        {curr}
                      </li>
                    </ul>
                  )
                })}
                <div className="recipe-buttons">
                    <editButton title={curr.title} ingredients={curr.ingredients} />
                </div>
            </div>
          </div>
        )
      })}
      </div>
    )
  }

}

module.exports = RecipeContainer
