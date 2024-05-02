// 1. O(n) - linear time complexity
// 1. O(n) - linear time complexity

const arrayNemo = ["nemo"];
const arrayOfNames = ["dory", "bruce", "marlin", "jon", "gill", "bloat", "nemo", "squirt", "darla", "hank"];
const largeArrayNemo = new Array(1000).fill("nemo");

function findNemo(array) {
  const t0 = performance.now(); // measure performance !/2

  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found Nemo @ spot: ", i);
    }
  }

  console.log(`miliseconds to find Nemo: ${performance.now() - t0}`);
}

// findNemo(arrayNemo); // O(n)
// findNemo(arrayOfNames); // O(n)
// findNemo(largeArrayNemo); // O(n)

// 2. O(1) - constant time complexity
// 2. O(1) - constant time complexity

const boxes = ["box0", "box1", "box2", "box3"];

function logFirstThreeBoxes(boxes) {
  console.log(boxes[0]); // operation 1
  console.log(boxes[1]); // operation 2
  console.log(boxes[2]); // operation 3
}

// logFirstThreeBoxes(boxes); // O(3) = O(1)

// 2. O(n^2) - quadratic time complexity
// 2. O(n^2) - quadratic time complexity

function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(`pair ${i}: ${array[i]}${array[j]}`)
    }
  }
} 

const letterArray = ["a", "b", "c", "d", "e"];
logAllPairsOfArray(letterArray);