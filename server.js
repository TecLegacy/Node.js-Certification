const express = require('express');

const path = require('path');
const root = require('./utils/parentDIrectory');
const bodyParser = require('body-parser');

const user = require('./routes/userRoute.js');
//initallized express
const app = express();

//Body Parser
app.use(bodyParser.urlencoded({ extended: false }));

//Template Engine
app.set('view engine', 'ejs');
app.set('views', 'views');

//Statically Server file for => css styles , images
app.use(express.static(path.join(root, 'public')));

//user list
app.use('/user', user.route);
//homepage
app.use(require('./routes/homeRoute'));

app.use((req, res) => {
  //   res.sendFile('views', 'keshav.html'); for static file use sendFile

  //For Template Engine we use .render method not .sendFile
  res.render(path.join(root, 'views', '404.ejs'));
});

app.listen(3007);
