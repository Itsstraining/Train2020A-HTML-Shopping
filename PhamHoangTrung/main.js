let arr = [7, 1, 4, 6, 5, 3, 9, 2, 2, 3];

function Chuoi2(a) {
  for (let i = 0; i < a.length; i++) {
    console.log(a[i]);
    for (let j = i + 1; j < a.length; j++)
      if (a[i] < a[j]) {
        for (let z = j + 1; z < a.length; z++)
          if (a[j] < a[z]) {
            console.log(a[i], a[j], a[z]);
            break;
          } else {
            console.log(a[i], a[j]);
            break;
          }
        break;
      }
  }
}

Chuoi2(arr);
