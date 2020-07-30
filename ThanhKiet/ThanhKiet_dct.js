let n = [7, 1, 4, 6, 5, 3, 9, 2, 2, 3];
for (let i = 0; i < n.length; i++) {
  console.log(n[i]);
  for (let j = i + 1; j < n.length; j++) {
    if (n[i] < n[j]) {
      console.log(n[i] + " " + n[j]);
    }

    for (let k = j + 1; k < n.length; k++) {
      if (n[i] < n[k]) {
        console.log(n[i] + " " + n[j] + " " + n[k]);
        break;
      }
    }
  }
}
