var champions = require('./champions.js');

module.exports.set = function(app) {

	app.get('/:var(home|index)?', function(req, res) {
		res.render('home', { title : 'Home' ,
							 page_name : 'home'});
	});

	champions.set(app);

}