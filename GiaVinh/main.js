let arr = [7, 1, 4, 6, 5, 3, 9, 2, 2, 3];
for (i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = 0; i < arr.length; i++) {
  for (let j = i; j < arr.length; j++)
    if (arr[i] < arr[j]) {
      console.log(arr[i], arr[j]);
    }
}

for (i = 0; i < arr.length; i++) {
  if (arr[i] < arr[i + 1]) {
    if (arr[i + 1] < arr[i + 2]) console.log(arr[i], arr[i + 1], arr[i + 2]);
  }
}
