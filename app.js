var express = require('express');
var app = express();

app.set('views', __dirname + '/views');
app.use('/static', express.static(__dirname + '/public'));

var handlebars  = require('express-handlebars');
app.engine('hbs', handlebars({
	defaultLayout: 'main',
	extname: '.hbs',
	partialsDir: 'views/partials/',
	layoutsDir: 'views/layouts/'
}));
app.set('view engine', 'hbs');

var controllers = require('./controllers');
controllers.set(app);

app.listen(8080, function () {
	console.log('League Hub started on port 8080.');
});