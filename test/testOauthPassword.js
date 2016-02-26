var OAuth = require('oauth');
var OAuth2 = OAuth.OAuth2;
var querystring = require('querystring');

var key = '123';
var secret = '123';

var oauth2 = new OAuth2(
	key,
	secret,
	'http://localhost:3000/',
	null,
	'oauth2/token',
	null);


oauth2.getOAuthAccessToken('', {'grant_type':'password',username:123,password:123},
	function (e, access_token, refresh_token, results){
		console.log('access_token: ',access_token);

		var params= {'grant_type':'password',username:123,password:123};
		params['client_id'] = key;
		params['client_secret'] = secret;
		params['access_token'] = access_token;

		var post_data= querystring.stringify( params );
		var post_headers= {
			'Content-Type': 'application/x-www-form-urlencoded'
		};

		oauth2._request("POST", 'http://localhost:3000/api', post_headers, post_data, null, function(err, data, response) {
			if( err )  console.error(err);
			console.log(data);
		});
	});