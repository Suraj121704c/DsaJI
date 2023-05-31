function StringComparison(n1,arr1 ,n2,arr2){
    //   console.log(n1,arr1 ,n2,arr2) 
    
      let minLength = Math.min(n1, n2);
    //   console.log(minLength);
      for (let i = 0; i < minLength; i++) {
        if (arr1[i] < arr2[i]) {
          return "No Swap!";
        } else if (arr1[i] > arr2[i]) {
          return "Swap!";
        }
      }
      if (n1 <= n2) {
        return "No Swap!";
      } else {
        return "Swap!";
      }
      }
    function runProgram(input){
     input=input.split("\n");
     let tc=+input[0];
     let line=1;
     for(let i=0; i<tc; i++){
         let n1= +input[line++];
          let arr1= input[line++].trim().split(" ");
       let n2= +input[line++];
          let arr2= input[line++].trim().split(" ");
       console.log(StringComparison(n1,arr1 ,n2,arr2)) ; 
         
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