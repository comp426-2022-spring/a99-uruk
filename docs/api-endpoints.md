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

#### Reponse Body (Truncated)
```
 <!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <link rel="stylesheet" href="style.css"></script>
                            <script src="script.js"></script>
                        </head>
                        <body>
                            <div id="container...
```

#### Reponse Headers
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 1112
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiVRpEFlRc"
Sun, 01 May 2022 23:50:28 GMT
Connection: keep-alive
Keep-Alive: timeout=5
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

#### Response Body (Truncated)

```
<!DOCTYPE html>
                    <html lang="en">
                        <head>
                            <link rel="stylesheet" href="style.css"></script>
                            <script src="script.js"></script>
                        </head>
                        <body>
                            <div id="container...
```


#### Reponse Headers
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 1112
ETag: W/"2e-U/q8iZ4JK53zXPIvtwiVRpEFlRc"
Date: Sun, 01 May 2022 20:56:53 GMT
Connection: keep-alive
Keep-Alive: timeout=5
```


### /app/style.css/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/style.css/
```

#### Response

```
Returns /public/login/style.css file
```

#### Reponse Headers
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



### /app/script.js/ (GET)

#### Request cURL

```
curl http://localhost:5000/app/script.js/
```

#### Response

```
Returns /public/login/script.js file
```

#### Reponse Headers
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

#### Reponse Headers
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

#### Reponse Headers
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

#### Reponse Headers
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

#### Response Body (Truncated)
```
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">...
```


#### Reponse Headers
```
HTTP/1.1 200 OK
X-Powered-By: Express
Content-Type: application/json; charset=utf-8
Content-Length: 6451
ETag: W/"2e-U/q8iZ4JKqczXPIvtwiztpEFlRc"
Date: Sun, 01 May 2022 23:12:16 GMT
Connection: keep-alive
Keep-Alive: timeout=5
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

#### Reponse Headers
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

#### Reponse Headers
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
curl -X POST -H 'Content-Type: application/json' -d '{"email": "example@email.com", "username": "examplename", "password": "examplepass"}' http://localhost:5000/app/sign-up/
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

#### Reponse Headers
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
curl -X POST -H 'Content-Type: application/json' -d '{"email": "example@email.com", "username": "examplename", "password": "examplepass"}' http://localhost:5000/app/sign-in/
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

#### Reponse Headers
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

#### Reponse Headers
```
Connection: keep-alive
Content-Length: 72
Content-Type: application/json; charset=utf-8
Date: Mon, 02 May 2022 00:04:04 GMT
ETag: W/"48-+SMK+/MVXBmuvfcjSFr2fUgjdq8"
Keep-Alive: timeout=5
X-Powered-By: Express
```



### /app/change-username/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"username": "new username"}' http://localhost:5000/app/change-username/
```

#### Response

```
Changes user's username in the database.
Status 200, no JSON response.
```

#### Response Headers
```
Connection: keep-alive
Content-Length: 76
Content-Type: text/html; charset=utf-8
Date: Mon, 02 May 2022 00:04:26 GMT
Keep-Alive: timeout=5
Location: /app/accountpage
Vary: Accept
X-Powered-By: Express
```



### /app/change-email/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"email": "new email"}' http://localhost:5000/app/change-email/
```

#### Response

```
Checks if email in request is currently in database. If so, does not change database.
If email is not in use, changes database to reflect new email.
Status 200, no JSON response.
```

#### Response Headers
```
Connection: keep-alive
Content-Length: 76
Content-Type: text/html; charset=utf-8
Date: Mon, 02 May 2022 00:04:54 GMT
Keep-Alive: timeout=5
Location: /app/accountpage
Vary: Accept
X-Powered-By: Express
```



### /app/change-password/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"password": "new password"}' http://localhost:5000/app/change-password/
```

#### Response

```
Changes user's password in the database.
Status 200, no JSON response.
```

#### Response Headers
```
Connection: keep-alive
Content-Length: 76
Content-Type: text/html; charset=utf-8
Date: Mon, 02 May 2022 00:05:15 GMT
Keep-Alive: timeout=5
Location: /app/accountpage
Vary: Accept
X-Powered-By: Express
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

#### Response Headers
```
Connection: keep-alive
Content-Length: 54
Content-Type: text/html; charset=utf-8
Date: Mon, 02 May 2022 00:06:40 GMT
Keep-Alive: timeout=5
Location: /app/
Vary: Accept
X-Powered-By: Express
```



### /app/log-frontend-interaction/ (POST)

#### Request cURL

```
curl -X POST -H 'Content-Type: application/json' -d '{"email": "user's email", "username": "user's username", "time": "current time", "state": "state which the user viewed"}' http://localhost:5000/app/log-frontend-interaction/
```

#### Response

```
Logs the user's email, username, time accessed, and state (or entire country) viewed in the frontend interaction database.
Status 200, no JSON response.
```

#### Response Headers
```
Connection: keep-alive
Content-Length: 76
Content-Type: text/html; charset=utf-8
Date: Mon, 02 May 2022 00:05:15 GMT
Keep-Alive: timeout=5
Location: /app/coviddata
Vary: Accept
X-Powered-By: Express
```



## DEBUG/TEST SERVER ONLY

### /app/view-interactions-db/ (GET)

#### Request cURL

```
curl http://localhost:5000/view-interactions-db/
```

#### Response

```
Returns interactions.db
```

#### Reponse Headers
```
Connection: keep-alive
Date: Sun, 01 May 2022 23:55:31 GMT
ETag: W/"273-IbszDcyvPA0T7sqBNDoryJif89I"
Keep-Alive: timeout=5
X-Powered-By: Express
```



### /app/view-user-db/ (GET)

#### Request cURL

```
curl http://localhost:5000/view-user-db/
```

#### Response

```
Returns user.db
```

#### Reponse Headers
```
Connection: keep-alive
Date: Sun, 01 May 2022 23:54:54 GMT
ETag: W/"56-xY/Vo+Z9wc3/RXiyzFQ51VIYiBw"
Keep-Alive: timeout=5
X-Powered-By: Express
```
