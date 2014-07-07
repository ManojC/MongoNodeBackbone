var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/getUser', function (req,res) {
	var db = req.db;
	var collection = db.get('userCollection');
	collection.find({},{},function (e, docs) {
		res.render('user', {users : docs});
	});
});

module.exports = router;
