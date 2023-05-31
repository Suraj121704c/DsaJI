import java.util.Scanner;
import java.util.Arrays;

class Main {
    public static void main(String args[] ) throws Exception {
        Scanner sc = new Scanner(System.in);
        int t = sc.nextInt();
        while(t-- >0){
            int m = sc.nextInt();
            int n = sc.nextInt();
            char[][] arr = new char[m][n];
            for(int i=0;i<m;i++){
                String s = sc.next();
                for(int j=0;j<n;j++){
                    arr[i][j] = s.charAt(j);
                }
            }
            String s = sc.next();
            char[] str = s.toCharArray();
            int[][] isVisited = new int [m][n];
            int f=0;
            for(int i=0;i<m;i++){
                for(int l=i;l<str.length;l+=m){
                    f=0;
                    for(int j=0;j<n;j++){
                        if(str[l]==arr[i][j] && isVisited[i][j]!=1){
                            isVisited[i][j]=1;
                            f=1;
                            break;
                        }
                    }
                    if(f==0)
                    break;
                }
                if(f==0)
                break;
            }
            if(f==1)
            System.out.println("Yes");
            else
            System.out.println("No");
        }
    }
}