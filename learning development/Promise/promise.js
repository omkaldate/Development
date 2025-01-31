// console.log("learning promise");


// function func1(){
//     return new Promise(function(resolve, reject){
//         setTimeout(()=>{
//             const error = true;
//             if(!error){
//                console.log("function : your promise has been resolved");
//                resolve();
//             }
//             else{
//                 console.log("function : your promise has been rejected");
//                 reject('sorry not fulfilled');
//             }
//         },2000);
//     })
// }   

// func1().then(function(){
//     console.log("harry : thanks for resolving");
// }).catch(function(error){
//     console.log("harry : very bad..! error : " + error);
// })




/// converting out call back function to promise

const students =[
    {name : "om",
     subject: "java Script"
    },
    {name : "chai",
     subject: "java"
    }
];

function enrollStudent(student){
    return new Promise(function(resolve,reject){
        setTimeout(function(){
            students.push(student);
            console.log("student is resolved");
            error = false;
            if(!error){
                resolve();
            }
            else{
                reject();
            }
        }, 3000);
    })
   
}

function getStudens(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str +=`<li>name is = ${student.name} ,  subject is = ${student.subject}<li/>`
        })
        console.log("student is displayed");
        document.getElementById('student').innerHTML = str;
    },1000);
}

let student = {name : "don" , subject:"python"};
enrollStudent(student).then(getStudens()
).catch(function(){
    console.log("the error occured");
});


 let student1 = {name : "don of pune" , subject:"python of pune"};
enrollStudent(student1).then(function(){
    getStudens();
}).catch(function(){
    console.log("the error occured");
});


