function groupingDishes(dishes) {
  const ingredients = dishes.reduce((allIngredients, dish) => {
    const [dishName, ...dishIngredients] = dish;

    dishIngredients.forEach((ingredient) => {
      const currentDishNames = allIngredients[ingredient];
      allIngredients[ingredient] = currentDishNames
        ? [...currentDishNames, dishName]
        : [dishName];
    });
    return allIngredients;
  }, {});

  return Object.entries(ingredients)
    .filter(([ingredient, dishes]) => dishes.length >= 2)

    .map(([ingredient, dishes]) => [
      ingredient,
      ...dishes.sort(lexicongraphically),
    ])
    .sort((a, b) => {
      return lexicongraphically(a[0], b[0]);
    });
}

function lexicongraphically(a, b) {
  if (a === b) return 0;
  if (a > b) return 1;
  return -1;
}
