//TO DO
  //for some reason state is re-setting and local storage is as well at the re-render
  //could be because setting localStorage at bottom

var React = require('react')
var EditRecipe = require('./EditRecipe')
var Add = require('./Add')

class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = JSON.parse(localStorage.getItem('recipes'))
    this.updateRecipe = this.updateRecipe.bind(this);
    this.showModal = this.showModal.bind(this);
    this.addNew = this.addNew.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this)
  }

  addNew(recipeName, ingredients) {
    var newStorage = JSON.parse(localStorage.getItem('recipes'));
    var newObj = {
      title: recipeName,
      ingredients: [ingredients]
    }
    console.log(localStorage.recipes, 1);
    console.log(this.state.recipes, 'state')
    return (
      newStorage.recipes.push(newObj),
      console.log(localStorage.recipes, 2),
      localStorage.setItem('recipes', JSON.stringify(newStorage.recipes)),
      console.log(localStorage.recipes, 3),
      this.updateRecipe()
    )
  }

  updateRecipe() {
    return (
      this.setState(function()  {
        return {
          recipes:JSON.parse(localStorage.getItem('recipes')),
        }
      })
    )
  }

  showModal() {
    return (
    <div>test</div>
    )
  }

  render() {
    var recipesList = this.state.recipes;
    return (
      <div className="row all-recipes">
      {recipesList.map(function(curr, index) {
        return (
          <div className="recipe-box" key={curr.title}>
            <div className="recipe-title"><h3>Title: {curr.title}</h3></div>
            <div className="ingredients-container">
              <h4>Ingredients:</h4>
                {curr.ingredients.map(function(curr, index) {
                  return (
                    <ul key={curr + index} className="ingredients-list">
                      <li key={curr}>
                        {curr}
                      </li>
                    </ul>
                  )
                })}
                <div className="recipe-modal">
                  <EditRecipe title={curr.title} ingredients={curr.ingredients}/>
                </div>
            </div>
          </div>
        )
      })}

      <div className="recipe-buttons">
        <Add addFunction={this.addNew}/>
      </div>
      </div>
    )
  }
}

localStorage.setItem('recipes', JSON.stringify({
  recipes: [
    {
      title: 'Apple Pie',
      ingredients: ['milk', 'apples']
    },
    {
      title: 'Pumpkin Pie',
      ingredients: ['Crust', 'Pumpkins', 'Milk']
    }
  ]
}));

module.exports = RecipeContainer
