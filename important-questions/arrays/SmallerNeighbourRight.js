//  Find Discount
function runProgram(input) {
    input=input.trim().split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let n=+input[l++];
        let arr=input[l++].trim().split(" ").map(Number);
       FindDiscount(n,arr)
        
    }
}

function FindDiscount(N,arr){
   let s=[]; let ans=[];
   for(let i=N-1; i>=0; i--){
       while(s.length>0 && s[s.length-1]>arr[i]){
           s.pop();
       }

   if(s.length==0){
       ans.push(0)
   }else{
       ans.push(s[s.length-1]);
   }
   s.push(arr[i]);
 }
//   console.log(ans.reverse().join(" "));
   let smaller=ans.reverse() 
   let bag=[];
   for(let i=0; i<N; i++){
       bag.push(arr[i]-smaller[i]);
   }
   console.log(bag.join(" "));
   // console.log(arr)
   // console.log(smaller)
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
