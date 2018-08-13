const oauth = require('./api/oauth');
const history = require('./api/history');

module.exports = class NodeUber {
  constructor({ client_id, client_secret, redirect_uri }) {
    this.oauth = {
      url: () => oauth.url({ client_id, redirect_uri }),
      token: ({ code }) => oauth.token({ code, client_id, client_secret, redirect_uri }),
      deauthorize: ({ access_token }) => oauth.deauthorize({ access_token, client_id, client_secret }),
      refresh: ({ refresh_token }) => oauth.refresh({ refresh_token, client_id, client_secret })
    }
    this.history = history;
  }
}
