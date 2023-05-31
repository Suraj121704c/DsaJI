 
function runProgram(input) {
    input = input.trim().split("\n");
   let tc=+input[0];
   let l=1;
   for(let i=0; i<tc; i++){
       let [n,k]=input[l++].trim().split(" ").map(Number);
       let str=input[l++].trim().split("")
       let ans=NearPalindrome(n,k,str);
       ans ? console.log("True") : console.log("False");
   }  
}

function NearPalindrome(n,k,s){
    let i = 0;
  let j =  n - 1;
  let operations = 0;

  while (i < j) {
    if (s[i] !== s[j]) {
      operations++;
    }
    i++;
    j--;
  }

  return operations <= k;
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
 