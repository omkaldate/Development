console.log("hello you are in js file");

// let fetchBtn = document.getElementById('fetchBtn');
// fetchBtn.addEventListener('click' ,buttonClickhandler);

//  function buttonClickhandler(){

//     console.log("you have clicked the button"); 
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json',true);    //open the object

//     xhr.onprogress = function(){           // optional  // what to do on progress
//         console.log("on progress");
//     }

//     xhr.onload = function(){      
//         if(this.status === 200){      // what to do when response is ready
//             console.log(this.responseText);
//         }
//         else{
//             console.log("some error occured");   
//         }
//     }

//     xhr.send(); 
//     console.log("we are done");
// }




//////////////////////////////////////////////////////////////////////////////////////////////
// let popBtn = document.getElementById('popBtn');
// popBtn.addEventListener('click' ,pophandler);

// function pophandler(){
//     console.log("you have clicked the pop button"); 
//     const xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://microsoftedge.github.io/Demos/json-dummy-data/64KB.json',true);    //open the object

//     xhr.onload = function(){      
//         if(this.status === 200){      // what to do when response is ready
//             let obj = JSON.parse(this.responseText);
//             console.log(obj);

//             let list = document.getElementById('list');
//             str ="";
//             for(key in obj){
//                 str+= `<li> name = ${obj[key].name} , language = ${obj[key].language} , id = ${obj[key].id},  bio = ${obj[key].bio},  version = ${obj[key].version} <li/>`;
//             }
//              list.innerHTML = str;
//         }
//         else{
//             console.log("some error occured");
//         }
//     }

//     xhr.send(); 
//     console.log("we are done fetching employee data");
// }


obj = {
    name : 'om',
    age : 27

};

console.log(obj["name"] , obj["age"]);