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

### /sign-in/ (GET)

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
