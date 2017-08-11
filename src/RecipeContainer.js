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
      showModal1: false,
      showModal2: false
    }
    this.updateRecipe = this.updateRecipe.bind(this);
    this.addClose = this.addClose.bind(this);
    this.addOpen = this.addOpen.bind(this);
    this.editClose = this.editClose.bind(this);
    this.editOpen = this.editOpen.bind(this);
  }

  addClose() {
    this.setState({ showModal1: false});
  }

  addOpen() {
    this.setState({ showModal1: true});
  }

  editClose() {
    this.setState({ showModal2: false});
  }

  editOpen() {
    this.setState({ showModal2: true});
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
                   }, this)}
                   <div className="recipe-modal">
                   <div className="edit-btn">
                     <Button
                      bsStyle="success"
                      bsSize="large"
                      onClick={this.editOpen.bind(this)}
                     >
                       Edit
                     </Button>
                    </div>
                   <Modal show={this.state.showModal2} onHide={this.editClose.bind(this)}>
                     <Modal.Body>
                       <EditRecipe title={curr.title} ingredients={curr.ingredients}/>
                     </Modal.Body>
                     </Modal>
                   </div>
               </Panel>
            </Accordion>
          )
        }, this)}
        <div className="add-btn">
          <Button
           bsStyle="success"
           bsSize="large"
           onClick={this.addOpen}
          >
            Add New
          </Button>
          <Modal show={this.state.showModal1} onHide={this.addClose}>
            <Modal.Body>
              <Add />
            </Modal.Body>
            <Modal.Footer className="modal-footer">
              <p>To add a new recipe, add a title, and then ingredients separated by commas</p>
              <Button className="close-btn" onClick={this.addClose}>Close</Button>
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
