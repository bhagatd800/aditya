var express = require('express');
var router = express.Router();
var moment= require('moment');
var formidable = require('formidable');
var path = require('path');
var staffInfo = require('../models/staffinfo');
var reviewDate=require('../models/reviewdates');
<<<<<<< HEAD
//var appraisalAec=require('../models/aecappraisal');
// var appraisalAect=require('../models/aectappraisal');
// var appraisalAce=require('../models/aceappraisal');
var fs = require('fs');
var request = require('request');
var moment=require('moment');
var current_year=moment().year();
var Appraisal=require('../models/appraisalform');
var email=require('emailjs/email');

//*********************************************************************************
// Post Request from appraisal form
router.post('/geninfo',function(req,res){

var appraisalyear1=moment().year();
var appraisalyear2=appraisalyear1-1;
var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
 Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            generalInformation:req.body},function(err,cb){

 });
    
  });

router.post('/subaverage',function(req,res){
  
 
var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
 
 Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            subjectAverage:req.body},function(err,cb){

 });

    
});

router.post('/proaverage',function(req,res){

 // console.log(req.body);
  var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            proctoringAverage:req.body},function(err,cb){

 });
 
    
  });

router.post('/feedback',function(req,res){
  
 var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;

  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            feedback:req.body},function(err,cb){

 });
    
  });


router.post('/research',function(req,res){
  
 var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            researchPublication:req.body},function(err,cb){

 });
    
});

router.post('/postScopusData',function(req,res){


         var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            scopus:req.body},function(err,cb){

 });

});
router.post('/postNationalData',function(req,res){


         var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            national:req.body},function(err,cb){

 });

});
router.post('/postReputedData',function(req,res){


         var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            reputed:req.body},function(err,cb){

 });

});
router.post('/postJournalData',function(req,res){


         var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            journal:req.body},function(err,cb){

 });

});
router.post('/postBookData',function(req,res){


      var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            chapter:req.body},function(err,cb){

 });

});

router.post('/workshop',function(req,res){
 
 var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            workshop:req.body},function(err,cb){

 });
    
  });
router.post('/appraisalpoint',function(req,res){
  
 var data={ appraisalPoint:req.body};
 var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            appraisalpoint:req.body},function(err,cb){

 });
    
  });

router.post('/resposibility',function(req,res){
  //console.log(req.body);
 var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            status:'appraisal_start',
            Resposibility:req.body},function(err,cb){

 });
    
});



router.post('/submitappraisal',function(req,res){
 var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
      if(req.session.user.Role=="HOD"){
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            Role:req.session.user.Role,
            status:'hod_submitted'},function(err,cb){
              if(err){
                console.log(err);
              } 
              else{

                var server  = email.server.connect({
                                 user:    "myhub.helpline@aditya.ac.in", 
                                 password:"Thub@aditya", 
                                 host:    "smtp.gmail.com", 
                                 ssl:     true
                              });

                                /** outlook configuration
                                  var server  = email.server.connect({
                                 user:    "username", 
                                 password:"password", 
                                 host:    "smtp-mail.outlook.com", 
                                 tls: {ciphers: "SSLv3"}
                              });
                                **/
                                //console.log(data);
                              
                                  
                                var msg="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width'><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>Appraisal</title><style type='text/css'>@media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important;table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a {font-size: 16px !important; table[class=body] .wrapper,table[class=body] .article {padding: 10px !important; }table[class=body] .content {padding: 0 !important; }table[class=body] .container {padding: 0 !important;width: 100% !important; }table[class=body] .main {border-left-width: 0 !important;border-radius: 0 !important;border-right-width: 0 !important; }table[class=body] .btn table {width: 100% !important; }table[class=body] .btn a {width: 100% !important; }table[class=body] .img-responsive {height: auto !important;max-width: 100% !important;width: auto !important; }}@media all {.ExternalClass {width: 100%; }.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height: 100%; }.apple-link a {color: inherit !important;font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;text-decoration: none !important; }.btn-primary table td:hover {background-color: #34495e !important; }.btn-primary a:hover {background-color: #34495e !important;border-color: #34495e !important; } }</style></head><body class='' style='background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;'><table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td><td class='container' style='font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;'><div class='content' style='box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;'><!-- START CENTERED WHITE CONTAINER --><span class='preheader' style='color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;'>This is preheader text. Some clients will show this text as a preview.</span><table class='main' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;'><tr><td class='wrapper' style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><b>Hi "+req.session.user.StaffName+",</b></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Your Appraisal was <b>Sumitted SuccessFully</b></p><table border='0' cellpadding='0' cellspacing='0' class='btn btn-primary' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;'><tbody><tr><td align='left' style='font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;'><center><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;'></td></tr></tbody></table></center></td></tr></tbody></table><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><center><b></b></center></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Have a Good Day!.</p></td></tr></table></td></tr></table><!-- START FOOTER --><div class='footer' style='clear:both;padding-top:10px;text-align:center;width:100%;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td class='content-block' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'><span class='apple-link' style='color:#999999;font-size:12px;text-align:center;'>Aditya Educational Institutions,Surampalem,533437</span><br>This email is system generated, please do not respond to this email.</td></tr><tr><td class='content-block powered-by' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'>Powered by <a href='http://thub.ac.edu.in' style='color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;'>T-HUB team</a>.</td></tr></table></div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --></div></td><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td></tr></table></body></html>";

                                //console.log(qrdata);
                                  
                              var message = {
                                 text:    msg, 
                                 from:    "My Hub<myhub.helpline@aditya.ac.in>", 
                                 to:      "rajesh.cme123@gmail.com,srikala561@gmail.com,vmanu546@gmail.com,bhagatd800@gmail.com",   // change mail for faculty
                                 cc:      "",
                                 subject: "Appraisal Status",
                                 attachment: 
                                 [
                                    {data:msg, alternative:true},
                                    //attachment
                                    //{path:"C:/Users/Admin/Desktop/file/rj.html", type:"application/html", name:"rj.html"}
                                    
                                 ]
                              };

                              // send the message and get a callback with an error or details of the message that was sent
                              server.send(message, function(err, message) { 
                                if(err)
                                console.log(err);

                               });
              }
                  

              

 });
}
else{
  Appraisal.fillAppraisals({PinNo:req.session.user.PinNo,
            StaffName:req.session.user.StaffName,
            DepartmentName:req.session.user.DepartmentName,
            College:req.session.user.College,
            Appraisalyear:appraisalyear,
            Role:req.session.user.Role,
            status:'appraisal_submitted'},function(err,cb){
              if(err){
                console.log(err);
              } 
              else{

                var server  = email.server.connect({
                                 user:    "myhub.helpline@aditya.ac.in", 
                                 password:"Thub@aditya", 
                                 host:    "smtp.gmail.com", 
                                 ssl:     true
                              });

                                /** outlook configuration
                                  var server  = email.server.connect({
                                 user:    "username", 
                                 password:"password", 
                                 host:    "smtp-mail.outlook.com", 
                                 tls: {ciphers: "SSLv3"}
                              });
                                **/
                                //console.log(data);
                              
                                  
                                var msg="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width'><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>Appraisal</title><style type='text/css'>@media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important;table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a {font-size: 16px !important; table[class=body] .wrapper,table[class=body] .article {padding: 10px !important; }table[class=body] .content {padding: 0 !important; }table[class=body] .container {padding: 0 !important;width: 100% !important; }table[class=body] .main {border-left-width: 0 !important;border-radius: 0 !important;border-right-width: 0 !important; }table[class=body] .btn table {width: 100% !important; }table[class=body] .btn a {width: 100% !important; }table[class=body] .img-responsive {height: auto !important;max-width: 100% !important;width: auto !important; }}@media all {.ExternalClass {width: 100%; }.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height: 100%; }.apple-link a {color: inherit !important;font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;text-decoration: none !important; }.btn-primary table td:hover {background-color: #34495e !important; }.btn-primary a:hover {background-color: #34495e !important;border-color: #34495e !important; } }</style></head><body class='' style='background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;'><table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td><td class='container' style='font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;'><div class='content' style='box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;'><!-- START CENTERED WHITE CONTAINER --><span class='preheader' style='color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;'>This is preheader text. Some clients will show this text as a preview.</span><table class='main' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;'><tr><td class='wrapper' style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><b>Hi "+req.session.user.StaffName+",</b></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Your Appraisal was <b>Sumitted SuccessFully</b></p><table border='0' cellpadding='0' cellspacing='0' class='btn btn-primary' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;'><tbody><tr><td align='left' style='font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;'><center><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;'></td></tr></tbody></table></center></td></tr></tbody></table><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><center><b></b></center></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Have a Good Day!.</p></td></tr></table></td></tr></table><!-- START FOOTER --><div class='footer' style='clear:both;padding-top:10px;text-align:center;width:100%;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td class='content-block' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'><span class='apple-link' style='color:#999999;font-size:12px;text-align:center;'>Aditya Educational Institutions,Surampalem,533437</span><br>This email is system generated, please do not respond to this email.</td></tr><tr><td class='content-block powered-by' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'>Powered by <a href='http://thub.ac.edu.in' style='color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;'>T-HUB team</a>.</td></tr></table></div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --></div></td><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td></tr></table></body></html>";

                                //console.log(qrdata);
                                  
                              var message = {
                                 text:    msg, 
                                 from:    "My Hub<myhub.helpline@aditya.ac.in>", 
                                 to:      "rajesh.cme123@gmail.com,srikala561@gmail.com,vmanu546@gmail.com,bhagatd800@gmail.com",   // change mail for faculty
                                 cc:      "",
                                 subject: "Appraisal Status",
                                 attachment: 
                                 [
                                    {data:msg, alternative:true},
                                    //attachment
                                    //{path:"C:/Users/Admin/Desktop/file/rj.html", type:"application/html", name:"rj.html"}
                                    
                                 ]
                              };

                              // send the message and get a callback with an error or details of the message that was sent
                              server.send(message, function(err, message) { 
                                if(err)
                                console.log(err);

                               });
              }
                  

              


 });
}
    
});

router.post('/hodreviewsubmit',function(req,res){
//console.log(req.body.email);
var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
Appraisal.reviewAppraisalStatusChange( hodreviewid,appraisalyear,req.session.user.College,{
                          status:"hod_submitted",
                          hodcomment:{
                            subjectAverageComment:req.body.subjectAverageComment,
                            proctoringAverageComment:req.body.proctoringAverageComment,
                            feedbackComment:req.body.feedbackComment,
                            researchComment:req.body.researchComment,
                            scopusComment:req.body.scopusComment,
                            nationalComment:req.body.nationalComment,
                            reputedConferenceComment:req.body.reputedConferenceComment,
                            journalConferenceComment:req.body.journalConferenceComment,
                            chapterBookComment:req.body.chapterBookComment,
                            workshopComment:req.body.workshopComment,
                            pointEarnedComment:req.body.pointEarnedComment,
                            addResponsibilityComment:req.body.addResponsibilityComment
                          }},function(err,cb){
                            if(err){
                console.log(err);
              } 
              else{

                var server  = email.server.connect({
                                 user:    "myhub.helpline@aditya.ac.in", 
                                 password:"Thub@aditya", 
                                 host:    "smtp.gmail.com", 
                                 ssl:     true
                              });

                                /** outlook configuration
                                  var server  = email.server.connect({
                                 user:    "username", 
                                 password:"password", 
                                 host:    "smtp-mail.outlook.com", 
                                 tls: {ciphers: "SSLv3"}
                              });
                                **/
                                //console.log(data);
                              
                                  
                                var msg="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width'><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>Appraisal</title><style type='text/css'>@media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important;table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a {font-size: 16px !important; table[class=body] .wrapper,table[class=body] .article {padding: 10px !important; }table[class=body] .content {padding: 0 !important; }table[class=body] .container {padding: 0 !important;width: 100% !important; }table[class=body] .main {border-left-width: 0 !important;border-radius: 0 !important;border-right-width: 0 !important; }table[class=body] .btn table {width: 100% !important; }table[class=body] .btn a {width: 100% !important; }table[class=body] .img-responsive {height: auto !important;max-width: 100% !important;width: auto !important; }}@media all {.ExternalClass {width: 100%; }.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height: 100%; }.apple-link a {color: inherit !important;font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;text-decoration: none !important; }.btn-primary table td:hover {background-color: #34495e !important; }.btn-primary a:hover {background-color: #34495e !important;border-color: #34495e !important; } }</style></head><body class='' style='background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;'><table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td><td class='container' style='font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;'><div class='content' style='box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;'><!-- START CENTERED WHITE CONTAINER --><span class='preheader' style='color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;'>This is preheader text. Some clients will show this text as a preview.</span><table class='main' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;'><tr><td class='wrapper' style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><b>Hi "+req.body.name+",</b></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Your Appraisal was <b>Promoted by HOD</b></p><table border='0' cellpadding='0' cellspacing='0' class='btn btn-primary' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;'><tbody><tr><td align='left' style='font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;'><center><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;'></td></tr></tbody></table></center></td></tr></tbody></table><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><center><b></b></center></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Have a Good Day!.</p></td></tr></table></td></tr></table><!-- START FOOTER --><div class='footer' style='clear:both;padding-top:10px;text-align:center;width:100%;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td class='content-block' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'><span class='apple-link' style='color:#999999;font-size:12px;text-align:center;'>Aditya Educational Institutions,Surampalem,533437</span><br>This email is system generated, please do not respond to this email.</td></tr><tr><td class='content-block powered-by' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'>Powered by <a href='http://thub.ac.edu.in' style='color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;'>T-HUB team</a>.</td></tr></table></div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --></div></td><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td></tr></table></body></html>";

                                //console.log(qrdata);
                                  
                              var message = {
                                 text:    msg, 
                                 from:    "My Hub<myhub.helpline@aditya.ac.in>", 
                                 to:      "rajesh.cme123@gmail.com,srikala561@gmail.com,vmanu546@gmail.com,bhagatd800@gmail.com",   // change mail for faculty
                                 cc:      "",
                                 subject: "Appraisal Status",
                                 attachment: 
                                 [
                                    {data:msg, alternative:true},
                                    //attachment
                                    //{path:"C:/Users/Admin/Desktop/file/rj.html", type:"application/html", name:"rj.html"}
                                    
                                 ]
                              };

                              // send the message and get a callback with an error or details of the message that was sent
                              server.send(message, function(err, message) { 
                                if(err)
                                console.log(err);

                               });
              }


 });
    
});

router.post('/principalReviewPromote',function(req,res){
//console.log(req.body.email);
var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
Appraisal.reviewAppraisalStatusChange( hodreviewid,appraisalyear,req.session.user.College,{
                          status:"principalApproved",
                          principalComment:{
                           review:req.body.review
                          }},function(err,cb){
                            if(err){
                console.log(err);
              } 
              else{

                var server  = email.server.connect({
                                 user:    "myhub.helpline@aditya.ac.in", 
                                 password:"Thub@aditya", 
                                 host:    "smtp.gmail.com", 
                                 ssl:     true
                              });

                                /** outlook configuration
                                  var server  = email.server.connect({
                                 user:    "username", 
                                 password:"password", 
                                 host:    "smtp-mail.outlook.com", 
                                 tls: {ciphers: "SSLv3"}
                              });
                                **/
                                //console.log(data);
                              
                                  
                                var msg="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width'><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>Appraisal</title><style type='text/css'>@media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important;table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a {font-size: 16px !important; table[class=body] .wrapper,table[class=body] .article {padding: 10px !important; }table[class=body] .content {padding: 0 !important; }table[class=body] .container {padding: 0 !important;width: 100% !important; }table[class=body] .main {border-left-width: 0 !important;border-radius: 0 !important;border-right-width: 0 !important; }table[class=body] .btn table {width: 100% !important; }table[class=body] .btn a {width: 100% !important; }table[class=body] .img-responsive {height: auto !important;max-width: 100% !important;width: auto !important; }}@media all {.ExternalClass {width: 100%; }.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height: 100%; }.apple-link a {color: inherit !important;font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;text-decoration: none !important; }.btn-primary table td:hover {background-color: #34495e !important; }.btn-primary a:hover {background-color: #34495e !important;border-color: #34495e !important; } }</style></head><body class='' style='background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;'><table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td><td class='container' style='font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;'><div class='content' style='box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;'><!-- START CENTERED WHITE CONTAINER --><span class='preheader' style='color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;'>This is preheader text. Some clients will show this text as a preview.</span><table class='main' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;'><tr><td class='wrapper' style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><b>Hi "+req.body.name+",</b></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Your Appraisal was <b>Promoted by Principal</b></p><table border='0' cellpadding='0' cellspacing='0' class='btn btn-primary' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;'><tbody><tr><td align='left' style='font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;'><center><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;'></td></tr></tbody></table></center></td></tr></tbody></table><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><center><b></b></center></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Have a Good Day!.</p></td></tr></table></td></tr></table><!-- START FOOTER --><div class='footer' style='clear:both;padding-top:10px;text-align:center;width:100%;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td class='content-block' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'><span class='apple-link' style='color:#999999;font-size:12px;text-align:center;'>Aditya Educational Institutions,Surampalem,533437</span><br>This email is system generated, please do not respond to this email.</td></tr><tr><td class='content-block powered-by' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'>Powered by <a href='http://thub.ac.edu.in' style='color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;'>T-HUB team</a>.</td></tr></table></div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --></div></td><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td></tr></table></body></html>";

                                //console.log(qrdata);
                                  
                              var message = {
                                 text:    msg, 
                                 from:    "My Hub<myhub.helpline@aditya.ac.in>", 
                                 to:      "rajesh.cme123@gmail.com,srikala561@gmail.com,vmanu546@gmail.com,bhagatd800@gmail.com",   // change mail for faculty
                                 cc:      "",
                                 subject: "Appraisal Status",
                                 attachment: 
                                 [
                                    {data:msg, alternative:true},
                                    //attachment
                                    //{path:"C:/Users/Admin/Desktop/file/rj.html", type:"application/html", name:"rj.html"}
                                    
                                 ]
                              };

                              // send the message and get a callback with an error or details of the message that was sent
                              server.send(message, function(err, message) { 
                                if(err)
                                console.log(err);

                               });
              }


 });
    
});

router.post('/principalReviewReject',function(req,res){
//console.log(req.body.email);
var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
Appraisal.reviewAppraisalStatusChange( hodreviewid,appraisalyear,req.session.user.College,{
                          status:"principalRejected",
                          principalComment:{
                            review:req.body.review
                          }},function(err,cb){
                            if(err){
                console.log(err);
              } 
              else{

                var server  = email.server.connect({
                                 user:    "myhub.helpline@aditya.ac.in", 
                                 password:"Thub@aditya", 
                                 host:    "smtp.gmail.com", 
                                 ssl:     true
                              });

                                /** outlook configuration
                                  var server  = email.server.connect({
                                 user:    "username", 
                                 password:"password", 
                                 host:    "smtp-mail.outlook.com", 
                                 tls: {ciphers: "SSLv3"}
                              });
                                **/
                                //console.log(data);
                              
                                  
                                var msg="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width'><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>Appraisal</title><style type='text/css'>@media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important;table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a {font-size: 16px !important; table[class=body] .wrapper,table[class=body] .article {padding: 10px !important; }table[class=body] .content {padding: 0 !important; }table[class=body] .container {padding: 0 !important;width: 100% !important; }table[class=body] .main {border-left-width: 0 !important;border-radius: 0 !important;border-right-width: 0 !important; }table[class=body] .btn table {width: 100% !important; }table[class=body] .btn a {width: 100% !important; }table[class=body] .img-responsive {height: auto !important;max-width: 100% !important;width: auto !important; }}@media all {.ExternalClass {width: 100%; }.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height: 100%; }.apple-link a {color: inherit !important;font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;text-decoration: none !important; }.btn-primary table td:hover {background-color: #34495e !important; }.btn-primary a:hover {background-color: #34495e !important;border-color: #34495e !important; } }</style></head><body class='' style='background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;'><table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td><td class='container' style='font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;'><div class='content' style='box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;'><!-- START CENTERED WHITE CONTAINER --><span class='preheader' style='color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;'>This is preheader text. Some clients will show this text as a preview.</span><table class='main' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;'><tr><td class='wrapper' style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><b>Hi "+req.body.name+",</b></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Your Appraisal was <b>Rejected by Principal</b></p><table border='0' cellpadding='0' cellspacing='0' class='btn btn-primary' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;'><tbody><tr><td align='left' style='font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;'><center><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;'></td></tr></tbody></table></center></td></tr></tbody></table><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><center><b></b></center></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Have a Good Day!.</p></td></tr></table></td></tr></table><!-- START FOOTER --><div class='footer' style='clear:both;padding-top:10px;text-align:center;width:100%;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td class='content-block' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'><span class='apple-link' style='color:#999999;font-size:12px;text-align:center;'>Aditya Educational Institutions,Surampalem,533437</span><br>This email is system generated, please do not respond to this email.</td></tr><tr><td class='content-block powered-by' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'>Powered by <a href='http://thub.ac.edu.in' style='color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;'>T-HUB team</a>.</td></tr></table></div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --></div></td><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td></tr></table></body></html>";

                                //console.log(qrdata);
                                  
                              var message = {
                                 text:    msg, 
                                 from:    "My Hub<myhub.helpline@aditya.ac.in>", 
                                 to:      "rajesh.cme123@gmail.com,srikala561@gmail.com,vmanu546@gmail.com,bhagatd800@gmail.com",   // change mail for faculty
                                 cc:      "",
                                 subject: "Appraisal Status",
                                 attachment: 
                                 [
                                    {data:msg, alternative:true},
                                    //attachment
                                    //{path:"C:/Users/Admin/Desktop/file/rj.html", type:"application/html", name:"rj.html"}
                                    
                                 ]
                              };

                              // send the message and get a callback with an error or details of the message that was sent
                              server.send(message, function(err, message) { 
                                if(err)
                                console.log(err);

                               });
              }


 });
    
});

router.post('/directReviewApproved',function(req,res){
  console.log(req.body);
  appraisalyear1=moment().year();
  var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
Appraisal.reviewAppraisalStatusChange(req.body.member_id,appraisalyear,req.session.user.College,
                          {
                          status:"principalApproved"
                        },
                         function(err,cb){
                            if(err){
                console.log(err);
              } 
              else{

                var server  = email.server.connect({
                                 user:    "myhub.helpline@aditya.ac.in", 
                                 password:"Thub@aditya", 
                                 host:    "smtp.gmail.com", 
                                 ssl:     true
                              });

                                /** outlook configuration
                                  var server  = email.server.connect({
                                 user:    "username", 
                                 password:"password", 
                                 host:    "smtp-mail.outlook.com", 
                                 tls: {ciphers: "SSLv3"}
                              });
                                **/
                                //console.log(data);
                              
                                  
                              var msg="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width'><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>Appraisal</title><style type='text/css'>@media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important;table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a {font-size: 16px !important; table[class=body] .wrapper,table[class=body] .article {padding: 10px !important; }table[class=body] .content {padding: 0 !important; }table[class=body] .container {padding: 0 !important;width: 100% !important; }table[class=body] .main {border-left-width: 0 !important;border-radius: 0 !important;border-right-width: 0 !important; }table[class=body] .btn table {width: 100% !important; }table[class=body] .btn a {width: 100% !important; }table[class=body] .img-responsive {height: auto !important;max-width: 100% !important;width: auto !important; }}@media all {.ExternalClass {width: 100%; }.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height: 100%; }.apple-link a {color: inherit !important;font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;text-decoration: none !important; }.btn-primary table td:hover {background-color: #34495e !important; }.btn-primary a:hover {background-color: #34495e !important;border-color: #34495e !important; } }</style></head><body class='' style='background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;'><table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td><td class='container' style='font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;'><div class='content' style='box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;'><!-- START CENTERED WHITE CONTAINER --><span class='preheader' style='color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;'>This is preheader text. Some clients will show this text as a preview.</span><table class='main' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;'><tr><td class='wrapper' style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><b>Hi "+req.body.name+",</b></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Your Appraisal was <b>Rejected by Principal</b></p><table border='0' cellpadding='0' cellspacing='0' class='btn btn-primary' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;'><tbody><tr><td align='left' style='font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;'><center><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;'></td></tr></tbody></table></center></td></tr></tbody></table><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><center><b></b></center></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Have a Good Day!.</p></td></tr></table></td></tr></table><!-- START FOOTER --><div class='footer' style='clear:both;padding-top:10px;text-align:center;width:100%;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td class='content-block' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'><span class='apple-link' style='color:#999999;font-size:12px;text-align:center;'>Aditya Educational Institutions,Surampalem,533437</span><br>This email is system generated, please do not respond to this email.</td></tr><tr><td class='content-block powered-by' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'>Powered by <a href='http://thub.ac.edu.in' style='color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;'>T-HUB team</a>.</td></tr></table></div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --></div></td><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td></tr></table></body></html>";

                                //console.log(qrdata);
                                  
                              var message = {
                                 text:    msg, 
                                 from:    "My Hub<myhub.helpline@aditya.ac.in>", 
                                 to:      "rajesh.cme123@gmail.com,srikala561@gmail.com,vmanu546@gmail.com,bhagatd800@gmail.com",   // change mail for faculty
                                 cc:      "",
                                 subject: "Appraisal Status",
                                 attachment: 
                                 [
                                    {data:msg, alternative:true},
                                    //attachment
                                    //{path:"C:/Users/Admin/Desktop/file/rj.html", type:"application/html", name:"rj.html"}
                                    
                                 ]
                              };

                              // send the message and get a callback with an error or details of the message that was sent
                              server.send(message, function(err, message) { 
                                if(err)
                                console.log(err);

                               });

              }


 });
res.send("success");

  });


router.post('/directReviewRejected',function(req,res){
  console.log(req.body);
  appraisalyear1=moment().year();
  var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
Appraisal.reviewAppraisalStatusChange(req.body.member_id,appraisalyear,req.session.user.College,
                          {
                          status:"principalRejected"
                        },
                         function(err,cb){
                            if(err){
                console.log(err);
              } 
              else{

                var server  = email.server.connect({
                                 user:    "myhub.helpline@aditya.ac.in", 
                                 password:"Thub@aditya", 
                                 host:    "smtp.gmail.com", 
                                 ssl:     true
                              });

                                /** outlook configuration
                                  var server  = email.server.connect({
                                 user:    "username", 
                                 password:"password", 
                                 host:    "smtp-mail.outlook.com", 
                                 tls: {ciphers: "SSLv3"}
                              });
                                **/
                                //console.log(data);
                              
                                  
                              var msg="<!DOCTYPE html><html><head><meta name='viewport' content='width=device-width'><meta http-equiv='Content-Type' content='text/html; charset=UTF-8'><title>Appraisal</title><style type='text/css'>@media only screen and (max-width: 620px) {table[class=body] h1 {font-size: 28px !important;table[class=body] p,table[class=body] ul,table[class=body] ol,table[class=body] td,table[class=body] span,table[class=body] a {font-size: 16px !important; table[class=body] .wrapper,table[class=body] .article {padding: 10px !important; }table[class=body] .content {padding: 0 !important; }table[class=body] .container {padding: 0 !important;width: 100% !important; }table[class=body] .main {border-left-width: 0 !important;border-radius: 0 !important;border-right-width: 0 !important; }table[class=body] .btn table {width: 100% !important; }table[class=body] .btn a {width: 100% !important; }table[class=body] .img-responsive {height: auto !important;max-width: 100% !important;width: auto !important; }}@media all {.ExternalClass {width: 100%; }.ExternalClass,.ExternalClass p,.ExternalClass span,.ExternalClass font,.ExternalClass td,.ExternalClass div {line-height: 100%; }.apple-link a {color: inherit !important;font-family: inherit !important;font-size: inherit !important;font-weight: inherit !important;line-height: inherit !important;text-decoration: none !important; }.btn-primary table td:hover {background-color: #34495e !important; }.btn-primary a:hover {background-color: #34495e !important;border-color: #34495e !important; } }</style></head><body class='' style='background-color:#f6f6f6;font-family:sans-serif;-webkit-font-smoothing:antialiased;font-size:14px;line-height:1.4;margin:0;padding:0;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;'><table border='0' cellpadding='0' cellspacing='0' class='body' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background-color:#f6f6f6;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td><td class='container' style='font-family:sans-serif;font-size:14px;vertical-align:top;display:block;max-width:580px;padding:10px;width:580px;Margin:0 auto !important;'><div class='content' style='box-sizing:border-box;display:block;Margin:0 auto;max-width:580px;padding:10px;'><!-- START CENTERED WHITE CONTAINER --><span class='preheader' style='color:transparent;display:none;height:0;max-height:0;max-width:0;opacity:0;overflow:hidden;mso-hide:all;visibility:hidden;width:0;'>This is preheader text. Some clients will show this text as a preview.</span><table class='main' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;background:#fff;border-radius:3px;width:100%;'><tr><td class='wrapper' style='font-family:sans-serif;font-size:14px;vertical-align:top;box-sizing:border-box;padding:20px;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><b>Hi "+req.body.name+",</b></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Your Appraisal was <b>Rejected by Principal</b></p><table border='0' cellpadding='0' cellspacing='0' class='btn btn-primary' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;box-sizing:border-box;width:100%;'><tbody><tr><td align='left' style='font-family:sans-serif;font-size:14px;vertical-align:top;padding-bottom:15px;'><center><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;width:auto;'><tbody><tr><td style='font-family:sans-serif;font-size:14px;vertical-align:top;background-color:#ffffff;border-radius:5px;text-align:center;background-color:;'></td></tr></tbody></table></center></td></tr></tbody></table><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'><center><b></b></center></p><p style='font-family:sans-serif;font-size:14px;font-weight:normal;margin:0;Margin-bottom:15px;'>Have a Good Day!.</p></td></tr></table></td></tr></table><!-- START FOOTER --><div class='footer' style='clear:both;padding-top:10px;text-align:center;width:100%;'><table border='0' cellpadding='0' cellspacing='0' style='border-collapse:separate;mso-table-lspace:0pt;mso-table-rspace:0pt;width:100%;'><tr><td class='content-block' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'><span class='apple-link' style='color:#999999;font-size:12px;text-align:center;'>Aditya Educational Institutions,Surampalem,533437</span><br>This email is system generated, please do not respond to this email.</td></tr><tr><td class='content-block powered-by' style='font-family:sans-serif;font-size:14px;vertical-align:top;color:#999999;font-size:12px;text-align:center;'>Powered by <a href='http://thub.ac.edu.in' style='color:#3498db;text-decoration:underline;color:#999999;font-size:12px;text-align:center;text-decoration:none;'>T-HUB team</a>.</td></tr></table></div><!-- END FOOTER --><!-- END CENTERED WHITE CONTAINER --></div></td><td style='font-family:sans-serif;font-size:14px;vertical-align:top;'>&nbsp;</td></tr></table></body></html>";

                                //console.log(qrdata);
                                  
                              var message = {
                                 text:    msg, 
                                 from:    "My Hub<myhub.helpline@aditya.ac.in>", 
                                 to:      "rajesh.cme123@gmail.com,srikala561@gmail.com,vmanu546@gmail.com,bhagatd800@gmail.com",   // change mail for faculty
                                 cc:      "",
                                 subject: "Appraisal Status",
                                 attachment: 
                                 [
                                    {data:msg, alternative:true},
                                    //attachment
                                    //{path:"C:/Users/Admin/Desktop/file/rj.html", type:"application/html", name:"rj.html"}
                                    
                                 ]
                              };

                              // send the message and get a callback with an error or details of the message that was sent
                              server.send(message, function(err, message) { 
                                if(err)
                                console.log(err);

                               });
              }


 });

  });


// Get request from appraisal form

router.get('/getData',function(req,res){
var totalExperience=0;
for(i=0;i<staffinfo.Experience.length;i++){
totalExperience=totalExperience+parseInt(staffinfo.Experience[i].InYears);
}

data={

email:staffinfo.Email,
staffName:staffinfo.StaffName,
department:staffinfo.DepartmentName,
ugYearofPassing:staffinfo.UG.YearOfPass,
ugInstitution:staffinfo.UG.Institution,
pgYearofPassing:staffinfo.PG.YearOfPass,
pgInstitution:staffinfo.PG.Institution,
phdYearofPassing:staffinfo.PHD.YearOfPass,
phdInstitution:staffinfo.PHD.Institution,
dateofJoining:staffinfo.DateOfJoining,
presentDesignation:staffinfo.DesignationName,
teachingExperience:totalExperience,
Experience:staffinfo.Experience   
}
	res.json(data);
//console.log(data);
});

 

  router.get('/proctoringAverage',function(req,res){

      var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
      //console.log(appraisalyear);
      Appraisal.getAppraisals(req.session.user.PinNo,appraisalyear,req.session.user.College,function(err,data){
        if(!err){
        res.json(data.proctoringAverage);
      }
      });
    
  });


    router.get('/subaverage',function(req,res){
var id=834;
     request('http://aditya.ac.in/employee_info/exam_result.php?staffcode='+id, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        var data=JSON.parse(body);
       // console.log(data[1].subject_name);
       if(data){
        var datas=[];
     for (var i = 0, len=data.length; i < len; i++) {
      var item ={
      subjectName: data[i].subject_name,
      yearSem:data[i].section_name,
      studentsAppeared: data[i].students,
       studentsPassed:data[i].pass
      }
   datas.push(item);
    }
         res.json(datas); 
   }
 }
  });

   });

router.get('/getReviewData',function(req,res){
      var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
      Appraisal.getAppraisalsforHod(hodreviewid,appraisalyear,req.session.user.College,function(err,data){
        if(!err){
        res.json(data);
      }
      });

});
router.get('/getReviewforVC',function(req,res){
      var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
      Appraisal.getAppraisalsforHod(reviewid,appraisalyear,college,function(err,data){
        if(!err){
        res.json(data);
      }
      });

});



router.get('/getfeedback',function(req,res){

var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
      Appraisal.getAppraisals(req.session.user.PinNo,appraisalyear,req.session.user.College,function(err,data){
        if(!err){
        res.json(data.feedback);
      }
      });

});

router.get('/getResearch',function(req,res){
  var appraisalyear1=moment().year();
  var appraisalyear2=appraisalyear1-1;
//console.log("deepak");
      
      var datas1=[];
      if(!staffinfo.Scopus){
        console.log("no data found");
      }else{
      var data1=staffinfo.Scopus;
      for (var i = 0, len=data1.length; i < len; i++) {
      if(data1[i].Year==appraisalyear1 || data1[i].Year==appraisalyear2){
      var item ={
      Title: data1[i].Title,
      Isbnno:data1[i].Isbnno,
      Author: data1[i].Author,
      Reviewed:data1[i].Reviewed
      }
   datas1.push(item);
    }
  }
}

     // var data2=staffinfo.National;
      var datas2=[];
      if(!staffinfo.National){
      console.log("no data found");
    }else{
      var data2=staffinfo.National;
      for (var i = 0, len=data2.length; i < len; i++) {
      if(data2[i].Year==appraisalyear1|| data2[i].Year==appraisalyear2){
      var item ={
      Title: data2[i].Title,
      Isbnno:data2[i].Isbnno,
      Author: data2[i].Author,
      Reviewed:data2[i].Reviewed
      }
   datas2.push(item);
    }
  }
}
      var datas3=[];
      if(!staffinfo.Reputed){
        console.log("no data found");
      }
      else{
        var data3=staffinfo.Reputed;
      for (var i = 0, len=data3.length; i < len; i++) {
      if(data3[i].Year==appraisalyear1 || data3[i].Year==appraisalyear2){
      var item ={
      Title: data3[i].Title,
      Conference:data3[i].Conference,
      Author: data3[i].Author,
      DetailConference:data3[i].DetailConference
      }
   datas3.push(item);
    }
  }
}
      
      var datas4=[];
      if(!staffinfo.Journal){
        console.log("no data found");
      }
      else{
      var data4=staffinfo.Journal;
      for (var i = 0, len=data4.length; i < len; i++) {
      if(data4[i].Year==appraisalyear1 || data4[i].Year==appraisalyear2){
      var item ={
      Title: data4[i].Title,
      Conference:data4[i].Conference,
      Author: data4[i].Author,
      DetailConference:data4[i].DetailConference
      }
   datas4.push(item);
    }
  }
}

      
      var datas5=[];
      if(!staffinfo.Chapter){
        console.log("no data found");
      }
      else{
        var data5=staffinfo.Chapter;
      for (var i = 0, len=data5.length; i < len; i++) {
      if(data5[i].Year==appraisalyear1 || data5[i].Year==appraisalyear2){
      var item ={
      Title: data5[i].Title,
      Isbnno:data5[i].Isbnno,
      Author: data5[i].Author,
      Publisher:data5[i].Publisher
      }
   datas5.push(item);
    }
  }
}
  len1=datas1.length;
  len2=datas2.length;
  len3=datas3.length;
  len4=datas4.length;
  len5=datas5.length;
 var finaldata={
  scopusNumber:len1,
  nationalNumber:len2,
  reputedNumber:len3,
  journalNumber:len4,
  chapterNumber:len5

 }
 res.json(finaldata);
 });


router.get('/getScopusData',function(req,res){
var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;

      var data=staffinfo.Scopus;
      
   var len=data.length;
      //console.log(len);
      var datas=[];
      for (var i = 0, len=data.length; i < len; i++) {
      if(data[i].Year==appraisalyear1 || data[i].Year==appraisalyear2){
      var item ={
      Title: data[i].Title,
      Isbnno:data[i].Isbnno,
      Author: data[i].Author,
      Reviewed:data[i].Reviewed
      }
   datas.push(item);
    }

  }
  console.log(datas);
  res.json(datas);
});
        
router.get('/getNationalData',function(req,res){
var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;


      var data=staffinfo.National;
      
      var len=data.length;
     // console.log(len);
      var datas=[];
      for (var i = 0, len=data.length; i < len; i++) {
      if(data[i].Year==appraisalyear1|| data[i].Year==appraisalyear2){
      var item ={
      Title: data[i].Title,
      Isbnno:data[i].Isbnno,
      Author: data[i].Author,
      Reviewed:data[i].Reviewed
      }
   datas.push(item);
    }
  }
  
  res.json(datas);

});
router.get('/getReputedData',function(req,res){
var appraisalyear1=moment().year();
var appraisalyear2=appraisalyear1-1;

      var data=staffinfo.Reputed;
      //console.log(data);
      var len=data.length;
     // console.log(len);
      var datas=[];
      for (var i = 0, len=data.length; i < len; i++) {
      if(data[i].Year==appraisalyear1 || data[i].Year==appraisalyear2){
      var item ={
      Title: data[i].Title,
      Conference:data[i].Conference,
      Author: data[i].Author,
      DetailConference:data[i].DetailConference
      }
   datas.push(item);
    }
  }
  
  res.json(datas);


});
router.get('/getJournalData',function(req,res){
var appraisalyear1=moment().year();
var appraisalyear2=appraisalyear1-1;

      var data=staffinfo.Journal;
      //console.log(data);
      var len=data.length;
      //console.log(len);
      var datas=[];
      for (var i = 0, len=data.length; i < len; i++) {
      if(data[i].Year==appraisalyear1|| data[i].Year==appraisalyear2){
      var item ={
      Title: data[i].Title,
      Conference:data[i].Conference,
      Author: data[i].Author,
      DetailConference:data[i].DetailConference
      }
   datas.push(item);
    }
  }
  //console.log(datas);
  res.json(datas);


});
router.get('/getBookData',function(req,res){

var appraisalyear1=moment().year();
var appraisalyear2=appraisalyear1-1;
      var data=staffinfo.Chapter;
      //console.log(data);
      var len=data.length;
     // console.log(len);
      var datas=[];
      for (var i = 0, len=data.length; i < len; i++) {
      if(data[i].Year==appraisalyear1 || data[i].Year==appraisalyear2){
      var item ={
      Title: data[i].Title,
      Isbnno:data[i].Isbnno,
      Author: data[i].Author,
      Publisher:data[i].Publisher
      }
   datas.push(item);
    }
  }
  
  res.json(datas);

});


router.get('/getworkshop',function(req,res){

var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
      Appraisal.getAppraisals(req.session.user.PinNo,appraisalyear,req.session.user.College,function(err,data){
        if(!err){
        res.json(data.workshop);
      }
      });

});

router.get('/getResponsibility',function(req,res){

var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
      Appraisal.getAppraisals(req.session.user.PinNo,appraisalyear,req.session.user.College,function(err,data){
        if(!err){
        res.json(data.Resposibility);
      }
      });

});


router.get('/getaverage',function(req,res){

var appraisalyear1=moment().year();
      var appraisalyear2=appraisalyear1-1;
      var appraisalyear= appraisalyear2+ "-"+appraisalyear1;
      Appraisal.getAppraisals(req.session.user.PinNo,appraisalyear,req.session.user.College,function(err,data){
        if(!err){
        
        res.json(data.appraisalpoint);
      }
      });

});




 router.get('/appraisalform',function(req,res){

  Appraisal.getStaffData(req.session.user.PinNo,function(err,cb){
    if(cb){
  global.staffinfo=cb;
  //console.log(staffinfo);
}
});
      res.render('appraisalform');
    }
  );



 router.get('/appraisalHodReview/:_id',function(req,res){

      global.hodreviewid=req.params._id;
      //console.log(hodreviewid);
      res.render('hodreviewform');
    });
router.get('/appraisalPrincipalReview/:_id',function(req,res){
      global.hodreviewid=req.params._id;
      res.render('principalreviewform');
    });
router.get('/appraisalPrincipalReviewReject/:_id',function(req,res){
      global.hodreviewid=req.params._id;
     router.post('/abc',function(req,res){
  res.send("abc");
});
})
router.post('/appraisalPrincipalReviewPromote/:_id',function(req,res){
      global.hodreviewid=req.params._id;
      res.redirect('/principalReviewPromote');
    });

router.get('/appraisalVCReview/:_id/:college',function(req,res){
      global.college=req.params.college;
      global.reviewid=req.params._id;
      res.render('vcreviewform');
    });



=======
// var appraisalAec=require('../models/aecappraisal');
// var appraisalAect=require('../models/aectappraisal');
// var appraisalAce=require('../models/aceappraisal');
var fs = require('fs');
var moment=require('moment');
var current_year=moment().year();

//*********************************************************************************

router.post('/subaverage',function(req,res){
  // if(req.session.user.College=="ACE")
  // {
  appraisalAce.insertData(req.body ,function(err,staff){
    if(err){

    }
    if(!staff){
      
    }

  
	});
  });

router.get('/getData',function(req,res){
	data=req.session.user;
	//console.log(data);
	res.json(data);

});

  router.get('/appraisal',function(req,res){
  
  		res.render('appraisalform');
  	}
  );


>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
  module.exports = router;