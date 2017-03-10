var monk=require('monk');
var database = require('../db');
var db=monk(database.db);
var sampdata =db.get('sampledata');

module.exports.InsertUser = function(data,cb) {
  sampdata.insert(data, function(err,docs) {
    if (err) return cb(err)
  });

}
