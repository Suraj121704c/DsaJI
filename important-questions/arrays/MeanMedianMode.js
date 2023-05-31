 
function runProgram(input) {
    input = input.trim().split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let n=+input[l++];
        let arr=input[l++].trim().split(" ").map(Number);
      const {mean,median,mode}=  MeanMedianMode(n,arr);
      console.log(mean+" "+median+" "+mode )
    }
 }
 function  MeanMedianMode(n,arr) {
   // Calculate Mean
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
     sum += arr[i];
   }
   const mean = Math.floor(sum / arr.length);
 
   // Calculate Median
   const sortedArr = arr.sort((a, b) => a - b);
   
   const middleIndex = Math.floor(sortedArr.length / 2);
   
   const median =
     sortedArr.length % 2 === 0
       ? (sortedArr[middleIndex - 1] + sortedArr[middleIndex]) / 2
       : sortedArr[middleIndex];
   // 1 2 3 4 5 6      7/2=3.5
   //     2 3 
   
   // Calculate Mode
   let modes=  FindMode(n,arr);
  
   return {
     mean: Math.round(mean),
     median: Math.floor(median),
     mode: Math.min(...modes)
   };
 }
  
 function FindMode(n,arr){
     let obj={};
     
     for(let i=0; i<n; i++){
         if(obj[arr[i]]==undefined){
             obj[arr[i]]=1;
         }else{
             obj[arr[i]]++;
         }
     }
     
     // console.log(obj);
     let max=-Infinity;
     for(let k in obj){
         if(obj[k]>max){
             max=obj[k];
         }
     }
     
     let modes=[];
     for(let k in obj){
         if(obj[k]==max){
             modes.push(k);
         }
     }
     modes=modes.map(Number);
     return modes;
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
  