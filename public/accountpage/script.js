window.onload = function() {
    alert("let's go!");
   }

window.onload = function getEmail() {
    fetch("http://localhost:5000/get-email/")
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        document.getElementById("account-email").innerHTML = result.email;
    })
}

