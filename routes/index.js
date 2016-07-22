var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
    //res.render('index', {title: 'DOCTOR LIST'});
    res.render('my', {title: 'Jahir alam'});
});

module.exports = router;
