var monk=require('monk');
var database = require('../db');
var db=monk(database.db);

//Getting staff details from database

module.exports.getFacultyDetails = function(cb) {
	var details =db.get('staffinfo');
	details.find({},'StaffCode StaffName Email MobileNo -_id',function(err,docs) {
    if (err) 
     return cb(err);
    else
   	return cb(null,docs);
  });

}


