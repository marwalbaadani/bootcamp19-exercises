// Part 1:
//  - What will print and why? 1 1 undefined
//  - What will change if we delete line 5? Why? I don't know which line is meant here

// Part 2:
// - change to ES6 syntax

// Part 3:
// - modify so that it prints 1, 2, 2 in that order. Console.logs must stay in place.

 x = () => {
  const a = 2;
  console.log(a);
}

y = () => {
  const a = 2;
  console.log(a);
  x();
}

const a = 1;
console.log(a);
y();
