
const jwt = require('jsonwebtoken');


function checkAuth(req, res, next) {
  try {
    //  Attempt to retrieve token from request header
    const token = req.headers['x-auth-token'];

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
      if (err) return res.status(500).json({ status: false, message: 'Internal server error::failed to verify token' });

      // An invalid token was provided decoded = undefined
      if (!decoded) return res.status(401).json({ status: false, message: 'Unauthenticated::finvalidtoken' });

      // Token is valid
      req.user = decoded.id;
      next();

    });
  } catch (e) {
    return res.status(401).json({ status: false, message: 'Unprocessed:: token error' });

  }
}
module.exports = checkAuth;