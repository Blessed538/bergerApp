import React from 'react';
import  './Berger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';


const burger = (props) => {
  return (


    <div className={burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
      <BurgerIngredient type="bread-top" />
    </div>
  )
}

export default burger;