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


// let heading = document.getElementById('heading');
// heading.addEventListener('click', fun);

// function fun(e){
// console.log(e.target);
// }


// console.log(Date());

// // create div and inject after the heading
// let divEle = document.createElement('div');
// let text = document.createTextNode('this is my element...  click here to edint');
// divEle.setAttribute('id', 'elem');
// divEle.setAttribute('style' , 'border: 2px solid black; width:154px; margin:34px; padding:23px');

// let container = document.querySelector('parent');
// let first = document.getElementById('one');

// divEle.appendChild(text);
// //container.insertBefore(divEle, first);

// console.log(divEle, text, first);


// let car = {
//     name : "BMW",
//     speed : 400,
//     engine : "v8",

//     run : function(){
//         console.log("car is running");
//     }
// }

//console.log(car);

// function Car(name, speed){
//     this.name = name;
//     this.speed = speed;
//     this.run = function(){
//         console.log(`${name} is running`);
//     }
// }

// obj = new Car("BMW",400);
// console.log(obj);


// inheritance using prototype /////////////////////////////////////////////////

// function Employee(name,salary,age){
//     this.name = name;
//     this.salary = salary;
//     this.age = age;
// }

// Employee.prototype.slogan = function(){
//     return `you are the best and we are making you bestest`;
// }
// let obj = new Employee("om",30000,22);
// console.log(obj);
// console.log(obj.slogan);

// function Programmer(name,salary,age,language){
//     Employee.call(this,name,salary,age);
//     this.language = language;
// }

// Programmer.prototype = Object.create(Employee.prototype);
// Programmer.prototype.constructor = Programmer;
// let obj2 = new Programmer("omyaa",25,232456,"java");
// console.log(obj2);
// console.log(obj2.slogan);

/////////////////////////////////////////////////////////////



class Employee {
    constructor(name, age, salery) {
        this.name = name;
        this.age = age;
        this.salery = salery;
    }

    slogan() {
        return `i am ${this.name} and i am employee of this company`;
    }

    static add(a, b) {
        return a + b;
    }
}

// obj = new Employee("om", 23, 54321);
// console.log(obj);
// console.log(obj.slogan());
// console.log(Employee.add(5,6));

class Programmer extends Employee {
    constructor(name, age, salery, language) {
        super(name, age, salery);
        this.language = language;
    }

    favouriteLanguage() {
        if (this.language = "java") return "java";
        else return "java script";
    }

    static multiply(a, b) {
        return a * b;
    }
}

obj2 = new Programmer("ommmm", 33, 543, "java");
console.log(obj2);
console.log(obj2.favouriteLanguage());
console.log(Programmer.multiply(5,5));