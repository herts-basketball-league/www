// https://www.netlify.com/blog/how-to-schedule-deploys-with-netlify/
import fetch from 'node-fetch';
import { schedule } from '@netlify/functions';

const BUILD_HOOK = 'https://api.netlify.com/build_hooks/5e9060f89dcf91b6a85e776b'

// Schedules the handler function to run daily at 02:12
const handler = schedule( '12 2 * * *', async () => {
	await fetch( BUILD_HOOK, {
		method: 'POST'
	} ).then(response => {
		console.log('Build hook response:', response);
	} )

	return {
		statusCode: 200
	}
} )

export { handler }
