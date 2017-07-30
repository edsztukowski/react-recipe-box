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
    return (
      <div className="row recipe-list">
      {this.state.recipes[0].title}
      </div>
    )
  }

}

module.exports = RecipeContainer
