console.log("js file check");

async function fun() {
    console.log("inside the function");
    const response = await fetch('https://api.github.com/users');
    console.log("before response");
    const user = await response.json();
    console.log("user resolved");
    return user;
}

console.log("before function");
let a = fun();
console.log("after function");
console.log(a);
a.then((data)=> console.log(data)); 
console.log("last line");