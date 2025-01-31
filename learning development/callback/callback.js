console.log("in the js file");

const students =[
    {name : "om",
     subject: "java Script"
    },
    {name : "chai",
     subject: "java"
    }
];

function enrollStudent(student , callback){
    setTimeout(function(){
        students.push(student);
        callback();
    }, 3000);
}

function getStudens(){
    setTimeout(function(){
        let str = "";
        students.forEach(function(student){
            str +=`<li>name is = ${student.name} ,  subject is = ${student.subject}<li/>`
        })

        document.getElementById('student').innerHTML = str;
    },1000);
}

let student = {name : "don" , subject:"python"};
enrollStudent(student,getStudens);

let student1 = {name : "don of pune" , subject:"python of pune"};
enrollStudent(student1, getStudens);

//getStudens();

