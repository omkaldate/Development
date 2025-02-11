console.log("check the js file");

let parameterBox = document.getElementById('parameterBox');
parameterBox.style.display = 'none';

// user click on json hide params, user click the params hide the json

let jonRadio = document.getElementById('json');
jonRadio.addEventListener('click', () => {
    document.getElementById('parameterBox').style.display = 'none';
    document.getElementById('requestJsonBox').style.display = 'block';
});

let paramsRadio = document.getElementById('custom');
paramsRadio.addEventListener('click', () => {
    document.getElementById('requestJsonBox').style.display = 'none';
    document.getElementById('parameterBox').style.display = 'block';
});

// when user click on + add more parameters

let addedParamsCount = 0;

let addParam = document.getElementById('addParams');
addParam.addEventListener('click', () => {
    let params = document.getElementById('params');
    let string = ` <div class="form row my-3">
                <legend class="col-form-label col-sm-1 pt-0"><b>parameter${addedParamsCount + 2}</b></legend>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterKey${addedParamsCount + 2}" placeholder="Enter Parameter ${addedParamsCount + 2} Key">
                </div>
                <div class="col-md-4">
                    <input type="text" class="form-control" id="parameterValue${addedParamsCount + 2}" placeholder="Enter Parameter ${addedParamsCount + 2} Value">
                </div>
                <button class="col-sm-1 btn btn-primary deleteParams">-</button>
            </div>`;

    let paramElement = getElementFromString(string);
    params.appendChild(paramElement);

    let deleteButtons = document.getElementsByClassName('deleteParams');
    for (let button of deleteButtons) {
        button.addEventListener('click', (e) => {
            e.target.parentElement.remove();
        });
    }


    addedParamsCount++;
});

// utility function to get DOM element from string
function getElementFromString(string) {
    let div = document.createElement('div');
    div.innerHTML = string;
    return div.firstElementChild;
}




let submit = document.getElementById('submit');
submit.addEventListener('click', () => {
    document.getElementById('responseJsonBox').value = "Please wait... Fetching API";

    let url = document.getElementById('url').value;
    let requestType = document.querySelector("input[name='request']:checked").value;
    let contentType = document.querySelector("input[name='content']:checked").value;

    console.log(url);
    console.log(requestType);
    console.log(contentType);

    let data = {};
    if (contentType === 'params') {
        for (let i = 0; i < addedParamsCount + 1; i++) {
            if (document.getElementById('parameterKey' + (i + 1)) != undefined) {
                let key = document.getElementById('parameterKey' + (i + 1)).value;
                let val = document.getElementById('parameterValue' + (i + 1)).value;

                data[key] = val;
            }
        }
        data = JSON.stringify(data);
    }
    else {
        data = document.getElementById('requestJsonText').value;
    }
    console.log(data);

    if(requestType = 'get'){
        fetch(url,{method : 'GET'})
        .then(response => response.text())
        .then((text) => {
            document.getElementById('responseJsonBox').value = text;
        });
    }
    else{
        fetch(url,{
            method : 'POST',
            body : data,
            headers : {
                "Content-type" : "application/json; charset-UTF-8"
            }
        })
        .then(response => response.text())
        .then((text) => {
            document.getElementById('responseJsonBox').value = text;
        });
    }

});