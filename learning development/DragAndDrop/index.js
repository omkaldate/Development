console.log("in the js file");

let imageBox = document.querySelector('.imageBox');
let whiteBoxes = document.getElementsByClassName('whiteBox');

imageBox.addEventListener('dragstart',(e)=>{
    console.log('grag start is triggred');
    e.target.classList +='hold';

    setTimeout(()=>{
        e.target.classList ='hide';
    }, 0);

});

imageBox.addEventListener('dragend',()=>{
    console.log('grag end is triggred');

});

for(whiteBox of whiteBoxes){
    whiteBox.addEventListener('dragover',()=>{

    });

    whiteBox.addEventListener('dragenter',()=>{
        
    });

    whiteBox.addEventListener('dragleave',()=>{
        
    });

    whiteBox.addEventListener('drop ',()=>{
        
    });
}