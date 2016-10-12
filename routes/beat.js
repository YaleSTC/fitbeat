var express = require('express');
var router = express.Router();

/* Display beats for user. */
router.get('/', function(req, res, next) {
  res.send('BEATS PAGE');
});

module.exports = router;
