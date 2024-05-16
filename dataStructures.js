// Array
// Array

const arrayStrings = ['a', 'b', 'c', 'b'];

// array methods: BigO
arrayStrings[2]; // look-up: O(1)
arrayStrings.push("e"); // add "e" at the end: O(1) NBNBNB: O(n) if Static Array
arrayStrings.pop(); // remove last: O(1)
arrayStrings.unshift("x"); // add "x" at the start of array: O(n)
arrayStrings.shift(); // Oremove first index in sarray: O(1)
arrayStrings.splice(2, 0, "splice") // insert "splice" after index2: O(n/2) = O(n)

console.log(arrayStrings);

// Static Array - memory allocated (array lewngth) at initialization. 
// Dynamic Array - automatically allocates memory on change 

// reverse string test
// reverse string test

function reverseString(str) {
  const reversedString = [];
  let index = 0;
  
  if (str.length < 2 || typeof str !== "string") return console.log(":(");

  for (let i = str.length - 1; i >= 0; i--) {
    reversedString[index] = str[i];
    index++;
  }

  console.log(str.split(""));
  console.log(reversedString); 
};

reverseString("hei");
reverseString("");
reverseString(false);
reverseString(9);

((str) => console.log([...str].reverse().join("")))("hello world");
((str) => console.log([...str].reverse().join("")))("dlrow olleh");