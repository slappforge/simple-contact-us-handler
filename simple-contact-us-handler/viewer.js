let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();

exports.handler = async (event) => {

	let searchDate = event.queryStringParameters.date;
	let response = {
		body: "",
		statusCode: 200,
		isBase64Encoded: false
	}

	try {
		let data = await ddb.scan({
			TableName: 'contact_us',
			ExpressionAttributeValues: {
				':filterDate': searchDate
			},
			FilterExpression: 'entryDate = :filterDate'
		}).promise();
		console.log("Successfully retrieved entries for:", searchDate);
		response.body = JSON.stringify(data);

	} catch (err) {
		console.log("Failed to retrieve entries for:", searchDate, err);
		response.body = JSON.stringify(err);
		response.statusCode = 500;
	}
	return response;
};