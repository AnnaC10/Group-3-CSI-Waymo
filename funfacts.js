function swimFact() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET","https://api.api-ninjas.com/v1/facts?limit=1");
    xhr.setRequestHeader("X-Api-Key","t4XAy/GGBkUoSlowNQHhrQ==2scNxCWeqoVZhJrc");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            var newFact = JSON.parse(xhr.responseText)
            console.log(newFact);
        }
    }
    xhr.send();
}