const { User } = require('../models');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
  const { username, password } = req.body;
  console.log("username : ",username)
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({ username, password: hashedPassword });
    res.json({ message: `${username} registered successfully` });
  } catch (error) {
    res.json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (user && (await bcrypt.compare(password, user.password))) {
      res.json({ message: `${username} login successfully` });
    } else {
      res.json({ error: 'Invalid credentials' });
    }
  } catch (error) {
    res.json({ error: error.message });
  }
};
