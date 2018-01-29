const router = require('express').Router();
const User = require('./models/user.js');

router.post('/contact', (req, res) => {
  console.log(req.body);
  User.create({
    email: req.body.email,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    message: req.body.message,
    zipCode: req.body.zipCode,
    state: req.boy.state,
  })
    .then((newUser) => {
      res.send(newUser);
    });
});

module.exports = router;
