const repeatString = function(str,n) {
    var strT=''
    if(n<0) strT='ERROR'
    else{
        for(let i = 0;i<n;i++){
            strT+=str;
        }
    }
    return strT;
};

// Do not edit below this line
module.exports = repeatString;
