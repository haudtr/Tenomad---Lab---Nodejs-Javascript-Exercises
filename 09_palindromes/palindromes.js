const palindromes = function (str) {
    var newStr = str.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(" ").join("").toLowerCase()
    var n =newStr.length
    for(let i=0;i<n/2;i++){
        if(newStr[i]!=newStr[n-1-i])
            return false;
    }
    return true
};

// Do not edit below this line
module.exports = palindromes;
