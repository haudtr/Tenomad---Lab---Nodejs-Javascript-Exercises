const sumAll = function(a,b) {
    if(typeof a === "number"&&typeof b === "number"&&a>=0&&b>=0){
        // if(a>b) return sumRe(b,a)
        // else return sumRe(a,b)
        return a>b?sumRe(b,a) : sumRe(a,b)
    }
    else return "ERROR"
};

// var sumRe = function(a,b){
//     if(a===b) return a;
//     else return b+ sumRe(a,b-1);
// }
var sumRe = function(a,b){
    return (b-a+1)*(b+a)/2
}
// Do not edit below this line
module.exports = sumAll;
