/*
function fibo(n) {
    if (n <= 1)
        return 1;

    return fibo(n - 1) + fibo(n - 2);

}
for (let i = 0; i < 10; i++) {
    let r = [];
    r.push(fibo(i));
    console.log(r);
}*/
/*function lamtron(n){
    let JMD = n[0];
    let a1 =  n[2];
    if(a1>=5)
        JMD++;
    if(a1<5)
        return JMD;
    else 
    return 0;
}
function NTN(day, month, year){
    let JMD = (day + ((153 * (month + 12 * ((14 - month) / 12) - 3) + 2) / 5) + (365 * (year + 4800 - ((14 - month) / 12))) + ((year + 4800 - ((14 - month) / 12)) / 4) - ((year + 4800 - ((14 - month) / 12)) / 100) + ((year + 4800 - ((14 - month) / 12)) / 400) - 32045) % 7-1;
    let weekday = ["Thu 2",
        "Thu 3",
        "Thu 4",
        "Thu 5",
        "Thu 6",
        "Thu 7",
        "Chu nhat"];
    console.log(weekday[Math.floor(JMD)]);
    console.log(JMD);
}
NTN(5, 2, 2021);*/

let a = [7, 1, 4, 6, 5, 3, 9, 2, 2, 3];
for (i = 0; i < a.length; i++) {
  console.log(a[i]);
}
console.log("------------");
for (i = 0; i < a.length; i++)
  for (j = i; j < a.length; j++) {
    if (a[i] < a[j]) console.log(a[i], a[j]);
  }
console.log("------------");
for (i = 0; i < a.length; i++) {
  if (a[i] < a[i + 1]) {
    if (a[i + 1] < a[i + 2]) console.log(a[i], a[i + 1], a[i + 2]);
  }
}
