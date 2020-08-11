import React from 'react';
import classes from './Berger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
      <BurgerIngredient type="bread-top" />
    </div>
  )
}

export default burger;