module.exports.set = function(app) {

	app.get('/:var(home|index)?', function(req, res) {
		res.render('home', { title : 'Home' ,
							 page_name : 'home'});
	});

	app.get('/about', function(req, res) {
		res.render('about', { title : 'About' ,
							 page_name : 'about'});
	});

}