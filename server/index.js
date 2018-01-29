const express = require('express');
const morgan = require('morgan');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();

app.use(morgan('combined'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));
app.use(express.static(path.join(__dirname, '../node_modules/bootstrap/dist/css')));

app.use('/api', require('./api'));

app.use('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../front/index.html'));
});

db.sync({ force: true })
  .then(() => {
    app.listen(process.env.PORT || 1337, () => {
      console.log('Listening on port 1337');
    });
  });
