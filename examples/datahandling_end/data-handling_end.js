function getUsers(reqType, count) {
    if(reqType === "xhr"){
        xhr('https://randomuser.me/api/?results=' + count);
        return;
    }
    if(reqType === "fetch"){
        fetchAPI('https://randomuser.me/api/?results=' + count);
        return;
    }
}

function xhr(url) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            var res = JSON.parse(this.responseText);
            renderUsers(res.results);
        }
    };
    xhr.send();
}

function fetchAPI(url){
    fetch(url)
    .then(function(res){ return res.json();})
    .then(function(json){ renderUsers(json.results); });
}

function renderUsers(data){
    console.log(data);
    var renderTargetEl = document.getElementById("userRenderArea");
    if(renderTargetEl == null) {
        console.warning("There is no render target exist, rendering aborted.")
        return;
    }
    for(var i=0; i<data.length; i++){
        var user = {
            name: data[i].name.first +' '+ data[i].name.last,
            location: data[i].location.city,
            imgUrl: data[i].picture.large
        };
        var userColEl = document.createElement('div');
        userColEl.className = 'col-md-3';
        userColEl.innerHTML = 
        '<div class="card" style="margin-bottom: 25px; text-align:center">'+
            '<img style="width: 50%; margin: 20px auto 0 auto; border-radius: 50%" src="'+ user.imgUrl +'" alt="Card image cap">'+
            '<div class="card-body">'+
                '<h5 style="text-transform: capitalize;" class="card-title">'+ user.name +'</h5>'+
                '<p style="text-transform: capitalize;" class="card-text">From '+ user.location +'</p>'+
                '<a href="#" class="btn btn-primary">Add as Friend</a>'+
            '</div>'+
        '</div>';
        renderTargetEl.appendChild(userColEl);
    }
}

window.onload = function() {
    getUsers("fetch", 12);
}