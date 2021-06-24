// IP of the server that is hosting the Data Base. Port of the express api, you can check the extension at index.js (at backend folder)
const localhost = 'http://localhost:1880';
// Extension of the api: 'api', you can check the extension at index.js (at backend folder)
const apiExtension = '/api';
// The apiURL is the composition of two strings
const apiUrl = localhost+apiExtension;

export default apiUrl;