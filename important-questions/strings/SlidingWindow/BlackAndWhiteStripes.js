// Black And White Stripes

// Description
// You have a stripe of checkered paper of length n. Each cell is either white or black.
// What is the minimum number of cells that must be recolored from white to black in order to have a segment of k consecutive black cells on the stripe?
// If the input data is such that a segment of k consecutive black cells already exists, then print 0.
// Input
// The first line contains an integer t (1st≤10)- the number of test cases.
// Next, descriptions of t test cases follow.
// The first line of the input contains two integers n and k (1≤ksn≤2-10^5). The second line consists of the letters 'W' (white) and 'B' (black). The line length is n.
// It is guaranteed that the sum of values n does not exceed 2-10^5.
// Output
// For each of t test cases print an integer - the minimum number of cells that need to be repainted from white to black in order to have a segment of k consecutive black cells.
 
// Hint
// In the first test case, s="BBWBW" and k=3. It is enough to recolor s3 and get s="BBBBW". This string contains a segment of length k=3 consisting of the letters 'B'.
// In the second test case of the example s="BBWBW" and k=5. It is enough to recolor $3 and $5 and get s="BBBBB". This string contains a segment of length k=5 consisting of the lett ers 'B'.
// In the third test case of the example s="BBWBW" and k=1. The string s already contains a segment of length k=1 consisting of the letters 'B'.


 
function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
    let [N,C]=input[l++].split(" ").map(Number);
    let str=input[l++];
        fun(N,C,str);
    }
  }
  function fun(N,C,str){
     let min=Infinity;
     for(let i=0; i<=N-C; i++){
         let count=0;
         for(let j=i; j<i+C; j++){
             if(str[j]=="W"){
                 count++;
             }
         }
         if(count<min){
             min=count;
         }
     }
     console.log(min);
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
   