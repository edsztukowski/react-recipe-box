var React = require('react');
var Accordion = require('react-bootstrap').Accordion;
var Panel = require('react-bootstrap').Panel;
var Modal = require('react-bootstrap').Modal;
var EditRecipe = require('./EditRecipe');
var Button = require('react-bootstrap').Button;

function IngredientsComponent(props) {
  return (
    <Accordion className="recipe-box" key={props.title}>
       <Panel className="ingredients-container" header={props.title} eventKey={1} expanded={false}>
           {props.ingredients.map(function(curr, index) {
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
                onClick={props.clickHandler}
               >
                 Edit
               </Button>
              </div>
              <Modal
                id={props.curr}
                show={props.modalShow === props.index}
                onHide={props.modalHide}
                >
               <Modal.Body>
                  <EditRecipe hideModal={props.modalHide} title={props.title} ingredients={props.ingredients}/>
               </Modal.Body>
               </Modal>
             </div>
       </Panel>
    </Accordion>
  )
}

module.exports = IngredientsComponent
