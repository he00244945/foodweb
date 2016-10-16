'use strict';
const express = require('express');
const app = express();
app.set('port', process.env.PORT || 3000);

app.set('view engine', '.ejs');

app.use(express.static(__dirname + '/vendors'));
app.use(express.static(__dirname + '/resources'));

app.get('/', (req, res) => {
	res.render('index');
});


app.listen(app.get('port'), () => {
	console.log('Running server on Port:', app.get('port'));
});