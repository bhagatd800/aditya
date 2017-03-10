var monk=require('monk');
var database = require('../db');
var db=monk(database.db);

//Storing appraisals into data base

module.exports.setAppraisal = function(StaffCode,data,year,clz,cb) {
	var appraisal =db.get(clz);
	appraisal.update({StaffCode:parseInt(StaffCode),appraisalYear:year,College:clz},{$set:data}, { upsert: true },function(err,docs) {
    if (err) return cb(err)
  });

}

//Getting Appraisals based on ID parameter

module.exports.getFacultyAppraisal = function(data,cb) {

	var appraisal =db.get(data.College);
	appraisal.findOne({_id:data.id},function(err,docs) {
    if (err) return cb(err)
    else
    	cb(null,docs)
  });

}

//getting appraisals for hod 

module.exports.getAppraisalsForHod = function(data,cb) {

	var appraisal =db.get(data.College);
	appraisal.find(data,function(err,docs) {
    if (err) return cb(err)
    else
    	cb(null,docs)
  });

}

//getting appraisals for principal

module.exports.getHodAppraisalsForPrincipal = function(data,cb) {

	var appraisal =db.get(data.College);
	appraisal.find(data,function(err,docs) {
    if (err) return cb(err)
    else
    	cb(null,docs)
  });

}


module.exports.getFacultyAppraisalsForPrincipal = function(data,cb) {

	var appraisal =db.get(data.College);
	appraisal.find(data,function(err,docs) {
    if (err) return cb(err)
    else
    	cb(null,docs)
  });

}

module.exports.getAecStaffAppraisalsForVc = function(data,cb) {

  var appraisal =db.get('AEC');
  appraisal.find(data,function(err,docs) {
    if (err) return cb(err)
    else
      cb(null,docs)
  });

}


module.exports.getAcetStaffAppraisalsForVc = function(data,cb) {

  var appraisal =db.get('ACET');
  appraisal.find(data,function(err,docs) {
    if (err) return cb(err)
    else
      cb(null,docs)
  });

}

module.exports.getAceStaffAppraisalsForVc = function(data,cb) {
<<<<<<< HEAD
  console.log(data);

  var appraisal =db.get('ACE');
  appraisal.find(data,cb);
=======

  var appraisal =db.get('ACE');
  appraisal.find(data,function(err,docs) {
    if (err) return cb(err)
    else
      cb(null,docs)
  });

>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
}


module.exports.getAecHodAppraisalsForVc = function(data,cb) {

  var appraisal =db.get('AEC');
  appraisal.find(data,function(err,docs) {
    if (err) return cb(err)
    else
      cb(null,docs)
  });

}

module.exports.getAcetHodAppraisalsForVc = function(data,cb) {

  var appraisal =db.get('ACET');
  appraisal.find(data,function(err,docs) {
    if (err) return cb(err)
    else
      cb(null,docs)
  });

}
module.exports.getAceHodAppraisalsForVc = function(data,cb) {

  var appraisal =db.get('ACE');
  appraisal.find(data,function(err,docs) {
    if (err) return cb(err)
    else
      cb(null,docs)
  });

}
