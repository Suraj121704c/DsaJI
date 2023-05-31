function check(n,ar){
    // console.log(n,ar)
    
    let set = new Set();
    function fun(ar, i ,sum){
        
        if(i==ar.length){
            set.add(sum)
        }
        else{
            fun(ar, i+1, sum+ar[i])
            fun(ar, i+1, sum)
        }
        
    }
    
    fun(ar, 0, 0)
    
    let dist=Array.from(set)
    dist.sort((a,b)=>a-b)
    console.log(dist.join(" "))
 }
 
 
 
 function runProgram(input) {
   input=input.split("\n")
   let n=+input[0]
   let ar=input[1].trim("").split(" ").map(Number)
   
   check(n,ar)
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
  
 