var React = require('react');
var EditRecipe = require('./EditRecipe');
var Add = require('./Add');
var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;

//Check if local storage exists else set it

class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes')).recipes
    }
    this.updateRecipe = this.updateRecipe.bind(this)
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

  render() {
    var recipesList = this.state.recipes;
    return (
      <div className="row all-recipes">
        {recipesList.map(function(curr, index) {
          return (
            <Accordion className="recipe-box" key= {curr.title}>
               <Panel className="ingredients-container" header={curr.title} eventKey={1} expanded={false}>
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
               </Panel>
            </Accordion>
          )
        })}
        <div className="recipe-buttons">
          <Add />
        </div>
      </div>
    )
  }
}

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

module.exports = RecipeContainer
