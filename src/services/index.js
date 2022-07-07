const user = require('./user/user.service.js');
const client = require('./client/client.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(client);
};
