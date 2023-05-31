 
function runProgram(input) {
    input=input.trim().split("\n");
    let [n,k]=input[0].trim().split(" ").map(Number);
    let prices=input[1].trim().split(" ").map(Number);
    let ans=MarkAndToys(n,k,prices)
    console.log(ans);
}
function  MarkAndToys(n,budget,prices){
 // Step 1: Sort the toy prices in ascending order
  prices.sort((a, b) => a - b);

  // Step 2: Initialize variables
  let totalToys = 0;
  let remainingBudget = budget;

  // Step 3: Iterate through the sorted list of toy prices
  for (let i = 0; i < prices.length; i++) {
    // Step 3a: Check if the toy can be afforded
    if (prices[i] <= remainingBudget) {
      // Step 3b: Buy the toy
      remainingBudget -= prices[i];
      totalToys++;
    } else {
      // Break out of the loop if the toy is unaffordable
      break;
    }
  }

  // Step 4: Return the maximum number of toys bought
  return totalToys;
}
if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
 