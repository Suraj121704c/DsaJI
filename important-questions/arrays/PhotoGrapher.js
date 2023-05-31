// Photographer
// 3
// 3 6
// 1 3 9 10 12 16
// 3 1
// 2 5 2 2 2 5
// 1 2
// 8 6
function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let [n,x]= input[l++].split(" ").map(Number);
        let ar = input[l++].split(" ").map(Number);
        fun(n,x,ar)
    }
}
function fun(n, x, ar) {
    ar.sort((a, b) => a - b);
    let flag = true;
    for (let i = 0; i < n; i++) {
        if (Math.abs(ar[i] - ar[n + i]) < x) {
            flag = false;
            break;
        }
    }
    if (flag) {
        console.log("YES");
    } else {
        console.log("NO");
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
 