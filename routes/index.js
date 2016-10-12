var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // create new FitbitApiClient object
  var FitbitApiClient = require('fitbit-node');
  // authenticate app to use Fitbit API
  var client = new FitbitApiClient("228342", "a714f147df035acd89a53df09511e24b");
  res.redirect(client.getAuthorizeUrl(
    'activity heartrate location nutrition profile settings sleep social weight',
    'http://localhost:3000/beat'));
});

module.exports = router;
