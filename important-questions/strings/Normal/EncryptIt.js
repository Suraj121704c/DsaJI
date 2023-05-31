// Encrypt It

function EncryptIt(str,n){
    // console.log(str);
let small="abcdefghijklmnopqrstuvwxyz"; 
let cap="ABCDEFGHIJKLMNOPQRSTUVWXYZ"; 
let num="0123456789";

small=small.split("");
cap=cap.split("");
num=num.split("");
//  All-convoYs-9-be:Alert1.
//  4
for(let i=0; i<str.length; i++){
  if(cap.includes(str[i])){
      let index=cap.indexOf(str[i]);
      index+=n;
      index=index%26;
      str[i]=cap[index];
  }
 else if(small.includes(str[i])){
      let index=small.indexOf(str[i]);
      index+=n;
      index=index%26;
      str[i]=small[index];
  }
 else if(num.includes(str[i])){
      let index=num.indexOf(str[i]);
      index+=n;
      index=index%10;
      str[i]=num[index];
  }
}
console.log(str.join(""))

}
function runProgram(input){
input=input.split("\n");
let str = input[0].split("");

let n=+input[1];
EncryptIt(str,n);
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