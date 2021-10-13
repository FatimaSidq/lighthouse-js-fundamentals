function lastIndexOf(arr, elem){
  for(i = arr.length; i > -1; i--){
    if (arr[i] == elem){
      return i
    }
  }
  return -1
}

console.log(lastIndexOf([3, 1], 3));