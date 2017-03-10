var monk=require('monk');
var database = require('../db');
var db=monk(database.db);


module.exports.fillAppraisals= function(data,cb) {

  var appraisal =db.get(data.College);
  appraisal.update({ PinNo:data.PinNo,Appraisalyear:data.Appraisalyear},{$set:data},{ upsert: true },cb)
}

module.exports.reviewAppraisalStatusChange= function(id,year,college,data,cb) {

  var appraisal =db.get(college);
  appraisal.update({ _id:id,Appraisalyear:year},{$set:data},{ upsert: true },cb);

}

module.exports.getAppraisals=function(pin,Appraisalyear,College,cb){

	var appraisal=db.get(College);
	appraisal.findOne({PinNo:pin,Appraisalyear:Appraisalyear,College:College},cb)
}


module.exports.getAppraisalsforHod=function(id,Appraisalyear,College,cb){

	var appraisal=db.get(College);
	appraisal.findOne({_id:id,Appraisalyear:Appraisalyear,College:College},cb)
}


module.exports.getStaffData=function(pin,cb){

  var appraisal=db.get("staffinfo");
  appraisal.findOne({"PinNo":pin},cb)
}

