console.log("in console");
let apiKey = 'aea4cbad4f794250832a5bfa5bab07f8';


let parentDiv = document.getElementById('parentDiv');
const xhr = new XMLHttpRequest();
xhr.open(`GET`, `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`, true);

xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;
        console.log(articles);

        let news = "";
        articles.forEach(function (ele, index) {
            news += `<p style = "margin-top : 15px">
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapse${index}" aria-expanded="false" aria-controls="collapse${index}">
                            ${ele.title}
                         </button>
                    </p>

                    <div class="collapse collapse-horizontal" id="collapse${index}">
                        <div class="card card-body" style="width: 50rem;">
                            ${ele.author} <br> <hr>
                            ${ele.description}
                            <a href="${ele.url}" target="blank">...Read More</a>
                        </div>
                    </div>`             
        }); 
                    
        let perentDiv = document.getElementById('parentDiv');
        parentDiv.innerHTML = news

    }
    else {
        console.log("Some error occured");
    }
}
xhr.send();









// let object = {
//     status : "ok",
//     totalResult : 36,
//     articles : [
//         {
//             source : {
//                 id : "hshsh",
//                 name : 'hello'
//             },
//             author : "akjdnfa;",
//             title: "adsfnkajsdn",
//             discription : "aldh;alkds",
//             utl : "alkdn;ajkd",
//             urlTotal : "andalkdn",
//             publishedAt : "askdjn;l",
//             containt: "aalkdsnl"
//         },

//         {

//         },

//         {

//         }
//     ]
// }