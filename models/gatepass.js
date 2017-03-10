var monk=require('monk');
var database = require('../db');
var db=monk(database.db);
var moment=require('moment');
var gpd =db.get('gatepass');
  
module.exports.setDetails = function(data,cb) 
{
	
  var year=moment().year();
  var msd= moment().month();

  msd=msd+1;
  var month='';
  if(msd.toString().length <= 1) {
     month = '0' +msd;
  }
  var date=year+'-'+month;
   gpd.count({Code:data.Code,Date:new RegExp(date, 'i')},function(err,count){
      if(err) return err;    
      data.Count=count+1;
      data.Status='submitted';
      //console.log(data);
      gpd.insert(data,function(err,docs) {
        if (err) 
          return cb(err);
        else
          return cb(null,docs);
      });
  
   });
  
}
module.exports.getDetails = function(data,cb) {

   //console.log(tcount);
   data.Status='submitted';
	gpd.find(data,'Name Date Time Reason Role Email Count Code _id',function(err,docs) {
    if (err) 
     return cb(err);
    else
   	return cb(null,docs);
  });

   
}

module.exports.approveGatePass= function(data,cb){

gpd.findOneAndUpdate(data._id,{$set:{Status:'approved',ApprovedBy:data.ApprovedBy}},{returnNewDocument:true},function(err,docs){
      if(err) return err;
      else return cb(null,docs);

  });

}

module.exports.rejectGatePass= function(data,cb){

gpd.findOneAndUpdate(data._id,{$set:{Status:'rejected',RejectedBy:data.RejectedBy,RejectedReason:data.RejectedReason}},{returnNewDocument:true},function(err,docs){

  if(err) return err;
  else
    return cb(null,docs);
});

}

module.exports.removeGatePass= function(data,cb){

gpd.remove({_id:data._id},function(err,docs){

  if(err) return err;
  else
    return cb(null,docs);
});

}

