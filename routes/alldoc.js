var express = require('express');
var router = express.Router();

/* GET doctor listing. */
router.get('/', function (req, res, next) {
    var alldoctor = [{
        name: "jahir"
    },
        {name: "alam"}]


    res.send(alldoctor);
});

module.exports = router;
