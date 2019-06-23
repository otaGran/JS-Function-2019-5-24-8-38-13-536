function alphabetSort(message){
    // wirte your code here
    var codes = message.split("");

    codes.sort();
    for (var key in codes)
        console.log(codes[key]);

}
alphabetSort('hello'); // should return 'ehllo'
