let arr = [7, 1, 4, 6, 5, 3, 9, 2, 2, 3];
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
  for (let j = i; j < arr.length; j++) {
    if (arr[i] < arr[j]) {
      console.log(arr[i] + " " + arr[j]);
    }
    for (let k = j; k < arr.length; k++) {
      if (arr[i] < arr[j] && arr[j] < arr[k]) {
        console.log(arr[i] + " " + arr[j] + " " + arr[k]);
        break;
      }
    }
  }
}
