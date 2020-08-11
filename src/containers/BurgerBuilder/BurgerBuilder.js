import React, { Component } from 'react';
// import Aux from '../../hoc/Aux';
import burger from './../../components/Burger/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <div>
        <Burger />
        <div>Build Controls everytime</div>
      </div>
    );
  }
}

export default BurgerBuilder;
