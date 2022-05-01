async function createAccount() {
    var userdata = JSON.stringify({"email" : document.getElementById("email").value, "username": document.getElementById("username").value, "password": document.getElementById("password").value});
    var options = {
        method: "POST",
        headers: {"Content-Type": 'application/json', Accept : 'application/json'},
        body: userdata
    }

    const result = await fetch('http://localhost:5000/app/sign-up/', options).then(function(response) {
        return response.json();
    })

    if (result.message == "Account Created"){
        location.href = "http://localhost:5000/app/coviddata/";
    } else {
        document.getElementById("submitresult").textContent = result.message;
    }
}

async function signIn() {
    var userdata = JSON.stringify({"email" : document.getElementById("email").value, "username": document.getElementById("username").value, "password": document.getElementById("password").value});
    var options = {
        method: "POST",
        headers: {"Content-Type": 'application/json', Accept : 'application/json'},
        body: userdata
    }

    const result = await fetch('http://localhost:5000/app/sign-in/', options).then(function(response) {
        return response.json();
    })

    if (result.message == "Success"){
        location.href = "http://localhost:5000/app/coviddata/";
    } else {
        document.getElementById("submitresult").textContent = result.message;
    }
}