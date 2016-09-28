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

	app.get('/extracurricular', function(req, res) {
		res.render('extracurricular', { title : 'Extra Curricular' ,
							 page_name : 'extracurricular'});
	});

	app.get('/recitalinfo', function(req, res) {
		res.render('recitalinfo', { title : 'Recital Information' ,
							 page_name : 'recitalinfo'});
	});

	app.get('/policies', function(req, res) {
		res.render('policies', { title : 'Studio Policies' ,
							 page_name : 'policies'});
	});


}
