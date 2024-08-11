
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((it, i) => i % 2 ? it.sort((a, b) => b - a) : it.sort((a, b) => a - b)).flat() : [];
}
