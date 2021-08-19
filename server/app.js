const express = require('express');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 5050;
const index = require('./routes/index');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '../public')));
app.use(cors());

mongoose.connect(
  'mongodb+srv://angulardyma:123123123@cluster0-urpjt.gcp.mongodb.net/angulardyma?retryWrites=true&w=majority',
  {
    keepAlive: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (error) => {
    if (error) {
      console.log(error);
    } else {
      console.log('Connexion opened to mongodb!');
    }
  }
);

app.use(index);
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = app;
