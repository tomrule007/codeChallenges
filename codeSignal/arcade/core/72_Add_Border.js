function addBorder(picture) {
  const addSideWalls = (str) => '*' + str + '*';

  const topAndBottom = '*'.repeat(picture[0].length + 2);

  return [topAndBottom, ...picture.map(addSideWalls), topAndBottom];
}
