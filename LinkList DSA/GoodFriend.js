const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};
// Complete the function below
var evenOddMix = function (head) {
    let index=1
    let curr=head
    while(curr!==null){
 
     if(index%2==0&&curr.data%2==0){
        return false
    }
    if(index%2!=0&&curr.data%2!==0){
        return false
    }
    curr=curr.next
    index++
    }
    return true
};