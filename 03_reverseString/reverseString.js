const reverseString = function(str) {
    // var newStr = ''
    // for(let i = str.length-1;i>=0;i--){
    //     newStr += str[i]
    // }
    // return newStr;

    return (str === '') ? '' : reverseString(str.substr(1)) + str.charAt(0);

    //return str.split("").reverse().join("");
};

// Do not edit below this line
module.exports = reverseString;
