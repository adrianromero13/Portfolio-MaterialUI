const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


require('dotenv/config');


const routes = require('./routes');

const PORT = process.env.PORT || 3001;

const app = express();

// set up middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
}

// testing something diff
// app.set('view engine', 'ejs');

// use of routes
app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/portfolioWork',
  {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  });

app.listen(PORT, console.log(`Listening on PORT: ${PORT}`));
