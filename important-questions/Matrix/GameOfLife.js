 
function runProgram(input) {
    input=input.trim().split("\n");
    let [rows,cols]=input[0].trim().split(" ").map(Number);
    let l=1;
    let board=[];
    for(let i=0; i<rows; i++){
        board.push(input[l++].trim().split(" ").map(Number))
    }
    
   const nextState = gameOfLife(rows,cols,board);
   // console.log(nextState);
    PrintBoard(rows,cols,nextState)
   }
   
   function PrintBoard(rows,cols,board){
       for(let i=0; i<rows; i++){
           console.log(board[i].join(' '));
       }
   }
   
   function gameOfLife(rows,cols,board) {
    
     
     // Create a copy of the board to store the next state
     const nextBoard = [...board.map(row => [...row])];
   
     // Helper function to count live neighbors
     function countLiveNeighbors(row, col) {
       let count = 0;
       for (let i = row - 1; i <= row + 1; i++) {
         for (let j = col - 1; j <= col + 1; j++) {
           if (i >= 0 && i < rows && j >= 0 && j < cols && !(i === row && j === col)) {
             count += board[i][j];
           }
         }
       }
       return count;
     }
   
     // Update the next state of the board
     for (let i = 0; i < rows; i++) {
       for (let j = 0; j < cols; j++) {
         const liveNeighbors = countLiveNeighbors(i, j);
         if (board[i][j] === 1) {
           // Any live cell with fewer than two live neighbors dies
           // Any live cell with more than three live neighbors dies
           if (liveNeighbors < 2 || liveNeighbors > 3) {
             nextBoard[i][j] = 0;
           }
         } else {
           // Any dead cell with exactly three live neighbors becomes a live cell
           if (liveNeighbors === 3) {
             nextBoard[i][j] = 1;
           }
         }
       }
     }
   
     return nextBoard;
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
    