const caesar = function(str,n) {
    var newStr = ''
    for(let i = 0;i<str.length;i++){
        var c = str.charCodeAt(i)
        if(c>=65&&c<=90){
            var a = n%26 +c ;
            if(a>90){
                a-=26
            }
            else if(a<65){
                a+=26
            }
            var b = String.fromCharCode(a)
        }
        else if(c>=97&&c<=122){
            var a = n%26 +c ;
            if(a>122){
                a-=26
            }
            else if(a<97){
                a+=26
            }
            var b = String.fromCharCode(a)
        }
        else{
            var b = str[i]
        }
        newStr += b;
    }
    return newStr;
};

// Do not edit below this line
module.exports = caesar;
