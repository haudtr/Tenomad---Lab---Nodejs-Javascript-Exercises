const fibonacci = function(a) {
    if(a<0) return 'OOPS'
    else{
        var n1=0,n2=1
        var tmp=n1+n2;
        for(let i=0;i<a;i++){
            n1=n2;
            n2=tmp;
            tmp=n1+n2;
        }
        return n1;
    }
};

// Do not edit below this line
module.exports = fibonacci;
