const express = require('express');
const mongoose = require('mongoose');

require('dotenv/config'); // use config in .env

const routes = require('./routes');

const server = express();

mongoose.connect(
  `mongodb+srv://oministack:${process.env.MONGO_PW}@clustertest-qzssj.mongodb.net/oministack_8?retryWrites=true&w=majority`, {
    useNewUrlParser: true
  });

server.use(express.json());
server.use(routes);

server.listen(3333);
