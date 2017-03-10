var monk=require('monk');
var database = require('../db');
var db=monk(database.db);
var sdff =db.get('sdf');

module.exports.setDetails = function(Code,data) 
{
  
	sdff.update({"Code":Code},{$set:data},{upsert:true},function(err,docs){
  if(err) 
    return err;
  else
   	return cb(null,docs);
  });
	
}

module.exports.getDetails = function(data,cb) {
	sdff.findOne({Code:data},function(err,docs) {
    if (err) 
     return cb(err);
    else
   	 return cb(null,docs);
  });
}