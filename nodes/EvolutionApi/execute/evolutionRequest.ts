import { IExecuteFunctions, IRequestOptions } from 'n8n-workflow';

export async function evolutionRequest(ef: IExecuteFunctions, options: IRequestOptions) {
	const credentials = await ef.getCredentials('evolutionApi');
	const serverUrl = credentials['server-url'];
	const apiKey = credentials.apikey;

	// Remove trailing slash from serverUrl if exists
	const baseUrl = serverUrl.toString().replace(/\/$/, '');

	const requestOptions: IRequestOptions = {
		...options,
		headers: {
			'apikey': apiKey,
			'Content-Type': 'application/json',
			'Accept': 'application/json',
			...(options.headers || {}),
		},
		uri: `${baseUrl}${options.uri}`,
	};

	return await ef.helpers.request(requestOptions);
}
