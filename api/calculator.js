var axios = require('axios').default;

export const getBMIndex = async (age, weight, height) => {
	var options = {
		method: 'GET',
		url: 'https://fitness-calculator.p.rapidapi.com/bmi',
		params: { age: `${age}`, weight: `${weight}`, height: `${height}` },
		headers: {
			'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
			'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
		},
	};

	try {
		return await axios.request(options);
	} catch (err) {
		console.log(err);
	}
};

export const getMacros = async (
	age,
	gender,
	height,
	weight,
	activityLevel,
	goal
) => {
	var options = {
		method: 'GET',
		url: 'https://fitness-calculator.p.rapidapi.com/macrocalculator',
		params: {
			age: `${age}`,
			gender: `${gender}`,
			height: `${height}`,
			weight: `${weight}`,
			activitylevel: `${activityLevel}`,
			goal: `${goal}`,
		},
		headers: {
			'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
			'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
		},
	};

	try {
		return await axios.request(options);
	} catch (err) {
		console.log(err);
	}
};

export const getDailyCalorieReq = async (
	age,
	gender,
	height,
	weight,
	activitylevel
) => {
	var setActicityLevel;
	if (activitylevel === '1') setActicityLevel = 'level_1';
	else if (activitylevel === '2') setActicityLevel = 'level_2';
	else if (activitylevel === '3') setActicityLevel = 'level_3';
	else if (activitylevel === '4') setActicityLevel = 'level_4';
	else if (activitylevel === '5') setActicityLevel = 'level_5';
	var options = {
		method: 'GET',
		url: 'https://fitness-calculator.p.rapidapi.com/dailycalorie',
		params: {
			age: `${age}`,
			gender: `${gender}`,
			height: `${height}`,
			weight: `${weight}`,
			activitylevel: `${setActicityLevel}`,
		},
		headers: {
			'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
			'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
		},
	};

	try {
		return await axios.request(options);
	} catch (err) {
		console.log(err);
	}
};

export const getIdealWeight = async ({ gender, height }) => {
	var options = {
		method: 'GET',
		url: 'https://fitness-calculator.p.rapidapi.com/idealweight',
		params: { gender: `${gender}`, height: `${height}` },
		headers: {
			'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
			'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
		},
	};

	try {
		return await axios.request(options);
	} catch (err) {
		console.log(err);
	}
};

export const getBfpercentage = async (
	age,
	gender,
	weight,
	height,
	neck,
	waist,
	hip
) => {
	var options = {
		method: 'GET',
		url: 'https://fitness-calculator.p.rapidapi.com/bodyfat',
		params: {
			age: `${age}`,
			gender: `${gender}`,
			weight: `${weight}`,
			height: `${height}`,
			neck: `${neck}`,
			waist: `${waist}`,
			hip: `${hip}`,
		},
		headers: {
			'x-rapidapi-host': 'fitness-calculator.p.rapidapi.com',
			'x-rapidapi-key': 'aca7a886e9mshee0f8c5d443f65bp1141abjsn4d18f3853312',
		},
	};

	try {
		return await axios.request(options);
	} catch (err) {
		console.log(err);
	}
};
