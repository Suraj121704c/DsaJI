function goatLatin(arr) {
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    const words = arr;
    let result = '';
    for (let i = 0; i < arr.length; i++) {
      let word = arr[i];
      let goatWord = '';
      if (vowels.includes(word[0])) {
        goatWord = word + 'ma';
      } else {
        goatWord = word.substring(1) + word[0] + 'ma';
      }
      goatWord += 'a'.repeat(i + 1);
      result += goatWord + ' ';
    }
    console.log(result) ;
  }
  function runProgram(input){
   input=input.split("\n");
   let tc=+input[0];
   let line=1;
   for (let i=0; i<tc; i++){
       let arr= input[line++].trim().split(" ");
       goatLatin(arr);
   }
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