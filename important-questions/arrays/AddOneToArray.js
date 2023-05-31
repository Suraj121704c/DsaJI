 
function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let N=+input[l++];
        let arr=input[l++].split(" ").map(Number);
       AddOne(N,arr);
    }
}
function AddOne(n,digits){
 
digits.reverse();
var carry = 0;
for (var i = 0; i < n; i++) {
  if (i === 0)
    digits[i] = digits[i] + 1 + carry;
  else if (carry !== 0)
    digits[i] = digits[i] + carry;

  carry = parseInt(digits[i] / 10);

  if (carry !== 0)
    digits[i] = digits[i] % 10;
}

if (carry !== 0)
  digits.push(carry);

digits.reverse();

 
  console.log(digits.join(" "));
 

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
 