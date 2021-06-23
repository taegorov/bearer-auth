# bearer-auth

In this phase, the new requirement is that any user that has successfully logged in using basic authentication (username and password) is able to continuously authenticate … using a “token”

![basic-auth](bearer-auth.JPG)

---

## Routes

### /signup

* req, res, next
* JSON response: {"username":"value", "password":"value"}

### /signin

* req, res, next
* JSON response: none
* Authentication: basic (username and password)

--- 

## URLs

[Deployed page here](https://timegorov-bearer-auth.herokuapp.com)