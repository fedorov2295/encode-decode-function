const encode = function(str) {
    let n = 1;
    let result = str ? str[0] : '';
    for (let i = 0; i < str.length  ; i++) {
        if (str[i] == str[i + 1] && i != str.length-1) {
            n++;
        }
        else if (n != 1 && i != str.length-1) {
            result += (n);
            result += str[i + 1];
            n = 1;
        } else if (n == 1 && i != str.length-1){
            result += str[i + 1];
            n = 1;
        }
        else if (i == str.length-1 && n != 1){
            result += (n);
        }
    }
    return result;
}


const decode = function (str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        if (isNaN(str[i + 1])) {
            result += str[i];
        }
        else {
            let j = i + 1;
            let numberStr = '';
            while (!isNaN(str[j])) {
                numberStr += str[j];
                j++;
            }
            if (+numberStr != 0) {
                for (let k = 0; k < +numberStr; k++) {
                    result += str[i];
                }
            }
            i = j - 1;
        }
    }
    return result;
}

exports.decode = decode;
exports.encode = encode;