// Odd Adjacent Elements
function runProgram(input) {
    input=input.split("\n");
    let [n,m]=input[0].split(" ").map(Number);
    let l=1;
    let mtr=[];
    for(let i=0; i<n; i++){
        mtr.push(input[l++].split(" ").map(Number));
    }
    fun(n,m,mtr);
}
function fun(n,m,matrix){
  

  // Function to check if a cell is valid
  function isValid(i, j) {
    return i >= 0 && i < n && j >= 0 && j < m;
  }

  // Function to check if a cell has 2 or more adjacent odd elements
  function hasAdjacentOdds(i, j) {
    let count = 0;

    // Check adjacent cells
    if (isValid(i - 1, j) && matrix[i - 1][j] % 2 !== 0)
      count++;
    if (isValid(i + 1, j) && matrix[i + 1][j] % 2 !== 0)
      count++;
    if (isValid(i, j - 1) && matrix[i][j - 1] % 2 !== 0)
      count++;
    if (isValid(i, j + 1) && matrix[i][j + 1] % 2 !== 0)
      count++;

    return count >= 2;
  }

  // Transform the matrix
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (hasAdjacentOdds(i, j)) {
        matrix[i][j] = -matrix[i][j];
      }
    }
  }

//   console.log(matrix); 
 for(let i=0; i<n; i++){
     console.log(matrix[i].join(" "))
 }
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
