const proxy = require('http-proxy-middleware');

module.exports = function(app) {
	//used to proxy port 3000 to port 5000
	app.use(proxy('/auth/google', {target: 'http://localhost:5000'})); 
	app.use(proxy('/api/**', {target: 'http://localhost:5000'}));
	app.use(proxy('/api/*', {target: 'http://localhost:5000'}));
};
