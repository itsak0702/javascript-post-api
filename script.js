fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then((data) => {
    var postData = "";
    for(var x in data)
     {
        postData+= `<div class="col-sm my-3" ><div class="card" style="width: 20rem;">
        <div class="card-body">
            <h5 class="card-title">${data[x].title}</h5>
            <p class="card-text">${data[x].body}</p>
        </div>
    </div>  </div>`;
}
document.getElementById("card").innerHTML=postData;
})