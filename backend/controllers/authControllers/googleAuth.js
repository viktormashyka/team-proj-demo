const { User } = require('../../models');
const jwt = require('jsonwebtoken');

const { JWT_SECRET, FRONTEND_URL } = process.env;

const googleAuth = async (req, res) => {
  const { _id: id } = req.user;
  const payload = {
    id,
  };
  const token = jwt.sign(payload, JWT_SECRET);
  const user = await User.findByIdAndUpdate(id, { token });
  res.redirect(`${FRONTEND_URL}?email=${user.email}&password=${user.password}`);
};

module.exports = googleAuth;
