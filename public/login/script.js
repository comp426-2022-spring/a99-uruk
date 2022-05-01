// On create account button press
async function createAccount() {

    // Creates json for post from inputs
    var userdata = JSON.stringify({"email" : document.getElementById("email").value, "username": document.getElementById("username").value, "password": document.getElementById("password").value});
    var options = {
        method: "POST",
        headers: {"Content-Type": 'application/json', Accept : 'application/json'},
        body: userdata
    }

    // Calls to signup endpoint
    const result = await fetch('http://localhost:5000/app/sign-up/', options).then(function(response) {
        return response.json();
    })

    // Checks return message
    if (result.message == "Account created"){
        document.getElementById("message").style.visibility = "hidden";
        location.href = "http://localhost:5000/app/coviddata/"; // Redirects to coviddata
    } else {
        document.getElementById("message").style.visibility = "visible"; // Makes message div visible and shows message
        document.getElementById("submitresult").textContent = result.message;
    }
}

// When sign in button pressed
async function signIn() {
    // Creates json for post from inputs
    var userdata = JSON.stringify({"email" : document.getElementById("email").value, "username": document.getElementById("username").value, "password": document.getElementById("password").value});
    var options = {
        method: "POST",
        headers: {"Content-Type": 'application/json', Accept : 'application/json'},
        body: userdata
    }
    // Calls sign in endpoint
    const result = await fetch('http://localhost:5000/app/sign-in/', options).then(function(response) {
        return response.json();
    })
    // Checks result message
    if (result.message == "Success"){
        document.getElementById("message").style.visibility = "hidden";
        location.href = "http://localhost:5000/app/coviddata/"; // Redirects to coviddata
    } else {
        document.getElementById("message").style.visibility = "visible"; // Makes message div visible and shows error message
        document.getElementById("submitresult").textContent = result.message;
    }
}