// Complete the implementation of the following functions so that
// the output is [0, 3, 6, 9, 12]

const arr = [0, 1, 2, 3, 4];

const triple = (num) => {
  // TODO
  return num * 3;
};

Array.prototype.map = function(fun) {
  // TODO
  let array = [];
  for (let i = 0; i < this.length; i++){
    array.push(fun(this[i]));
  }
return array;
};

console.log(arr.map(triple));
