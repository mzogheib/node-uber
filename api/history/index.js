const http = require('../../http');
const { baseApiUrl } = require('../config');

module.exports = ({ offset, limit, access_token }) => http.get({ baseUrl: baseApiUrl, url: '/history', headers: { Authorization: `Bearer ${access_token}` }, params: { offset, limit } })
