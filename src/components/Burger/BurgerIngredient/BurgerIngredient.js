import React, { Component } from 'react';
 

class BurgerIngredient extends Component {
  render() {

let ingredient = null;
switch(this.props.type) {
  case ('bread-bottom'):
     ingredient = 
     <div className={classes.BreadBottom}></div>;
  break;
  case ('bread-top'):
    ingredient = (
      <div className={classes.BreadTop}>
        <div className={classes.Seeds1}></div>
        <div className={classes.Seeds2}></div>
      </div>
    );
    break;
    case ('meat'):
      ingredient = <div className={classes.Meat}></div>;
      break;
      default:
      ingredient = null;
}

return ingredient;

  }
}
export default BurgerIngredient;