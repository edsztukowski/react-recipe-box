var React = require('react');
var Button = require('react-bootstrap').Button;
var Modal = require('react-bootstrap').Modal;

class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipeName: '',
      ingredients: []
    }
    this.handleName = this.handleName.bind(this);
    this.handleIngredients = this.handleIngredients.bind(this);
    this.addNew = this.addNew.bind(this);

  }
  handleName(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        recipeName:value
      }
    })
  }

  handleIngredients(event) {
    var value = event.target.value;
    this.setState(function() {
      return {
        ingredients:value
      }
    })
  }

  addNew(recipeName, ingredients) {
    var newStorage = {
      recipes: JSON.parse(localStorage.getItem('recipes')).recipes
    }
    var newObj = {
      title: recipeName,
      ingredients: ingredients.split(',')
    }
    return (
      newStorage.recipes.push(newObj),
      localStorage.setItem('recipes', JSON.stringify(newStorage))
    )
  }

  render() {
    return (
      <div className="add-container">
        <div className="add-btn">
          <Button
           bsStyle="success"
           bsSize="large"
           onClick={this.props.btnClick}
          >
            Add New
          </Button>
        </div>

      <Modal show={this.props.modalShow} onHide={this.props.modalClose}>
        <Modal.Body>
          <form className="add-form" onSubmit={this.addNew.bind(null,this.state.recipeName, this.state.ingredients)}>
            <label className="add-header" htmlFor="newRecipe">
              Add New Recipe
            </label>
            <div className="flex-row">
              <input
                id="title"
                placeholder="new recipe title"
                type="text"
                autoComplete="off"
                value={this.state.recipeName}
                onChange={this.handleName}
              />
              <input
                id="ingredients"
                placeholder="new recipe ingredients"
                type="text"
                autoComplete="off"
                value={this.state.ingredients}
                onChange={this.handleIngredients}
              />
            </div>
            <button className="btn save-btn">
                SAVE
            </button>
          </form>

        </Modal.Body>
        <Modal.Footer className="modal-footer">
          <p>To add a new recipe, add a title, and then ingredients separated by commas</p>
          <Button className="close-btn" onClick={this.addClose}>Close</Button>
        </Modal.Footer>
      </Modal>

    </div>
    )
  }

}

module.exports = Add
