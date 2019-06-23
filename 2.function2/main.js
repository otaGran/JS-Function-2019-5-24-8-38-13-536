function palindrome(message){
    // wirte your code here
    var res = true;
    for(var i = 0;i<message.length;i++){
        if(i>=message.length/2)
            break;

        if(message[i]!==message[message.length-i-1]){
            res = false;
        }
    }
    console.log(res)
}
palindrome('hello'); // should return false
palindrome('abcba'); // should return true
