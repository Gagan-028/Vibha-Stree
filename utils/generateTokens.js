const jwt = require('jsonwebtoken');

const generateToken = (users) => {

    return jwt.sign({ email: users.email, id: users._id }, process.env.JWT_KEY);
};

module.exports.generateToken = generateToken;