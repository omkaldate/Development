// console.log("hello bro");
// let numbers= [1,2,3,4,5];

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }
// console.log("***********");


// numbers.forEach(e => console.log(e));
// console.log("***********");

// numbers.forEach(function(x, y, z){
//     console.log(x, y, z);
// });
// console.log("***********");


// let obj = {
//     name : "don",
//     age : 15,
//     number: 817540928437,
//     arr : [1,2,3,4,5]
// }

// console.log(obj);
// console.log("***********");

// for(let key in obj){
//     console.log(`key = ${key}  val = ${obj[key]}`);
// }
// // console.log("***********");


// // console.log(obj.name);
// // console.log(obj.arr);
// // console.log(obj.arr[0]);
// console.log("********");

// function wish( name){
//     console.log(`hello mr ${name} how are you well you are fine`);
// }
// let value= "om";
// wish(value);
// console.log("********");



// let birthday = function(name="xxxxx"){
//     console.log(`happy birthday mr ${name} wishing you happy birthday`);
//     return 100;
// }
// console.log(birthday());


// console.log("hello");
// //alert("hello men");
// let name = prompt("senter your name men");
// console.log(name);

 

// let ele = document.getElementById('one');
// console.log(ele);

// let x= document.querySelector('.parent');
// console.log(x);

//  let y= document.getElementsByClassName('child');
//  console.log(y);

// let ele = document.querySelector(".parent");
// //console.log(ele.childNodes);  // shous all text,coments
// console.log(ele.children[0].children[0].children);     //showa only child
// console.log(ele.firstChild);
// console.log(ele.firstElementChild);
// console.log(ele.childElementCount);

// let parent = document.querySelector(".parent");
// console.log(parent.firstElementChild.nextElementSibling);



// let ele = document.createElement("li");
// ele.className="not";
// ele.id = "l4";
// // ele.innerText = "thi is 4th line aded by java script";
// ele.innerHTML = "<b>thi is 4th line aded by java script<b>";

// console.log(ele);

// let ul = document.querySelector(".xyz");
// console.log(ul.appendChild(ele));

// let ele2 = document.createElement("h3");
// ele2.innerText = "this is h3 heading after replacing it";
// ele2.id = "newHeading"
// console.log(ele2);

// let rep = document.getElementById("heading");
// console.log(rep);
// rep.replaceWith(ele2);

// let a = document.createElement('a');
// let link = document.createTextNode("This is link");
// //a.innerText = "this this this"
// a.append(link);
// a.href = "https://www.geeksforgeeks.org";
// //a.title = "This is Link";

// console.log(a);
// document.body.appendChild(a);

// document.getElementById('heading').addEventListener('mouseover',function(e){   // there is many events like click
//     console.log('you have clicked the heading');
//     console.log(e.target);
// });


let heading = document.getElementById('heading');
heading.addEventListener('click', fun);

function fun(e){
console.log(e.target);
}