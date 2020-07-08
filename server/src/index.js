require('./models/User');
require('./models/Track');

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
//Routes
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri =
  'mongodb+srv://cherryart7:cr5RGq7dYvc0gG2s@cluster0-ldxhm.mongodb.net/tracker?retryWrites=true&w=majority';

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
});
mongoose.connection.on('connected', () => {
  console.log('Connected to mongo instance');
});
mongoose.connection.on('error', (err) => {
  console.log('Error connecting to mongo', err);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});
