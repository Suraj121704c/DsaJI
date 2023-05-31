 
function runProgram(input) {
    input=input.trim().split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let [n,k]=input[l++].trim().split(" ").map(Number);
        let arr=input[l++].trim().split(" ").map(Number);
        let charge=+input[l++];
        FriendShip(n,k,arr,charge)
    }
}
function FriendShip(n,k,arr,charge){
    let Total=arr.reduce((acc,current)=>{
        acc+=current;
        return acc;
    })
    Total=Total-arr[k];
    let half=Math.floor(Total/2);
    
    if(charge>half){
        console.log(charge-half);
    }else{
        console.log("Bon Appetit");
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
 