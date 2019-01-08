const assert = require("assert");

// Feel free to look things up online!

const tokenize = str => {
  // TODO - write a function which converts a multi-word string into an array of words
  var res = str.split(" ");
  return res;
};

const reverse = str => {
  // TODO - write a function which reverses the string
  let reversed = ""
  for (i = str.length; i >= 0; i--){
    reversed += str.charAt(i);
  }
return reversed;
};

const uniqueOnes = arr => {
  // TODO - write a function which returns the inputted array without duplicate elements
  let noDuplicates = []
 for(let i = 0; i <arr.length; i++){
   if (noDuplicates.indexOf(arr[i]) == -1)
   noDuplicates.push(arr[i]);
 }
return noDuplicates;
};

const factorial = num => {
  // TODO - write a function which returns the factorial of a positive integer
  return num *= num - 1

};

const zip = (arr1, arr2) => {
  // TODO - write a function which combines two arrays into an array of 2-element arrays and returns -1
  // if the two arrays are of unequal length
  // Example: zip([1, 2, 3], [5, 3, 1]) === [[1, 5], [2, 3], [3, 1]]
  let array = []
  if (arr1.length == arr2.length){
    for (let i = 0; i < arr1.length; i++){
      array[i] = [arr1[i], arr2[i]]
    }
    return array;
  }
return -1
};

const unzip = arr => {
  // TODO - Write a function which does the opposite of `zip()`
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++){
      arr1.push(arr[i][0]);
      arr2.push(arr[i][1]);
  }
  let arr3 = [arr1, arr2];
  return arr3;
};

const shiftRight = (str, num) => {
  // TODO - write a function which shifts a string `num` characters to the right
  // Example = shiftThree("Hello") === "lloHe"
 let shifted = "";
 shifted = str.slice(-num) + str.slice(0, num-1);
 return shifted;


};

const announceDate = () => {
  // TODO - write a function which returns the current date in the following format:
  // "Today's date is January 7th, 2016. It is eleven thirty-seven in the morning."
  var date = new Date();
  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let hours = ['twelve', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve','one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven']
  let timeOfDay = "";
  if (date.getUTCHours() > 12){
    timeOfDay = "morning";
  }
  timeOfDay = "afternoon"
  let minutes = ['', 'o-one', 'o-two', 'o-three', 'o-four', 'o-five', 'o-six', 'o-seven', 'o-eight',	'o-nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen',	'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty', 'twenty-one', 'twenty-two', 'twenty-three', 'twenty-four', 'twenty-five', 'twenty-six', 'twenty-seven', 'twenty-eight', 'twenty-nine',	'thirty','thirty-one',	'thirty-two','thirty-three', 'thirty-four', 'thirty-five', 'thirty-six',	'thirty-seven','thirty-eight', 'thirty-nine', 'forty', 'forty-one','forty-two','forty-three',	'forty-four','forty-five', 'forty-six',	'forty-seven', 'forty-eight', 'forty-nine', 'fifty', 'fifty-one','fifty-two','fifty-three', 'fifty-four',' fifty-five', 'fifty-six','fifty-seven',	'fifty-eight', 'fifty-nine']

  let str = "Today\'s date is " + months[date.getMonth()] + " " + date.getDate() + "th, " + date.getFullYear() + ". It is " + hours[date.getHours()] + " " + minutes[date.getMinutes()] + " in the " + timeOfDay + ".";

  return str;
};

// Write tests here:

assert(1 < 2);
assert(1 + 2 === 3);
assert([2, 3][0] === 2);
console.log(factorial(3));
assert (factorial(3) === 6); 
console.log(zip([1,2,3],[5,6,7]));
//assert(zip([1,2,3],[5,6,7]) === [[ 1, 5 ], [ 2, 6 ], [ 3, 7 ] ])
console.log(uniqueOnes(["Marwa", "Jena", "Rana", "Jena"]))
console.log(reverse("marwa"));
console.log(unzip([[ 1, 5 ], [ 2, 6 ], [ 3, 7 ] ]));
console.log(tokenize("Hello there, the name's Marwa"));
console.log(announceDate());
console.log(shiftRight("Hello", 3));
