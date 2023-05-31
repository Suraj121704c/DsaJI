function check(n,ar){
    //console.log(n,ar)
    
    let AB=0
     let V=0
     let flag=true
     for(let i=0;i<n*6;i++){
         if(ar[i]%2!=0 &&flag==true){
             AB=AB+ar[i]
             flag=false
         }
         else if(flag==true){
             AB=AB+ar[i]
         }
         else if(ar[i]%2!=0&&flag==false){
             V=V+ar[i]
             flag=true
         }
         else{
             V=V+ar[i]
         }
         
         if((i+1)%6==0&&flag==true){
             flag=false
         }
         else if((i+1)%6==0&&flag==false){
             flag=true
         }
         
     }
     
     if(AB>V){
         console.log("AB de Villiers");
     }
     else if(V>AB){
         console.log("Virat Kohli")
     }
     else{
         console.log("Tie")
     }
    
}


function runProgram(input){
 input=input.split("\n")
     let tc=+input[0]
     let line=1
     for(let i=0;i<tc;i++){
         let n=+input[line]
         line++
         let ar=input[line].trim(" ").split(" ").map(Number)
         line++
         check(n,ar)
     }
 
}
if (process.env.USERNAME === "") {
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