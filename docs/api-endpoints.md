# API Documentation

## Endpoints

### / (GET)

#### Request cURL

```
curl http://localhost:5000/
```

#### Response

```
Redirects to http://localhost:5000/app/
```

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/
```

#### Response

```
Returns /public/login/index.html file
```

### /app/login/style.css/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/login/style.css/
```

#### Response

```
Returns /public/login/style.css file
```

### /app/login/script.js/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/login/script.js/
```

#### Response

```
Returns /public/login/script.js file
```

### /app/accountpage/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/accountpage/
```

#### Response

```
Returns /public/accountpage/index.html file
```

### /app/accountpage/style.css/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/accountpage/style.css/
```

#### Response

```
Returns /public/accountpage/style.css file
```

### /app/accountpage/script.js/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/accountpage/script.js/
```

#### Response

```
Returns /public/coviddata/script.js file
```

### /app/coviddata/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/coviddata/
```

#### Response

```
Returns /public/coviddata/index.html file
```

### /app/coviddata/style.css/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/coviddata/style.css/
```

#### Response

```
Returns /public/coviddata/style.css file
```

### /app/coviddata/script.js/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/coviddata/script.js/
```

#### Response

```
Returns /public/coviddata/script.js file
```

### /app/sign-up/ (POST)

#### Request cURL

```
curl http://localhost:5000/app/sign-up/
```

#### Request Body

```
{"email": "example@email.com", "username": "examplename", "password": "examplepass"}
```

#### Response

```
If email is already in the database:
{message: "Account already exists"}

If email in invalid:
{message: "Email is invalid"}

If successful sign up:
{message: "Account Created"}
```

### /app/sign-in/ (POST)

#### Request cURL

```
curl http://localhost:5000/sign-in/
```

#### Request Body

```
{"email": "example@email.com", "username": "examplename", "password": "examplepass"}
```

#### Response

```
If email is not in the database:
{message: "Account doesn't exist yet"}

If username or password does not match:
{message: "Incorrect username/password"}

If successful sign in:
{message: "Success"}
```

### /app/get-user-info/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/get-user-info/
```

#### Response

```
{"email" : "user's email", "username" : "user's username", "password" : "user's password"}
```

### /app/change-username/ (POST)

#### Request cURL

```
curl http://localhost:5000/app/change-username/
```

#### Request Body

```
{"username": "new username"}
```

#### Response

```
Changes user's username in the database.
Status 200, no JSON response.
```

### /app/change-email/ (POST)

#### Request cURL

```
curl http://localhost:5000/app/change-email/
```

#### Request Body

```
{"email": "new email"}
```

#### Response

```
Checks if email in request is currently in database. If so, does not change database.
If email is not in use, changes database to reflect new email.
Status 200, no JSON response.
```

### /app/change-password/ (POST)

#### Request cURL

```
curl http://localhost:5000/app/change-password/
```

#### Request Body

```
{"password": "new password"}
```

#### Response

```
Changes user's password in the database.
Status 200, no JSON response.
```

### /app/change-password/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/delete-account/
```

#### Response

```
Deletes user's account from the database.
Redirects back to login page.
Redirects to http://localhost:5000/app/
```

### /app/log-frontend-interaction/ (POST)

#### Request cURL

```
curl http://localhost:5000/app/log-frontend-interaction/
```

#### Request Body

```
{"email": "user's email", "username": "user's username", "time": "current time", "state": "state which the user viewed",}
```

#### Response

```
Logs the user's email, username, time accessed, and state viewed in the frontend interaction database.
Status 200, no JSON response.
```

## DEBUG/TEST SERVER ONLY

### /view-interactions-db/ (GET)

#### Request cURL

```
curl http://localhost:5000/view-interactions-db/
```

#### Response

```
Returns interactions.db
```

### /view-user-db/ (GET)

#### Request cURL

```
curl http://localhost:5000/view-user-db/
```

#### Response

```
Returns user.db
```

