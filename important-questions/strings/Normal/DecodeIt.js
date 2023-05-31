// Decode the message
// Description
// Your friend sent you an encrypted message consisting of characters A, C, G and T only .You know the decoded message is the longest repetition in the sequence. That is a maximu m-length substring containing only one kind of character. Can you decode it?
// Ended

function decodeMessage(string) {
    //write code here
  let currentChar = string[0];
  let count = 1;
  let maxCount = 1;
  for (let i = 1; i < string.length; i++) {
    if (string[i] === currentChar) {
      count++;
    } else {
      currentChar = string[i];
      count = 1;
    }
    maxCount = Math.max(maxCount, count);
  }
  console.log(maxCount);

}
