function runProgram(input){
    input=input.split("\n")
    let [m,n]=input[0].split(" ").map(Number)
    let line=1;
    let matrix=[];
    for(let i=0; i<m; i++){
     matrix.push(input[line++].split(" ").map(Number))
    }
    
    let max=0
    for(let i=0; i<matrix.length; i++){
        for(let j=0; j<matrix[i].length; j++){
             let count=Long(matrix,i,j,-1,0)
            max=Math.max(max,count)
        }
    }
   console.log(max)
 }
 function Long(matrix,row,col,prev_val,count){
     if(row<0 || col<0 || row>=matrix.length || col>=matrix[0].length){
         return count;
     }
     if(matrix[row][col]<=prev_val){
         return count;
     }
        let top=Long (matrix,row-1,col,matrix[row][col],count+1)
        let bottom=Long (matrix,row+1,col,matrix[row][col],count+1)
        let left=Long (matrix,row,col-1,matrix[row][col],count+1)
        let right=Long (matrix,row,col+1,matrix[row][col],count+1)
        let max=Math.max(left,right,top,bottom)
         return max
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