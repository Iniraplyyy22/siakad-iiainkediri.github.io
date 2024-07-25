const axios = require('axios');

let config = {
		method: 'get',
		maxBodyLength: Infinity,
		url: 'http://siakad.iainkediri.ac.id:800',
		headers: { 
				'Cookie': 'Cookie_1=value'
		},
		maxRedirects: 0
};

async function makeRequest() {
		try {
				const response = await axios.request(config);
				console.log(JSON.stringify(response.data));
		}
		catch (error) {
				console.log(error);
		}
}

makeRequest();
