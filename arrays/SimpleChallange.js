function check(A){
    let n = A.length;
  let max1 = Number.MIN_SAFE_INTEGER;
  let max2 = Number.MIN_SAFE_INTEGER;
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < n; i++) {
    max1 = Math.max(max1, A[i] + i);
    min1 = Math.min(min1, A[i] + i);
    max2 = Math.max(max2, A[i] - i);
    min2 = Math.min(min2, A[i] - i);
  }
  return Math.max(max1 - min1, max2 - min2);
}



function runProgram(input) {
  // Write code here
  input=input.split("\n")
  let tc=+input[0]
  let line=1
  
  for(let i=0;i<tc;i++){
      let n=+input[line]
      line++
      
      let ar=input[line].trim().split(" ").map(Number)
      line++
      
      let ans=check(ar)
      console.log(ans)
  }
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