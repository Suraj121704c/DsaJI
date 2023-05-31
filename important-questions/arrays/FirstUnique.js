 
function runProgram(input) {
    input=input.split("\n");
    let tc=+input[0];
    let l=1;
    for(let i=0; i<tc; i++){
        let chars=input[l++].split("")
        Unique(chars);
    }
}

function Unique(chars){
    let obj={};
    for(let i=0; i<chars.length; i++){
        if(obj[chars[i]]==undefined){
            obj[chars[i]]=1;
        }else{
            obj[chars[i]]++;
        }
    }
    // console.log(obj);
    let unique="";
    for(let k in obj){
        if(obj[k]==1){
            unique=k;
            break;
        }
    }
    // console.log(unique);
    let flag=false;
    for(let i=0; i<chars.length; i++){
        if(chars[i]==unique){
            console.log(i);
            flag=true;
            return ;
        }
    }
    console.log(-1)
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
 