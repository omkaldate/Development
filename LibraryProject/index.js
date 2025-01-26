console.log("start of js file");

class Book {
    constructor(name, author, type) {
        this.name = name;
        this.author = author;
        this.type = type;
    }
}


class Display{
    add(book) {
        let tableBody = document.getElementById('tableBody');
        let uiString =  `<tr>
                          <td>${book.name}</td>
                          <td>${book.author}</td>
                          <td>${book.type}o</td>
                        </tr>`;
    
        tableBody.innerHTML += uiString;
     };

     clear() {
        let libraryForm = document.getElementById('libraryForm');
        libraryForm.reset()
    };

    validate(book){
        if(book.name.length <= 2 || book.author.length <= 2) {
            console.log(book.author.length)
             return false;
        }
        else return true;  
    }

    show(e){
        let alert = document.getElementById('alert');
        if(e == 'sucess'){
           alert.innerHTML =  `<div class="alert alert-success alert-dismissible fade show" role="alert">
                                <strong>Success...!</strong> Book added sucessfully.
                                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                              </div> ` 
        }
        if(e == 'error'){
            alert.innerHTML =  `<div class="alert alert-danger alert-dismissible fade show" role="alert">
                                    <strong>Failed...!</strong> Please enter a valid Book name or Author name.
                                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                                </div>`                      
        }
    
        setTimeout(() => {
            alert.innerHTML = '';
        },3000);
    }

}




// add button event listner
let libraryForm = document.getElementById('libraryForm');
libraryForm.addEventListener('submit', librarySubmit);

function librarySubmit(e) {
    e.preventDefault();

    let name = document.getElementById('bookName').value;
    let author = document.getElementById('author').value;

    let computer = document.getElementById('computer');
    let syllabus = document.getElementById('syllabus');
    let general = document.getElementById('general');

    let type;

    if (computer.checked) type = computer.value;
    if (syllabus.checked) type = syllabus.value;
    if (general.checked) type = general.value;


    book = new Book(name, author, type);
    console.log(book);

    let display = new Display();
    if(display.validate(book)){
        display.add(book);
        display.clear();
        display.show('sucess');
    }
    else{
        display.show('error');
    }
    console.log(" you have submitted a library Form");
}




// const apiData = [
//     {
//         id : 234454,
//         name : "Prachi Said",
//         dept : "Java"
//     },

//     {
//         id : 234454,
//         name : "Prachi Said",
//         dept : "Java",
//         manager : true
//     },

//     {
//         id : 234454,
//         name : "Prachi Said",
//         dept : "Java"
//     },

//     {
//         id : 234454,
//         name : "Prachi Said",
//         dept : "Java"
//     }
// ]

// // console.log(apiData[0].id);
// class Book1 {
//     constructor(id, name, dept) {
//         this.id = id;
//         this.name = name;
//         this.dept = dept;
//     }
// }

// obj = new Book1(apiData[0]);
// console.log(obj);