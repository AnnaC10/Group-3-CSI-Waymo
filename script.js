function christmasJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v2.jokeapi.dev/joke/Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
    xhr.onreadystatechange = function () {
        var newJoke = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status < 300) {
            document.getElementById('joke').value = newJoke.setup;
            document.getElementById('joke2').value = newJoke.delivery;
        }

    }
    xhr.send();
}

function miscJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v2.jokeapi.dev/joke/Miscellaneous?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
    xhr.onreadystatechange = function () {
        var newJoke = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status < 300) {
            document.getElementById('joke').value = newJoke.setup;
            document.getElementById('joke2').value = newJoke.delivery;
        } else {
            document.getElementById('joke').value = null
            document.getElementById('joke2').value = null
        }

    }
    xhr.send();
}

function punJoke() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,political,racist,sexist,explicit");
    xhr.onreadystatechange = function () {
        var newJoke = JSON.parse(xhr.responseText);
        if (xhr.readyState == 4 && xhr.status < 300) {
            document.getElementById('joke').value = newJoke.setup;
            document.getElementById('joke2').value = newJoke.delivery;
        }

    }
    xhr.send();
}