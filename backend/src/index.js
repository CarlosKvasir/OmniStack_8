const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

require('dotenv/config'); // use config in .env

const routes = require('./routes');

const server = express();

mongoose.connect(
  `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@${process.env.MONGO_SERVER}/${process.env.MONGO_BASE}?retryWrites=true&w=majority`, {
    useNewUrlParser: true
  });

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);
