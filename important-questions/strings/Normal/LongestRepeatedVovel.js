function longestRepeatedVowel(N, str) {
    let vowel=["a","e","i","o","u"];
    let count=0;
    let pre="z";
    let max=0;
    for(let i=0; i<N; i++){
        if(vowel.includes(str[i]) && str[i]==pre){
            count++;
        }else{
            if(count>max && vowel.includes(pre)){
                max=count;
            }
            pre=str[i];
            count=1;
        }
    }
    if(count>max && vowel.includes(pre)){
        max=count;
    }
    console.log(max);
}



