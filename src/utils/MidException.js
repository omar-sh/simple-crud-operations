const errors = require('./errors');
const _ = require('lodash');

class MidException extends Error {

  constructor(message, details) {
    message = message.split('.');
    const object = _.get(errors, message);
    if (!object)
      throw new Error('Error not found')
    console.log(object);
    super(object.message);
    this.message = object.message;
    this.details = details || null;
    this.statusCode = object.statusCode;
    this.code = object.code;
  }


}

module.exports = MidException;