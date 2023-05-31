 
function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let [n,k]=input[l++].split(" ").map(Number);
        let arr=input[l++].split(" ").map(Number);
        fun(n,k,arr);
    }
 }
 function fun(n,k,arr){
     // console.log(n,k,arr);
     // Sliding Window topic
     let start=0;
     let end=0;
     let sum=0;
     let count=0;
     while(end<n){
          sum+=arr[end];
          while(sum>k){
              sum-=arr[start];
              start++;
          }
          count+= end-start+1;
          end++;
     }
     console.log(count);
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
  