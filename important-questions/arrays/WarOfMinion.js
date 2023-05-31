 
function runProgram(input) {
    input=input.split("\n");
    let N=+input[0];
    let arr=input[1].split("");
    WarOfMinion(N,arr);
}

function WarOfMinion(N,arr){
    // console.log(N,arr);
    let st=[];
    for(let i=0; i<N; i++){
        while(st.length>0 && st[st.length-1]==arr[i]){
            st.pop();
            i++;
        }
        
        st.push(arr[i]);
    }
    if(st.length==0 ||st==""){
        console.log(-1);
    }else{
        console.log(st.join(""));
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
 