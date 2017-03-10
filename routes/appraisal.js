var express = require('express');
var router = express.Router();
var moment= require('moment');
var formidable = require('formidable');
var path = require('path');
var staffInfo = require('../models/staffinfo');
var reviewDate=require('../models/reviewdates');
var appraisal=require('../models/appraisal');
var fs = require('fs');
var moment=require('moment');
<<<<<<< HEAD
var appraisalyear1=moment().year();
var appraisalyear2=appraisalyear1-1;
var current_year= appraisalyear2+ "-"+appraisalyear1;
=======
var current_year=moment().year();
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778

// checking for object empty

function isEmpty(obj) {
    // null and undefined are "empty"
    if (obj == null) return true;
 
    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length && obj.length > 0)    return false;
    if (obj.length === 0) return true; 
}




router.get('/', function(req, res, next) {
   var rdates={};
  if(req.session && req.session.user) {
    res.locals.user = req.session.user;
    //var designation=  res.locals.user.DesignationName.split(' ').pop();

    if(res.locals.user.Role == 'HOD') {
    	var data={
    		  College:res.locals.user.College,
    		  DepartmentName:res.locals.user.DepartmentName,
<<<<<<< HEAD
    		  Appraisalyear:current_year,
    		  status:"appraisal_submitted"
=======
    		  AppraisalYear:current_year,
    		  HodReview:"false"
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
    	    }
    	reviewDate.getReviewDates(function(err,dates){

    		if(err)
    			console.log('error');
    		else
    		  rdates=dates;
   
    	});

    	appraisal.getAppraisalsForHod(data,function(err,staff){
<<<<<<< HEAD
        console.log(staff);
          if(isEmpty(staff)){
            console.log(current_year);
          	res.render('appraisalhod',{nodata:'no new appraisals are submitted',dates:rdates});
          }
          else{
            console.log(staff);
=======
          if(isEmpty(staff)){
            //console.log("no data found");
          	res.render('appraisalhod',{nodata:'no new appraisals are submitted',dates:rdates});
          }
          else{
            //console.log(staff);
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
          	res.render('appraisalhod',{staff:staff,dates:rdates});

          }
    	});	
    }
    
    else if(res.locals.user.Role=='principal'){    	
    	var hod,faculty;
    	var hodsdata={
    		  College:res.locals.user.College,
<<<<<<< HEAD
    		  Appraisalyear:current_year,
    		  status:'hod_submitted',
=======
    		  AppraisalYear:current_year,
    		  PrincipalReview:'false',
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
    		  Role:'HOD'
    		}

    		var facultydata={
    		  College:res.locals.user.College,
<<<<<<< HEAD
    		  Appraisalyear:current_year,
    		  status:'hod_submitted',
    		  Role:'staff'
    		}

    	 appraisal.getHodAppraisalsForPrincipal(hodsdata,function(err,hoddatas){

    		if(isEmpty(hoddatas)){
    		  
          appraisal.getFacultyAppraisalsForPrincipal(facultydata,function(err,staff){
         
          if(isEmpty(staff)){
            //console.log("no data found");
            res.render('appraisalprincipal',{nodata:'no new appraisals are submitted',nodatas:'no new appraisals are submitted'});
          }
          else{
            res.render('appraisalprincipal',{staff:staff,nodatas:'no new appraisals are submitted'});
          }
        });
        }
    		else{
          var hoddata=hoddatas;
          appraisal.getFacultyAppraisalsForPrincipal(facultydata,function(err,staff){
         
          if(isEmpty(staff)){
            //console.log("no data found");
            res.render('appraisalprincipal',{nodata:'no new appraisals are submitted',hod:hoddata});
          }
          else{
            console.log("staff");
            res.render('appraisalprincipal',{staff:staff,hod:hoddata});
            
          }
        });

        }
=======
    		  AppraisalYear:current_year,
    		  PrincipalReview:'false',
    		  HodReview:'true',
    		  Role:'staff'
    		}

    	appraisal.getHodAppraisalsForPrincipal(hodsdata,function(err,hoddata){

    		if(err)
    			console.log('error');
    		else
    		   hod=hoddata;
   
    	});

    	appraisal.getFacultyAppraisalsForPrincipal(facultydata,function(err,staff){
         
    		//console.log(staff);
          	//console.log(hod);
          if(isEmpty(staff) && isEmpty(hod)){
            //console.log("no data found");
          	res.render('appraisalprincipal',{nodata:'no new appraisals are submitted'});
          }
          else{
            //console.log(staff);
          	res.render('appraisalprincipal',{staff:staff,hods:hod});
          	
          }
         
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
    	});

    }

    else{
<<<<<<< HEAD
    res.redirect('appraisalform/appraisalform');
=======
    res.render('appraisalform');
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
    }
  }
  else{
   req.session.reset();
   res.redirect('/login');
  }

});



router.get('/:id',function(req,res,next){

  if(req.session && req.session.user) {
    res.locals.user = req.session.user;
    var data={
    	  College:res.locals.user.College,
    	  id:req.params.id
        }
    appraisal.getFacultyAppraisal(data,function(err,faculty){

    	if(err)
    		//console.log(err);
    		res.redirect('appraisal');
    	else{
    		//console.log(faculty);
    		res.send(faculty);
    	}

    });

  }
  else{
   req.session.reset();
   res.redirect('/login');
  }

});


module.exports = router;

