const express = require('express');
const root = require('../utils/parentDIrectory');
const path = require('path');
const route = express.Router();

//storing user data
const product = [];

// GET /user
route.get('/', (req, res) => {
  res.send('<h1>user</h1>');
});

//POST trigged from form inside view
// path /user
route.post('/', (req, res) => {
  const userName = req.body.user;

  //storing information
  product.push({
    name: userName,
  });
  console.log('req', userName);

  res.redirect('/');
});

// module.exports = route;
exports.route = route;
exports.array = product;
