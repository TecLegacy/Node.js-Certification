const express = require('express');
const root = require('../utils/parentDIrectory');
const path = require('path');
const route = express.Router();

const data = require('./userRoute');

// GET /user
route.get('/', (req, res) => {
  const userList = data.array;

  res.render('form.ejs', {
    title: 'home',
    userList,
  });
  console.log('from home user list', data.array);
});

module.exports = route;
