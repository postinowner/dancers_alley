module.exports.set = function(app) {

	app.get('/:var(home|index)?', function(req, res) {
		res.render('home', { title : 'Home' ,
							 page_name : 'home'});
	});

	app.get('/about', function(req, res) {
		res.render('about', { title : 'About' ,
							 page_name : 'about'});
	});

	app.get('/news', function(req, res) {
		res.render('news', { title : 'News' ,
							 page_name : 'news'});
	});

	app.get('/schedules', function(req, res) {
		res.render('schedules', { title : 'Schedules' ,
							 page_name : 'schedules'});
	});

	app.get('/workshops', function(req, res) {
		res.render('workshops', { title : 'Workshops' ,
							 page_name : 'workshops'});
	});

	app.get('/recitalinfo', function(req, res) {
		res.render('recitalinfo', { title : 'Recital Info' ,
							 page_name : 'recitalinfo'});
	});

	app.get('/policies', function(req, res) {
		res.render('policies', { title : 'Policies' ,
							 page_name : 'policies'});
	});

	app.get('/ensemble', function(req, res) {
		res.render('ensemble', { title : 'Ensemble' ,
							 page_name : 'ensemble'});
	});

}