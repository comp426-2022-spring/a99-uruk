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

#### Headers
```
Connection: keep-alive
Content-Length: 96
Content-Type: text/html; charset=utf-8
Date: Sun, 01 May 2022 23:50:28 GMT
Keep-Alive: timeout=5
Location: http://localhost:5000/app/
Vary: Accept
X-Powered-By: Express
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

#### Headers
```
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Connection: keep-alive
Date: Sun, 01 May 2022 23:50:28 GMT
ETag: W/"462-18081697340"
Keep-Alive: timeout=5
Last-Modified: Sun, 01 May 2022 20:56:53 GMT
X-Powered-By: Express
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

#### Headers
```
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Connection: keep-alive
Date: Sun, 01 May 2022 23:50:28 GMT
ETag: W/"6f2-18081e5673f"
Keep-Alive: timeout=5
Last-Modified: Sun, 01 May 2022 23:12:16 GMT
X-Powered-By: Express
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

#### Headers
```
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Connection: keep-alive
Date: Sun, 01 May 2022 23:50:28 GMT
ETag: W/"8ae-18081ac77b9"
Keep-Alive: timeout=5
Last-Modified: Sun, 01 May 2022 22:10:05 GMT
X-Powered-By: Express
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

#### Headers
```
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Connection: keep-alive
Content-Length: 2324
Content-Type: text/html; charset=UTF-8
Date: Sun, 01 May 2022 23:52:17 GMT
ETag: W/"914-18081e56739"
Keep-Alive: timeout=5
Last-Modified: Sun, 01 May 2022 23:12:16 GMT
X-Powered-By: Express
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

#### Headers
```
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Content-Length: 272
Content-Type: text/css; charset=UTF-8
Date: Sun, 01 May 2022 23:52:17 GMT
ETag: W/"110-18081e5673b"
Last-Modified: Sun, 01 May 2022 23:12:16 GMT
X-Powered-By: Express
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

#### Headers
```
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Content-Length: 622
Content-Type: application/javascript; charset=UTF-8
Date: Sun, 01 May 2022 23:52:17 GMT
ETag: W/"26e-18081e5673a"
Last-Modified: Sun, 01 May 2022 23:12:16 GMT
X-Powered-By: Express
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

#### Headers
```
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Connection: keep-alive
Date: Sun, 01 May 2022 23:53:05 GMT
ETag: W/"1933-18081e5673c"
Keep-Alive: timeout=5
Last-Modified: Sun, 01 May 2022 23:12:16 GMT
X-Powered-By: Express
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

#### Headers
```
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Connection: keep-alive
Date: Sun, 01 May 2022 23:53:05 GMT
ETag: W/"184-18081e5673e"
Keep-Alive: timeout=5
Last-Modified: Sun, 01 May 2022 23:12:16 GMT
X-Powered-By: Express
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

#### Headers
```
Accept-Ranges: bytes
Cache-Control: public, max-age=0
Connection: keep-alive
Date: Sun, 01 May 2022 23:53:05 GMT
ETag: W/"32e7-18081e5673d"
Keep-Alive: timeout=5
Last-Modified: Sun, 01 May 2022 23:12:16 GMT
X-Powered-By: Express
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

#### Headers
```
Connection: keep-alive
Content-Length: 29
Content-Type: application/json; charset=utf-8
Date: Mon, 02 May 2022 00:02:31 GMT
ETag: W/"1d-dPbyniY7suAXfW3Kw2vhaGgYruQ"
Keep-Alive: timeout=5
X-Powered-By: Express
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

#### Headers
```
Connection: keep-alive
Content-Length: 21
Content-Type: application/json; charset=utf-8
Date: Mon, 02 May 2022 00:03:13 GMT
ETag: W/"15-uFFjCr0SbbbFb/CsC0M2sF++swo"
Keep-Alive: timeout=5
X-Powered-By: Express
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

### /app/delete-account/ (GET)

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

#### Headers
```
Connection: keep-alive
Date: Sun, 01 May 2022 23:55:31 GMT
ETag: W/"273-IbszDcyvPA0T7sqBNDoryJif89I"
Keep-Alive: timeout=5
X-Powered-By: Express
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

#### Headers
```
Connection: keep-alive
Date: Sun, 01 May 2022 23:54:54 GMT
ETag: W/"56-xY/Vo+Z9wc3/RXiyzFQ51VIYiBw"
Keep-Alive: timeout=5
X-Powered-By: Express
```
