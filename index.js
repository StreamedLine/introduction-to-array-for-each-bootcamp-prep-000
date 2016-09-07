function changeCompletely(element, index, array) {
  element += '!';
}

function doToElementsInArray(array, callback) {
  array.forEach(changeCompletely);
}
