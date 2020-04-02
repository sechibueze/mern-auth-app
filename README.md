# MERNstack AUTH API

## Introduction
In most cases, applications need to handle users data(large or small) and so supports features to capture and manage such data.

## User stories
- User signup
- User login
- User updates record eg: firstname, lastname

## Models
<pre><code>
user = {
  "firstname": "String, required",
  "lastname": "String, required","
  "email": "String, required, unique",
  "password": "String, required, hashed"
}
</code>
</pre>

## Routes

- `/signup POST user-signup`

<pre><code>
Request: {
	"firstname": "Samuel",
  "lastname": "Chibueze",
  "email": "youremail@host.com",
  "password": "yourpassword"
}

Response: {
  "status": true,
  "message": "User signup was successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODVhNjVhZmVlM2IzMTQxOGU5MTVjZSIsImlhdCI6MTU4NTgxNzE3OH0.K--DyZTY-9TqDdIayDujp--m8dNnNw67uFx9BnrHh4g",
  "user": {
    "id": "5e85a65afee3b31418e915ce",
    "email": "samify@gmail.com",
    "firstname": "Samuel",
    "lastname": "Chibueze"
  }
}
</code></pre>
- `/login POST user-login`
<pre><code>
Request: 
{
	"email": "samify@gmail.com",
  "password": "samify"
}
Response: 

{
  "status": true,
  "message": "User login was successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODVhNjVhZmVlM2IzMTQxOGU5MTVjZSIsImlhdCI6MTU4NTg1Mzc0OH0.2FTHdos9hn8OCcMj6hNfwhdzhVrUqOuzQp1rdYH5LS8",
  "user": {
    "id": "5e85a65afee3b31418e915ce",
    "firstname": "Samuel",
    "lastname": "Chibueze",
    "email": "samify@gmail.com"
  }
}
</code></pre>

- `/users/me GET get user data`
<pre><code>
Headers: `x-auth-token: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVlODVhNjVhZmVlM2IzMTQxOGU5MTVjZSIsImlhdCI6MTU4NTg1NjcxMn0.gKluzjtKUIPyjB-rD8RZja8r2swrUWnU8eJosNvEMIU`

Response: 
{
  "status": true,
  "message": "Requested user",
  "user": {
    "id": "5e85a65afee3b31418e915ce",
    "firstname": "Samuel",
    "lastname": "Chibueze",
    "email": "samify@gmail.com"
  }
}
</code></pre>

## Resources
- `https://jwt.io/`

## Next steps
- Add a frontend with Reactjs
- 

