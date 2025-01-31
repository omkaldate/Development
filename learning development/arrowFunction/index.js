console.log("check the js file");

//const fun = function fun(){
//    console.log("this is inside the fun function");
//}
//fun();

// const fun = ()=>{
//     console.log("this is inside the fun function");
// }
// fun();

const greet = ()=>{
    return "good morning";
}
console.log(greet());

const eve = () => "good evening";
console.log(eve());

const obj = ()=>({name : "om"});
console.log(obj());

const obj1 = name => "hello " + name;
console.log(obj1("om"));

const obj2 =(name, name2) => "hello " + name + name2;
console.log(obj2("om ", "abhi"));