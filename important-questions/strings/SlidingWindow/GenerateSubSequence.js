 
function runProgram(input) {
    input=input.trim().split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let [n,k] = input[l++].trim().split(" ").map(Number);
        let arr = input[l++].trim().split(" ").map(Number);
        console.log(checkDivisibility(n,arr, k))
    }
 }
 
  function checkDivisibility(n,a, k) {
   
 
   // Generate all possible non-empty subsequences
   for (let i = 0; i < (1 << n); i++) {
     let sum = 0;
     let bag=[];
     for (let j = 0; j < n; j++) {
       // Check if the jth element is included in the current subsequence
       if (i & (1 << j)) {
         sum += a[j];
         bag.push(a[j]);
       }
     }
     //  console.log(bag)
     // Check if the sum is divisible by k
     if (sum % k === 0 && sum !== 0) {
       return "YES";
     }
   }
 
   return "NO";
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
  