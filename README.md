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
- `/login POST user-login`

## Next steps
- Add a frontend with Reactjs
- 

