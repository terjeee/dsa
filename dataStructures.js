// - Array
// - Array

const arrayStrings = ['a', 'b', 'c', 'b'];

// array methods: BigO
arrayStrings[2]; // look-up: O(1)
arrayStrings.push("e"); // add "e" at the end: O(1) NBNBNB: O(n) if Static Array
arrayStrings.pop(); // remove last: O(1)
arrayStrings.unshift("x"); // add "x" at the start of array: O(n)
arrayStrings.shift(); // remove first index in sarray: O(n)
arrayStrings.splice(2, 0, "splice") // insert "splice" after index2: O(n/2) = O(n)

// console.log(arrayStrings);

// Static Array - memory allocated (array lewngth) at initialization. 
// Dynamic Array - automatically allocates memory on change 

// - reverseString
// - reverseString 

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

// reverseString("hei");
// reverseString("");
// reverseString(false);
// reverseString(9);
// ((str) => console.log([...str].reverse().join("")))("hello world");
// ((str) => console.log([...str].reverse().join("")))("dlrow olleh");

// mergeSortedArray
// mergeSortedArray

function mergeSortedArrays(array1, array2) {
  const mergedArray = [];

  let array1Index = 0
  let array2Index = 0
  let array1Item = array1[array1Index];
  let array2Item = array2[array2Index];

  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;
  
  while (array1Item || array2Item) {
    if (!array2Item || (array1Item < array2Item)) {
      mergedArray.push(array1Item);
      array1Index++;
      array1Item = array1[array1Index];
    } else {
      mergedArray.push(array2Item);
      array2Index++;
      array2Item = array2[array2Index];
    }
  }

  return mergedArray;
}

// console.log(mergeSortedArrays([0, 3, 4, 31], [4, 4, 4, 6, 30]))


// Linked list
// Linked list

class Node {
  constructor(value) {
    this.value = value,
    this.next = null
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null
    }
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }
}

const myLinkedList = new LinkedList(1);
console.log(myLinkedList);
console.log(myLinkedList.append(2));
console.log(myLinkedList.append(3));
console.log(myLinkedList.prepend(0));