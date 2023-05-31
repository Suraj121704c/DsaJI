function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let [n,m]=input[l++].split(" ").map(Number);
        let arr1=input[l++].split(" ").map(Number);
        let arr2=input[l++].split(" ").map(Number);
        fun(n,m,arr1,arr2);
    }
}
function fun(n,m,arr1,arr2){
    let ar1=arr1.filter((el)=> !arr2.includes(el))
    
    let uniqueArr1 = ar1.filter((value, index, self) => {
  return self.indexOf(value) === index;
   });
  uniqueArr1=uniqueArr1.sort((a,b)=> a-b)
console.log(uniqueArr1.join(" ")); 
   
    let ar2=arr2.filter((el)=> !arr1.includes(el))
    
    let uniqueArr2 = ar2.filter((value, index, self) => {
  return self.indexOf(value) === index;
   });
  uniqueArr2=uniqueArr2.sort((a,b)=> a-b)
  console.log(uniqueArr2.join(" ")); 
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