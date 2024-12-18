// - Array
// - Array

const arrayStrings = ["a", "b", "c", "b"];

// array methods: BigO
arrayStrings[2]; // look-up: O(1)
arrayStrings.push("e"); // add "e" at the end: O(1) NBNBNB: O(n) if Static Array
arrayStrings.pop(); // remove last: O(1)
arrayStrings.unshift("x"); // add "x" at the start of array: O(n)
arrayStrings.shift(); // remove first index in sarray: O(n)
arrayStrings.splice(2, 0, "splice"); // insert "splice" after index2: O(n/2) = O(n)

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
}

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

  let array1Index = 0;
  let array2Index = 0;
  let array1Item = array1[array1Index];
  let array2Item = array2[array2Index];

  if (array1.length === 0) return array2;
  if (array2.length === 0) return array1;

  while (array1Item || array2Item) {
    if (!array2Item || array1Item < array2Item) {
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
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      previous: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  list() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push({
        value: currentNode.value,
        previous: currentNode.previous,
        next: currentNode.next,
      });

      currentNode = currentNode.next;
    }

    return array;
  }

  listValues() {
    const array = [];
    let currentNode = this.head;

    while (currentNode !== null) {
      array.push(currentNode.value);

      currentNode = currentNode.next;
    }

    return array;
  }

  append(value) {
    const newNode = new Node(value);

    newNode.previous = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return this.list();
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.previous = newNode;
    this.head = newNode;
    this.length++;
    return this.list();
  }

  insert(index, value) {
    if (index <= 0) return this.prepend(value);
    if (index > this.length - 1) return this.append(value);

    const newNode = new Node(value);
    let currentNode = this.head;
    let nextNode = currentNode?.next;

    for (let i = 0; i < this.length - 1; i++) {
      if (index === i + 1) {
        newNode.next = currentNode.next;
        newNode.previous = currentNode;
        currentNode.next = newNode;
        nextNode.previous = newNode;
        this.length++;

        return this.list();
      }

      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
  }

  remove(index) {
    if (index < 0 || index > this.length - 1) return console.log("Index out of bounds");

    let currentNode = this.head;

    for (let i = 0; i < this.length; i++) {
      if (index === 0) {
        this.head = this.head.next;
        this.head.previous = null;

        this.length--;
        return this.list();
      } else if (index === this.length - 1) {
        this.tail = this.tail.previous;
        this.tail.next = null;

        this.length--;
        return this.list();
      } else if (index === i + 1) {
        const unwantedNode = currentNode.next;
        const nextNode = unwantedNode.next;
        currentNode.next = unwantedNode.next;
        nextNode.previous = currentNode;

        this.length--;
        return this.list();
      } else {
        currentNode = currentNode.next;
      }
    }
  }

  reverse() {
    // this.head = this.tail;
    // this.tail = this.head;

    if (!this.head.next) return this.list();

    this.tail = this.head;

    let firstNode = this.head;
    let secondNode = firstNode.next;

    while (secondNode) {
      const temp = secondNode.next;

      secondNode.next = firstNode;
      firstNode = secondNode;
      secondNode = temp;
    }

    this.head.next = null;
    this.head = firstNode;

    return this.list();

    // for (let i = 0; i < this.length; i++) {
    //   currentNode
    // }
  }
}

// const myLinkedList = new LinkedList(1);
// myLinkedList.append(2);
// myLinkedList.append(3);
// myLinkedList.prepend(0);
// myLinkedList.insert(1, 100);
// myLinkedList.insert(-50, -200);
// myLinkedList.insert(10, 300);
// myLinkedList.insert(10, 2727);
// myLinkedList.remove(0);
// myLinkedList.remove(1);
// myLinkedList.remove(-4000);
// myLinkedList.remove(4000);
// myLinkedList.remove(3);
// console.log(myLinkedList.list());
// console.log(myLinkedList.listValues());
// myLinkedList.reverse();
// console.log(myLinkedList.listValues());

//  Stack
//  Stack

class Node2 {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.previous = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.length < 1) return;

    return {
      top: this.top,
      bottom: this.bottom,
    };
  }

  push(value) {
    const newNode = new Node2(value);

    if (this.length < 1) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.previous = this.top;
      this.top.next = newNode;
      this.top = newNode;
    }

    this.length++;
  }

  pop() {
    if (this.length < 1) return;

    this.top = this.top.previous;
    this.top.next = null;

    this.length--;
  }
}

// const stackLinkedList = new StackLinkedList();

// console.log(stackLinkedList);
// stackLinkedList.push("1");
// stackLinkedList.push("2");
// console.log(stackLinkedList.peek());
// stackLinkedList.pop();
// console.log(stackLinkedList.peek());

class StackArray {
  constructor() {
    this.stack = [];
  }

  peek() {
    if (this.stack.length < 1) return null;

    return this.stack[this.stack.length - 1];
  }

  push(value) {
    this.stack.push(value);
    return this.stack;
  }

  pop() {
    if (this.stack.length < 1) return null;

    this.stack.pop();
    return this.stack;
  }
}

const stackArray = new StackArray();
console.log(stackArray.push(1));
console.log(stackArray.push(2));
console.log(stackArray.push(3));
console.log(stackArray.peek());
console.log(stackArray.pop());
console.log(stackArray.peek());
