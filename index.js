const { selectionSort, bubbleSort, mergeSort } = require("./sorting");

let arr = [2, 1, 4, 56, 73, 23, 6, 63];

/* Selection Sort*/
// selectionSort(arr);
// console.log(`Selection Sort ===>`, arr);

/* Bubble Sort*/
// bubbleSort(arr);
// console.log(`Bubble Sort ===>`, arr);

/* Merge Sort*/
mergeSort(arr);
console.log(`Merge Sort ===>`, arr);
