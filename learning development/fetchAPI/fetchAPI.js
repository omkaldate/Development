console.log("check js file");

let myBtn = document.getElementById('mybtn');
let content = document.getElementById('content');

// function getData(){
//     console.log("starting get data");
//     let url = "https://api.github.com/users";
//     fetch(url).then((response)=>{
//         console.log("in first then");
//             return response.text();
//     }).then((data)=>{
//         console.log("in second then");
//         console.log(data);
//     })
// }

// console.log("before get data");
// getData();
// console.log("after get data");



// function getData(){
//     let url = "https://api.github.com/users";

//     fetch(url).then((response)=>{
//             return response.json();
//     }).then((data)=>{
//         console.log(data);
//     })
// }
// getData();


function postData(){
    let url = "https://reqres.in/api/users";

    data = `{
    "name": "chaitya the don",
    "job": "student",
    "createdAt": "4335-32454-43254-43254-4532"
}`;

    let params = {
        method : 'post',
        headers :{
            'content-type':'application/json'
        },
        body :data
    };

    fetch(url, params).then(response => response.json()).then(data => console.log(data)).catch(error => console.log("Sorry, an error occurred:", error));
}

postData();