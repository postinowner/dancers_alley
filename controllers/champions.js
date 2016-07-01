module.exports.set = function(app) {

	app.get('/champions', function(req, res) {
		res.render('champions', { title : 'Champions' ,
								  page_name : 'champions'});
	});

	app.get('/champions_data', function(req, res) {
		res.render('champions_data', { title : 'Champions Data' ,
									   page_name : 'championsdata'});
	});

}