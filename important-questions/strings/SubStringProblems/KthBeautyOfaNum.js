//  Find the K-Beauty of a Number
function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let [str,k]= input[l++].split(" ") 
        // console.log(str,k)
         k=+k;
        fun(str,k);
    }
}

function fun(str,k){
  const num = parseInt(str);
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    for (let j = i; j < str.length + 1; j++) {
      if (
        str.substring(i, j).length === k &&
        parseInt(str.substring(i, j)) !== 0 &&
        num % parseInt(str.substring(i, j)) === 0
      ) {
        count++;
        // console.log(str.substring(i,j))
      }
    }
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
 