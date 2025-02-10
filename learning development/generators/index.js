console.log("in the js file");

function* numberGen(){
    let i = 0;

    // yield 1;
    // yield 2;
    // yield 3;
    // yield 4;

    while(1){
        yield i++;
    }

}

let number = numberGen();
console.log(number.next());
console.log(number.next());
console.log(number.next().value);
console.log(number.next().value);
console.log(number.next());