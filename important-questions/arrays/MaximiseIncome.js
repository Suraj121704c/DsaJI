//Maximise Income 
function runProgram(input) {
    input=input.split("\n");
    let [N,k] = input[0].split(" ").map(Number);
    let arr  = input[1].split(" ").map(Number);
    fun(N,k,arr);
}
function fun(N,k,arr){
    arr=arr.sort((a,b)=> a-b);
    
    for(let i=0; i<N; i++){
        if(arr[i]<0 && k>0){
            arr[i]=-arr[i];
            k--;
        }
    }
    
      if (k % 2 !== 0) {
        const min = Math.min(...arr);
        for (let i = 0; i < N; i++) {
          if (arr[i] === min) {
            arr[i] = -arr[i];
            break;
          }
        }
      }
    //   console.log(arr)
   let total = arr.reduce((acc,current)=>{
      acc+=current;
      return acc;
    },0)
    console.log(total)
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
 