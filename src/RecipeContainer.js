var React = require('react')
var EditRecipe = require('./EditRecipe');
var Add = require('./Add');
var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;
var Modal = require('react-bootstrap').Modal;
var Button = require('react-bootstrap').Button;


class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes')).recipes,
      showModal: false
    }
    this.updateRecipe = this.updateRecipe.bind(this);
    this.modalClose = this.modalClose.bind(this);
    this.modalOpen = this.modalOpen.bind(this);
  }

  modalClose() {
    this.setState({ showModal: false });
  }

  modalOpen() {
    this.setState({ showModal: true });
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
          <Button
           bsStyle="primary"
           bsSize="large"
           onClick={this.modalOpen}
          >
            Add New
          </Button>
          <Modal show={this.state.showModal} onHide={this.modalClose}>
            <Modal.Body>
              <Add />
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <p>To add a new recipe, add a title, and then recipes separated with commas without spaces</p>
              <Button onClick={this.modalClose}>Close</Button>
            </Modal.Footer>
          </Modal>
          </div>
      </div>
    )
  }
}
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

module.exports = RecipeContainer
