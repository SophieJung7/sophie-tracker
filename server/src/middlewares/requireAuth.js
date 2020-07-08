const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

module.exports = (req, res, next) => {
  // authorization === 'Bearer slkjlkgjlk'
  const { authorization } = req.headers;

  if (!authorization) {
    res.status(401).send({ error: 'You must be logged in.' });
  } else {
    // Extract just the token without Bearer thing.
    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'sophie_secret_key', async (err, payload) => {
      if (err) {
        res.status(401).send({ error: `${err}` });
      }
      const { userId } = payload;

      const user = await User.findById(userId);
      req.user = user;
      next();
    });
  }
};
