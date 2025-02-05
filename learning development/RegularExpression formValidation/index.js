console.log("check the js file");

const name = document.getElementById('name');
const eMail = document.getElementById('eMail');
const pNumber = document.getElementById('pNumber');

// const car = document.getElementById('car');
// const info = document.getElementById('info');
// const address = document.getElementById('address');

let vname = false;
let veMail = false;
let vpNumber = false;

name.addEventListener('blur', () => {
    console.log("name is blurred");
    let regex = /^[a-zA-Z][a-zA-Z0-9]{1,9}$/; 
    let str = name.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("name is valid");
        name.classList.remove('is-invalid');
        vname = true;
    }
    else{
        console.log("name is not valid");
        name.classList.add('is-invalid');
        vname = false;
    }
});

eMail.addEventListener('blur', () => {
    console.log("email is blurred");
    let regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let str = eMail.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("email is valid");
        eMail.classList.remove('is-invalid');
        veMail = true;
    }
    else{
        console.log("email is not valid");
        eMail.classList.add('is-invalid');
        veMail = false;
    }
});

pNumber.addEventListener('blur', () => {
    console.log("phone number is blurred");
    let regex = /^\d{10}$/;     
    let str = pNumber.value;
    console.log(regex, str);
    if(regex.test(str)){
        console.log("phone number is valid");
        pNumber.classList.remove('is-invalid');
        vpNumber = true;
    }
    else{
        console.log("phone number is not valid");
        pNumber.classList.add('is-invalid');
        vpNumber = false;

    } 
});

let submit = document.getElementById('submit');
submit.addEventListener('click', (e)=>{
    e.preventDefault;
    console.log("you clicked the submit button");

    if(vname && veMail && vpNumber){
         let success = document.getElementById('success');
         success.classList.add('show');
        fail.classList.remove('show');        
       //fail.alert('close');         // use jquery
    }
    else{
        let fail = document.getElementById('fail');
        fail.classList.add('show');      
        success.classList.remove('show');
        //success.alert('close');    // use j query

  
    }
});