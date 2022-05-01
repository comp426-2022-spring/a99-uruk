window.onload = function getUserInfo() {
    fetch("http://localhost:5000/get-user-info/")
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        document.getElementById("account-email").innerHTML = result.email;
        document.getElementById("account-username").innerHTML = result.username;
        document.getElementById("account-password").innerHTML = result.password;
    })
}