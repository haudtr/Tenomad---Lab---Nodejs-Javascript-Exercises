const removeFromArray = function(arr,...ns) {
    for (let n of ns){
        var i=0;
        while(i<arr.length){
            if(arr[i]===n) arr.splice(i, 1);
            else i++;
        }
        // for(let i=0;i<arr.length;i++){
        //     if(arr[i]===n) arr.splice(i, 1);
        // }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
