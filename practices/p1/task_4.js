console.log('----- while/do');
var i = 1;
while(i <= 20){
    i % 2 === 0 ? console.log(i) : null;
    i++;
}

console.log('----- do/while');
var i = 1;
do {
    i % 2 === 0 ? console.log(i) : null;
    i++;
}while(i <= 21)

console.log('----- for');
for(let i = 1; i <= 20; i++){
    i % 2 === 0 ? console.log(i) : null;
}


