var React = require('react');
var Button = require('react-bootstrap').Button;

class Delete extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      recipes: {
        title: props.title,
        ingredients: props.ingredients
      }
    }
    this.handleDelete = this.handleDelete.bind(this);

  }

  handleDelete(props) {
    var newStorage = {
      recipes: JSON.parse(localStorage.getItem('recipes')).recipes
    }
    for (var i = 0; i < newStorage.recipes.length; i++) {
      if (newStorage.recipes[i].title === this.props.title) {
        newStorage.recipes = this.state.recipes.splice(i, 1);
      }
    }
    localStorage.setItem('recipes', JSON.stringify(newStorage));
  }

  render() {
    return(
      <div className="recipe-form">
        <Button onSubmit={this.handleDelete}>
          DELETE
        </Button>
      </div>
    )
  }

}

module.exports = Delete
