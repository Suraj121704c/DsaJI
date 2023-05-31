 
function runProgram(input) {
    input=input.split("\n");
    let N=+input[0];
    let str=input[1];
    FindValue(N,str);
}
function FindValue(N,str){
    let small="abcdefghijklmnopqrstuvwxyz";
    let big=small.toUpperCase();
    // console.log(small)
    // console.log(big)
    let sum=0;
    for(let i=0; i<str.length; i++){
        for(let j=0; j<small.length; j++){
            if(str[i]==big[j]){
                sum+=-(j+1)
            }
            if(str[i]==small[j]){
                sum+=j+1;
            }
        }
    }
    console.log(sum);
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
 