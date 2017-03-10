var monk=require('monk');
var database = require('../db');
var db=monk(database.db);
var stinfo =db.get('staffinfo');

module.exports.getUser = function(username,pwd,cb) {
  stinfo.findOne({StaffCode:parseInt(username),Password:pwd}, function(err,docs) {
    if (err) return cb(err)
    cb(null, docs)
  });

}

<<<<<<< HEAD
module.exports.getUserDetails = function(staffcode,cb) {
  stinfo.findOne({StaffCode:staffcode},function(err,docs) {
    if (err) return err
    else
      return cb(null,docs);
  });

}


module.exports.updateFile=function(staffcode,path,cb){

	stinfo.update({"PinNo" :staffcode },{$set:path},false,true,function(err){
  	if(err) return err;
	});
}

module.exports.updateMydata=function(staffcode,data,cb){

	stinfo.update({"StaffCode":staffcode},{$set:data},false,true,function(err){

			if(err) return err;
	});

}


module.exports.updateExperience=function(staffcode,data,cb){

stinfo.update(
  { "StaffCode" : staffcode  },{"$push" : {"Experience" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);

  });

}

module.exports.updateScopus=function(staffcode,data,cb){

stinfo.update(
  { "StaffCode" : staffcode  },{"$push" : {"Scopus" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);

  });

}

module.exports.updateNational=function(staffcode,data,cb){

stinfo.update(
  { "StaffCode" : staffcode  },{"$push" : {"National" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);

  });

}


module.exports.updateReputed=function(staffcode,data,cb){

stinfo.update(
  { "StaffCode" : staffcode  },{"$push" : {"Reputed" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);

  });

}

module.exports.updateJournal=function(staffcode,data,cb){

stinfo.update(
  { "StaffCode" : staffcode  },{"$push" : {"Journal" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);

  });

}

module.exports.updateChapter=function(staffcode,data,cb){

stinfo.update(
  { "StaffCode" : staffcode  },{"$push" : {"Chapter" : data}},function(err,docs){
      if(err) return err;
      else
        return cb(null,docs);
 });

}


=======

module.exports.updateFile=function(staffcode,path,cb){
stinfo.update({"PinNo" :staffcode },{$set:path},false,true,function(err){
  if(err) return err;
});


}
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
