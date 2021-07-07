const express = require('express');
const { linkValidator } = require('../middleware/validator');
const paginateValidator = require('../middleware/common/paginateValidator');
const searchQuery = require('../middleware/common/searchQuery');
const router = express.Router();

const { create, readList, readSingle } = require('../queries/links');

router.post('/', linkValidator, (req, res) => {
  create(req)
    .then((data) => {
      res.json({
        msg: 'success',
        id: data,
      });
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json({
        msg: 'bad request',
      });
    });
});

router.get('/list', searchQuery, paginateValidator, (req, res) => {
  readList(req)
    .then((data) => {
      res.json(data);
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json({
        msg: 'bad request',
      });
    });
});
router.get('/:link_id', (req, res) => {
  readSingle(req)
    .then(([data]) => {
      if (data) {
        res.json(data);
      } else {
        res.status(404).json({
          err: 'no such id in the database',
        });
      }
    })
    .catch((e) => {
      console.log(e);
      res.status(400).json({
        msg: 'bad request',
      });
    });
});

module.exports = router;
