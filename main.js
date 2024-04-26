// 1. Big O 

const arrayNemo = ["nemo"];
const arrayOfNames = ["dory", "bruce", "marlin", "nemo", "gill", "bloat", "nigel", "squirt", "darla", "hank"];
const largeArrayNemo = new Array(10000).fill("nemo");

function findNemo(array) {
  const t0 = performance.now() // measure performance !/2
  
  for (let i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("found Nemo @ spot: ", i);
    }
  }

  console.log(`miliseconds to find Nemo: ${performance.now() - t0}`) 
}

findNemo(arrayNemo);
findNemo(arrayOfNames);
findNemo(largeArrayNemo);

// ¤¤## //

