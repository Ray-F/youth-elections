var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {

  // returns object accessible as result[0]['value'] == True;
  res.json([
    {
	id: 1,
	value: "Hello, my dear friend!"
    }
  ]);
});

module.exports = router;
