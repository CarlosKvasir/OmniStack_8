const express = require('express');

const routes = express.Router();

routes.get('/', (req, res) => {
  return res.json({ message: `Hello ${req.query.name}` });
});

routes.post('/dev', (req, res) => {
  return res.json({
    data: true,
  });
})

module.exports = routes;
