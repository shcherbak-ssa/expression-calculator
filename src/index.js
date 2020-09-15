function eval() {
  // Do not use eval!!!
  return;
}

function expressionCalculator(expr) {
  expr = removeSpaces(expr);
}

function removeSpaces(expr) {
  return expr.replace(/\s/g, '');
}

module.exports = {
  expressionCalculator
}