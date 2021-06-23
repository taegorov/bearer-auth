'use strict';

const { users } = require('../models/index.js');

module.exports = async (req, res, next) => {
  try {

    if (!req.headers.authorization) { next('Invalid Login') }

    const token = req.headers.authorization.split(' ').pop();
    const validUser = await users.authenticateToken(token);

    req.user = validUser;
    req.token = validUser.token;
    next();

  } catch (e) {
    res.status(403).send('Invalid Login');
    next(e);
  }
}

// module.exports = async (req, res, next) => {

//   let bearerHeaderParts = req.headers.authorization.split(' ');  // ['Bearer', 'afsuyasgdfiefy672347tasdf.niygtzdyfasdf']
//   let token = bearerHeaderParts.pop();

//   try {
//     let validUser = await users.authenticateToken(token);
//     req.user = validUser;
//     next();
//   } catch (e) {
//     console.error('Bearer auth error');
//     next(e)
//   }
// }
