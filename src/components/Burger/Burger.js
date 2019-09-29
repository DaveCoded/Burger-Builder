import React from 'react';

import classes from './Burger.module.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const Burger = props => {
  // Map through array of ingredient object's keys
  let transformedIngredients = Object.keys(props.ingredients)
    .map(igKey => {
      return (
        // return an array for each ingredient type
        [...Array(props.ingredients[igKey])]
          // then map through that inner array, outputting a component per array item
          .map((_, i) => {
            return <BurgerIngredient key={igKey + i} type={igKey} />;
          })
      );
    })
    // Flatten nested array to linear array to get total ingredients length
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type='bread-top' />
      {transformedIngredients}
      <BurgerIngredient type='bread-bottom' />
    </div>
  );
};

export default Burger;
