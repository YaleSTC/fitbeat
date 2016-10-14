var express = require('express');
var router = express.Router();
var _ = require('lodash');

/* Display beats for user. */
router.get('/', function(req, res, next) {
  client.getAccessToken(req.query.code, 'http://localhost:3000/beat').then(function(result){
    var data = {};
  	client.get('/profile.json', result.access_token).then(function(results){
      console.log("Got profile data");
      data = results[0];
  	}).then(function(results) {
      var d = new Date(); // Today!
      d.setDate(d.getDate() - 1); // Yesterday!
      var formattedDate = d.toISOString().substring(0, 10); // convert into yyyy-mm-dd format
      client.get('/activities/date/' + formattedDate + '.json', result.access_token).then(function(results) {
        _.merge(data, results[0]);
        res.render('beat', data);
      });
    });
  }).catch(function(error){
  	res.send(error);
  })
});

module.exports = router;
