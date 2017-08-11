var React = require('react')
var Add = require('./Add');
var IngredientsComponent = require('./IngredientsComponent')
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;


class RecipeContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: JSON.parse(localStorage.getItem('recipes')).recipes,
      showModal1: false,
      showModal2: false,
      activeModal: null
    }
    this.clickHandler = this.clickHandler.bind(this);
    this.updateRecipe = this.updateRecipe.bind(this);
    this.addClose = this.addClose.bind(this);
    this.addOpen = this.addOpen.bind(this);
    this.editClose = this.editClose.bind(this);
    this.editOpen = this.editOpen.bind(this);
  }

  clickHandler(e, index) {
    this.setState({ activeModal: index })
  }

  addClose() {
    this.setState({ showModal1: false});
  }

  addOpen() {
    this.setState({ showModal1: true});
  }

  editClose() {
    this.setState({ showModal2: false});
    this.setState({ activeModal: null })
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
            <IngredientsComponent
              curr={curr}
              title={curr.title}
              index={index}
              ingredients={curr.ingredients}
              modalShow={this.state.activeModal}
              modalHide={this.editClose}
              clickHandler={e => this.clickHandler(e, index)}
              key={curr + index}
            />
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
