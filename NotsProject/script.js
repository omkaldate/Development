//console.log("this is js file");

showNotes();

let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function (el) {

    let text = document.getElementById('addTxt');
    let notes = localStorage.getItem('notes');

    if (notes == null) arr = [];
    else arr = JSON.parse(notes);

    arr.push(text.value);
    //console.log(text.key, text.value);
    localStorage.setItem("notes", JSON.stringify(arr));
    text.value = "";
    console.log("work added sucessfully");
    showNotes();
});

function showNotes() {
    let notes = localStorage.getItem('notes');

    if (notes == null) arr = [];
    else arr = JSON.parse(notes);

    let html = "";
    arr.forEach(function (ele, ind) {
        html += `<div class="my-2 mx-3 card" style="width: 18rem;">
                    <div class="card-body">
                        <h5 class="card-title">"Work No ${ind + 1}"</h5>
                        <p class="card-text">${ele}</p>
                         <button id="${ind}" onclick= "deleteNote(this.id)" class="btn btn-primary">Delete Work</button>
                     </div>
                 </div>`;
    });
    let noteEle = document.getElementById('notes');
    if (arr.length != 0) {
        noteEle.innerHTML = html;
    }
    else {
        noteEle.innerHTML = `<p> nothing to show..!   add work above<p/>`;
    }
}

function deleteNote(ind) {
    //console.log(`deleting work No ${ind}`);
    let notes = localStorage.getItem('notes');

    if (notes == null) arr = [];
    else arr = JSON.parse(notes);

    arr.splice(ind, 1);
    localStorage.setItem("notes", JSON.stringify(arr));
    showNotes();
}

search = document.getElementById('searchTxt');
search.addEventListener("input", function () {
    let inputVal = search.value.toLowerCase();

    let noteCards = document.getElementsByClassName("card-text");
    Array.from(noteCards).forEach(function (ele) {
        let cardTxt = ele.innerText;
        ele.parentElement.parentElement.style.display = cardTxt.includes(inputVal) ? "block" : "none";

    });

});



