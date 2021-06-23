'use strict';

const base64 = require('base-64');
const { users } = require('../models/index.js')

module.exports = async (req, res, next) => {

  if (!req.headers.authorization) { return _authError(); }

  let basic = req.headers.authorization;
  console.log(basic);
  let splitHeader = basic.split(' ')
  // console.log(username, pass);
  let [username, pass] = base64.decode(splitHeader[1]).split(':');
  console.log('POST SPLIT HEADER', username, pass);


  // let basicHeaderParts = req.headers.authorization.split(' ');  // ['Basic', 'sdkjdsljd=']
  // let encodedString = basicHeaderParts.pop();  // sdkjdsljd=
  // let decodedString = base64.decode(encodedString); // "username:password"
  // let [username, pass] = decodedString.split(':'); // username, password

  try {
    req.user = await users.authenticateBasic(username, pass)
    next();
  } catch (e) {
    res.status(403).send('Invalid Login');
  }

}

