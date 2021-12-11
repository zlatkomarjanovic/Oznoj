var axios = require('axios').default;

var options = {
	method: 'GET',
	url: 'https://exercisedb.p.rapidapi.com/exercises',
	headers: {
		'x-rapidapi-host': 'exercisedb.p.rapidapi.com',
		'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
	},
};

axios
	.request(options)
	.then(function (response) {
		return response.data;
	})
	.catch(function (error) {
		console.error(error);
	});
