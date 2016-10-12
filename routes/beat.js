var express = require('express');
var router = express.Router();

/* Display beats for user. */
router.get('/', function(req, res, next) {
  client.getAccessToken(req.query.code, 'http://localhost:3000/beat').then(function(result){
  	client.get('/profile.json', result.access_token).then(function(results){
  		res.send(results);
  	});
  }).catch(function(error){
  	res.send(error);
  })
});

module.exports = router;
