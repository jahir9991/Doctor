var express = require('express');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
mongoose.connect('mongodb://jahir9991:hambuHAMBU@ds011429.mlab.com:11429/curlybrace');
var router = express.Router();
var doctorSchema = new Schema({name: String});
doctorSchema.statics.findByName = function (name, cb) {
    return this.find({name: new RegExp(name, 'i')}, cb);
};

var Doctor = mongoose.model('doctor', doctorSchema);


/* GET doctor listing. */
router.get('/', function (req, res, next) {
    Doctor.find().exec(function (err, doc) {
        res.json(doc);
    });
});
router.get('/:one', function (req, res, next) {

    Doctor.findByName(req.params.one, function (err, doc) {
        res.json(doc);
    });
});


module.exports = router;
