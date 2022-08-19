var express = require('express');
var router = express.Router();

const PayController = require('../controllers/PayController');

/* GET home page. 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
*/


router.get("/", PayController.form);
router.post("/PayController/", PayController.check);


module.exports = router;
