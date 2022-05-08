
function fib(num){
    var x1 = 1;
    var x2 = 1;
    var temp = 0;
    var y = 0;
    while (y != num){
        if (y > num){
            return -1;
        }
        y = x2
        temp = x1 + x2;
        x1 = x2;
        x2 = temp;    
    }
    y = x2;
    return y;
}

const fs = require("fs");

fs.readFile("input.txt", "utf8", (err, data) => {
    if(err){
        console.error(err);
        return;
    }
    var ret = fib(parseInt(data));
    if (ret == -1){
        console.log("El numero no es parte de la secuencia");
    } else{
        console.log('F(', data, ") = ", ret);
    }
})


//const readline = require('readline').createInterface({
//    input: process.stdin,
//    output: process.stdout,
//  });
//  
//  readline.question(`Ingresa un Numero: `, name => {
//    var ret = fib(parseInt(name));
//    if (ret == -1){
//        console.log("El numero no es parte de la secuencia");
//    } else{
//        console.log('F(', name, ") = ", ret);
//    }
//    readline.close();
//  });
//  