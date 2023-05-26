const Email = require('./email');
const SMS = require('./sms');

module.exports = { emailClient: new Email(), smsClient: new SMS() };