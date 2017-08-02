var React = require('react');

class EditRecipe extends React.Component {
  constructor(props) {
    super(props);
    //fetch this data from local storage
    this.State = {
      recipes: {
        title: props.title,
        ingredients: props.ingredients
      }
    }


  }

render() {
  return(
    <div>
      state.recipes
    </div>
  )
}

}

module.exports = EditRecipe
