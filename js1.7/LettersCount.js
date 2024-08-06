function lettersCount(str){
    const lowerSrt = str.toLowerCase();
    const counts = {};
    for(const i of lowerSrt){
        if(/[a-z]/.test(i)){
            if(counts[i]){
                counts[i]++;
            }
            else{
                counts[i] = 1;
            }
        }
    }

    return counts;
}

console.log(lettersCount('aAAbbccde'));