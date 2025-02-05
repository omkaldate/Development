console.log(" check the js ");

///////////////////////////////////////////////////////////////////////////////////////////////////

//let reg = /hello/;       // g-global  i- case in sensitive
// console.log(reg);
// console.log(reg.source);

//let string = "Heloo.....this is a string name for searching helo ";

//let result = reg.exec(string);   // return array of object so we can also use objects
// console.log(result);

// result = reg.exec(string);
// console.log(result);

// result = reg.exec(string);
//if(find){
// console.log(result.input);   
//}

///////////////////////////////////////////////////////////////////////////////////////////////////

// let find = reg.test(string);     // if contains then return true else return false
// console.log(find);

///////////////////////////////////////////////////////////////////////////////////////////////////

// let reg = /hello/g;  
// let  str = "this is the hello word used for printing hello";
// let result = str.match(reg);     // reverse       // returns the array of results or null
// console.log(result);

//////////////////////////////////////////////////////////////////////////////////////////////////

// let reg = /hello/g;  
// let  str = "this is the hello word used for printing hello";
// let result = str.search(reg);    // reverse  // return index of first match or return -1
// console.log(result);

///////////////////////////////////////////////////////////////////////////////////////////////////

let reg = /hello/g;   // can use i for only forst replacement
let  str = "this is the hello word used for printing hello";
let result = str.replace(reg, "byoby");    // reverse  // return replaced string with all replacemrnt
console.log(result);

