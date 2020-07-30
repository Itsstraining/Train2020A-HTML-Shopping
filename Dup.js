let input = [2, 1, 6, 2, 3, 9, 2];
let max = -1;
for (let i = 0; i < input.length; i++) {
  if (input[i] > max) {
    max = input[i];
  }
}
max++;

let flags = [];
for (let i = 0; i < max; i++) {
  flags.push(0);
}

for (let i = 0; i < input.length; i++) {
  if (flags[input[i]] == 1) {
    console.log(input[i]);
  }
  flags[input[i]]++;
}

console.log(flags);
