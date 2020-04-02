let AWS = require('aws-sdk');
const ddb = new AWS.DynamoDB.DocumentClient();
const validate = require("validate.js");

const constraints = {
	email: {
		presence: true,
		email: true
	},
	name: {
		presence: true,
		length: {
			minimum: 1
		},
	}
};

exports.handler = async (event) => {

	//validating email and name
	let invalid = validate(event, constraints);

	if (!invalid) {
		let today = new Date().toLocaleDateString();
		try {
			await ddb.put({
				TableName: 'contact_us',
				Item: {
					'name': event.name,
					'email': event.email,
					'phone': event.phone,
					'company': event.company,
					'comment': event.comment,
					'entryDate': today
				}
			}).promise();
			console.log("Successfully Saved entry from email:", event.email);
			return "Successfully Saved Entry!";

		} catch (err) {
			console.log("Failed to save entry from email:", event.email, err);
			throw err;
		}

	} else {
		console.log("Event validation failed", invalid);
		throw new Error(JSON.stringify(invalid));
	}
};