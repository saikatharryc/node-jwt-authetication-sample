### Authentication Using Express.js, JWT, MongoDB

[![Greenkeeper badge](https://badges.greenkeeper.io/saikatharryc/node-jwt-authetication-sample.svg)](https://greenkeeper.io/)

#### Run the application 
    First Do a `npm i` then go ahead with the below process.

    you will be needing and DB instance ,where we will store all the User Details.
    you can change the Database url in `./config/index.js` at the place of `MONGO_URL`.
    and run in terminal by executing `node .`
---
    or You can supply `MONGO_URL` from Environment Variable as well,
    you can do `MONGO_URL=mongodb:<--->:<--->@<--->:<--->/<---> node .`

in config you also need to configure the email credentials.
if you want to use as it is right now. as a test mail service it wont be delivered to you mail box.
instead it will catch that mail, and you can see those here:
    `https://ethereal.email/messages/`
    and login credentials is mentioned in config.

### APIS
BASE_URL = http://localhost:5000 [if running in local] 

Sign Up:  
* api: `{BASE_URL}/auth/signup`
* method: *POST*
* payload: 
```
{
    "username":"yourusername",
    "password":"yourpass",
    "email":"yourmail@mailService.com"
}
```

> Go to mail and confirm mail by visiting the URL you have received in  mail..

Login:
* api: `{BASE_URL}/auth/login`
* method: *POST*
* payload: 
```
{
    "username":"yourusername",
    "password":"yourpass"
}
```

response:
```
{
    "token": <token big string>,
    "user": {
        "emailVerified": true,
        "_id": "5bdabb1176e89f1af7bfb953",
        "username": "username",
        "email": "yourmail@mailService.com",
        "__v": 0
    }
}
```

> Now Lets test the authentication, if it works or not in the auth enable api.

some Auth enable API:

  * api: `{BASE_URL}/apis/authEnabled/amIautheticated `
  * method : *GET*
  * Header: `Authorization: <token you got from login                  response>,'Content-Type: application/json'`
  
  * response:
  > * Authenticated:

     {yeah:true}
  > * Unauthenticated:
  ```
   {
    "service": "auth_service",
    "head": null,
    "message": "Unauthenticated"
}  