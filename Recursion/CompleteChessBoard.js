// 4
// Q...
// ....
// ....
// ..Q.
function runProgram(input) {
    input=input.split("\n");
    let N=+input[0];
    let l=1;
    let mtr=[];
    for(let i=0; i<N; i++){
        mtr.push(input[l++].split(" "))
    }
   let ans= canPlaceQueens(mtr);
   ans ? console.log("YES") : console.log("NO");
  }
  function canPlaceQueens(board) {
      
    const N = board.length;
    if(N==1){
        return true
    }
    const cols = Array(N).fill(false)
   
    const diag1 = Array(2*N-1).fill(false);
    const diag2 = Array(2*N-1).fill(false);
   
    function placeQueens(row) {
      if (row === N) {
        return true;
      }
  
      for (let col = 0; col < N; col++) {
        if (board[row][col] === 'Q' || cols[col] || 
              diag1[row+col] || diag2[row-col+N-1]) {
               continue;
        }
  
        board[row][col] = 'Q';
        cols[col] = true;
        diag1[row+col] = true;
        diag2[row-col+N-1] = true;
  
        if (placeQueens(row+1)) {
          return true;
        }
  
        board[row][col] = '.';
        cols[col] = false;
        diag1[row+col] = false;
        diag2[row-col+N-1] = false;
      }
  
      return false;
    }
  
    return placeQueens(0);
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
   