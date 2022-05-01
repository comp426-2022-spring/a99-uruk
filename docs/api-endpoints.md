# API Documentation

## Endpoints

### /coviddata/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/coviddata/
```

#### Response

```
Returns /public/coviddata/index.html file
```

### /coviddata/style.css/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/coviddata/style.css/
```

#### Response

```
Returns /public/coviddata/style.css file
```

### /coviddata/script.js/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/coviddata/script.js/
```

#### Response

```
Returns /public/coviddata/script.js file
```

### /sign-up/ (POST)

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
If user is not currently registered, adds their data to the database. Returns status 200 and message "Account created"
If user is registered, does not add new data. Returns status 404 and message "Account already exists"
```

### /sign-in/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/sign-in/
```

#### Response

```
Attempts to sign user into account.
```

### /app/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/
```

#### Response

```
Returns /public/login/html.css file
```

### /app/script.js/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/script.js/
```

#### Response

```
Returns /public/login/script.js file
```

### /app/style.css (GET)

#### Request cURL

```
curl http://localhost:5000/app/style.css
```

#### Response

```
Returns /public/login/style.css file
```