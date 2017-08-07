var React = require('react');
var EditRecipe = require('./EditRecipe');
var Add = require('./Add');
var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;

//Check if local storage exists else set it

if (localStorage.getItem("recipes") === null) {
  localStorage.setItem('recipes', JSON.stringify({
    recipes: [
      {
        title: 'Apple Pie',
        ingredients: ['Milk', 'Apples']
      },
      {
        title: 'Pumpkin Pie',
        ingredients: ['Crust', 'Pumpkins', 'Milk']
      }
    ]
  }));
} else {
  localStorage.recipes = localStorage.recipes
}


class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes')).recipes,
    }
    this.showModal = this.showModal.bind(this);
    this.addNew = this.addNew.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this)

  }


  addNew(recipeName, ingredients) {
    var newStorage = {
      recipes: JSON.parse(localStorage.getItem('recipes')).recipes
    }
    var newObj = {
      title: recipeName,
      ingredients: [ingredients]
    }
    return (
      newStorage.recipes.push(newObj),
      localStorage.setItem('recipes', JSON.stringify(newStorage)),
      this.updateRecipe()
    )
  }

  updateRecipe() {
    return (
      this.setState(function()  {
        return {

          recipes:JSON.parse(localStorage.getItem('recipes')).recipes

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
            <Accordion>
               <Panel header={curr.title} eventKey={curr.index} expanded={false}>
               <div className="ingredients-container">
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
               </Panel>
            </Accordion>
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

module.exports = RecipeContainer
