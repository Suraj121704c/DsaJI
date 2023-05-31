// Delete Nth node from end
  
// You are given a Linked list of size N and an integer K. Your task is to delete the Kth node from the end and return the head of this new Linked list.
// Input
// Input Format
// The first line of the input contains an integer t - denoting the number of testcases.
// The next 2*t lines contain the description of the t testcases.
// The first line contains two integers N and K - the size of the Linked list and the position.
// The second line contains N space separated integers - denoting the N elements of the Linked list.
// Constraints
// 1st 1000
// • 1 ≤ N ≤ 1000


const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var deleteNthFromEnd = function (head1, k) {
     let fast=head1;
     let slow=head1;
     
     for(let i=0; i<k; i++){
         fast=fast.next;
     }
 
     if(!fast){
         return head1.next;
     }
         while(fast.next){
             fast=fast.next;
             slow=slow.next;
         }
   
     slow.next=slow.next.next;
     return head1;
    
};


