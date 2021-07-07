const moment = require('moment');
const { body } = require('express-validator');
const validate = require('./validate');
module.exports = {
  linkValidator: [
    body('title').isString().isLength({ min: 3 }).withMessage('invalid length'),
    body('desc')
      .isString()
      .trim()
      .isLength({ min: 0, max: 1000 })
      .withMessage('invalid length'),
    body('thumbnail')
      .isString()
      .trim()
      .isLength({ min: 1, max: 500 })
      .withMessage('invalid thumbnail'),
    body('url').isString().isLength({ min: 1, max: 500 }),
    body('publisher_id').isInt({ gt: 0 }).withMessage('invalid publisher id'),
    body('up_votes').isInt(),
    body('post_date').custom((value, { req }) => {
      const date = moment(value);
      if (date.isValid()) {
        return Promise.resolve(true);
      }
      return Promise.reject(new Error('invalid date format'));
    }),
    validate,
  ],
};
