console.log("in the js file");

let screen = document.getElementById('screen');
let buttons = document.querySelectorAll('button');  

let screenprint = '';

for (let item of buttons) {
    item.addEventListener('click', (e) => {  
        let buttonText = e.target.innerText;

        if(buttonText == '='){
            screen.value = eval(screenprint);
        }
        else if(buttonText == 'C'){
            screen.value = "";
            screenprint ="";
        } 
        
        else if(buttonText == '*'){
            screenprint += '*';
            screen.value = screenprint;
        }
        else{
            screenprint += buttonText;
            screen.value = screenprint;
        }
        

        console.log(buttonText);
    });
}
