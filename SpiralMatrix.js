function createTable(size, defaultValue) {
  let tb = [];
  for (let i = 0; i < size; i++) {
    let arr = [];
    for (let j = 0; j < size; j++) {
      arr.push(defaultValue);
    }
    tb.push(arr);
  }
  return tb;
}

let vector = {
  x: 0,
  y: -1,
};

function rotate(vector) {
  let result = {
    x: vector.y,
    y: -vector.x,
  };
  return result;
}

function checkCollision(current, size) {
  if (
    current.x < 0 ||
    current.x > size - 1 ||
    current.y < 0 ||
    current.y > size - 1
  ) {
    return false;
  }
  return true;
}

function canRotate(current, vector, matrix, size) {
  let rVect = rotate(vector);
  let rPos = move(current, rVect);
  if (checkCollision(rPos, size)) {
    if (matrix[rPos.x][rPos.y] == 0) {
      return true;
    }
  }

  return false;
}

function move(current, vector) {
  let rPos = {
    x: current.x + vector.x,
    y: current.y + vector.y,
  };
  return rPos;
}

function spiral(size, vector) {
  let matrix = createTable(size, 0);
  let step = 1;
  let current = {
    x: Math.floor(size -1)/2 +1,
    y: Math.floor(size -1)/2,
  };
  console.log(current);
  while (checkCollision(current, size)) {
    if (canRotate(current, vector, matrix, size)) {
      vector = rotate(vector);
    }
    current = move(current, vector);
    if (checkCollision(current, size)) {
      matrix[current.x][current.y] = step;
      step++;
    }
  }
  return matrix;
}

let matrix = spiral(5, vector);

console.log(matrix);
