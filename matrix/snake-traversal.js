// Matrix Traversal & Queries Ended
// Description

// You are given a matrix of size n x m , and two types of queries are to be performed on this matrix. The two types of queries are

// q = 1, for this type of query, the matrix is to be traversed, as shown in Fig. 1

// q = 2, for this type of query, the matrix is to be traversed as shown in Fig. 2

// Image

// Screenshot (55).png


// Input
// The first line of input contains T, the number of test case. The first line of each test case contains n, m and q, as declared in the problem statement.

// Next n lines contain space separated integers, denoting the values of the matrix.

// Constraints

// 1 <= T <= 10

// 1 <= N,M <= 500

// 1 <= A[i][j] <= 1000


// Output
// Print n x m space separated integers, denoting the elements of the matrix, on a new line.


// Sample Input 1 

// 2
// 3 3 1
// 1 2 3
// 4 5 6
// 7 8 9
// 3 3 2
// 1 2 3
// 4 5 6
// 7 8 9
// Sample Output 1

// 1 2 3 6 5 4 7 8 9 
// 3 2 1 4 5 6 9 8 7 

function masaiTraversalAndQueries(N, m, q, mtr){
    
    if(q==1){
        let bag1="";
        for(let i=0; i<N; i++){
            if(i%2==0){
                //forward loop
                for(let j=0; j<m; j++){
                    bag1+=mtr[i][j]+" ";
                }
            }else{
                for(let j=m-1; j>=0; j--){
                    bag1+=mtr[i][j]+" ";
                }
            }
        }
        console.log(bag1);
    }
    if(q==2){
        let bag2="";
        for(let i=0; i<N; i++){
            if(i%2==0){
                for(let j=m-1; j>=0; j--){
                    bag2+=mtr[i][j]+" ";
                }
            }else{
                for(let j=0; j<m; j++){
                    bag2+=mtr[i][j]+" ";
                }
            }
        }
        console.log(bag2)
    }
    
  
}
