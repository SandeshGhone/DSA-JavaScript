const { swap } = require("../../utils");

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let smallestEleIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[smallestEleIndex]) {
        smallestEleIndex = j;
      }
    }

    swap(arr, i, smallestEleIndex);
  }
}

module.exports = {
  selectionSort,
};
