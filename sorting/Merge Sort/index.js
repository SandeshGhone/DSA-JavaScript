function mergeSortHelper(arr, start, end) {
  if (start < end) {
    let mid = Math.floor(start + (end - start) / 2);

    // sort left part
    mergeSortHelper(arr, start, mid);
    mergeSortHelper(arr, mid + 1, end);
    merge(arr, start, mid, end);
  }
}

function merge(arr, start, mid, end) {
  let result = [];
  let i = start,
    j = mid + 1;

  while (i <= mid && j <= end) {
    if (arr[i] <= arr[j]) {
      result.push(arr[i]);
      i++;
    }

    if (arr[j] <= arr[i]) {
      result.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    result.push(arr[i]);
    i++;
  }

  while (j <= end) {
    result.push(arr[j]);
    j++;
  }

  for (let k = 0; k < result.length; k++) {
    arr[start + k] = result[k];
  }
}

function mergeSort(arr) {
  mergeSortHelper(arr, 0, arr.length - 1);
}

module.exports = {
  mergeSort
}
