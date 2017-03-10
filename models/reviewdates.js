var monk=require('monk');
var database = require('../db');
var db=monk(database.db);
var reviewdate =db.get('reviewdate');

module.exports.setReviewDate=function(vc_date,principal_date,hod_date,faculty_date,callback){
	reviewdate.update({ edate: "t" },
   {
   	edate: "t",
      vcdate: vc_date,
      principaldate: principal_date,
      hoddate: hod_date,
      facultydate:faculty_date
   },
   { upsert: true },
   function(err){
  	 if(err)
   	return err;
   });
}

module.exports.getReviewDates=function(callback){

reviewdate.findOne({edate:"t"},function(err,dates){

   if(err) callback(err)
   else
   callback(null,dates)
});

}