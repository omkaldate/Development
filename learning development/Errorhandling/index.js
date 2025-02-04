console.log("starting of js");

let a ="hello om";
a = undefined;

if(a != undefined){
    throw new Error("this is not undefined");
}
else{
    console.log("this is undefined");
}

try {
    aklsdasdlknasdvn
} catch (error) {
    console.log("hello coder .... you are in catch.....!");
    console.log(error.message);
}
finally{
    console.log("it will if try will run or catch will run");
}