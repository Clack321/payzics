const user = require('./user/user.service.js');
const client = require('./client/client.service.js');
const invoice = require('./invoice/invoice.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(user);
  app.configure(client);
  app.configure(invoice);
};
