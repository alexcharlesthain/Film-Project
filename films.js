function pullFilm() {
let requestURL = "http://localhost:8080/api/film"
let request = new XMLHttpRequest();
request.open("GET", requestURL);
request.setRequestHeader('Content-Type', 'application/json');
request.setRequestHeader('Access-Control-Allow-Origin','*');
request.responseType = "json"
request.send();
request.onLoad = function() {
let requestData = request.response;
let myH1 = document.getElementById("goHere");
myH1.innerHTML = console.log(requestData);
}
};

let JSONarray

function SearchFilm(film)
for

<input type="text" onInput="searchFunction()">
