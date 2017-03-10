var app = angular.module("myapp", []);


app.controller("ListController0", ['$scope','$rootScope',function($scope,$rootScope)  {

$rootScope.progressBar=0;
$rootScope.progressBarValue=0;

  }]);

<<<<<<< HEAD
app.controller("ListController1", ['$scope','getUserData','postGenInfo',function($scope,getUserData,postGenInfo)  {

$scope.gendata=[{
'email':'',
'staffName':'',
'department':'',
'ugYearofPassing':'',
'ugInstitution':'',
'pgYearofPassing':'',
'pgInstitution':'',
'phdYearofPassing':'',
'phdInstitution':'',
'addQualification':'',
'specialization':'',
'dateofJoining':'',
'presentDesignation':'',
'industrialExperience':'',
'teachingExperience':'',
'Experience':'',
'specialization':'',
'addQualification':''

}];

$scope.getData=function(){
$scope.Experience=0
getUserData.getDatas().then(function(data){
$scope.gendata=data;

  
});
}
$scope.save=function(){
  postGenInfo.postData($scope.gendata);
}

}]);

app.factory("getUserData",['$http',function($http){
  
  return{
    getDatas:function(){
    data=$http({
      method: 'GET',
      url: '/appraisalform/getdata'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return data;

   }  
    
}
  
}]);

app.service("postGenInfo",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/geninfo',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}])

app.controller("ListController2", ['$scope','getAverage', '$rootScope','postSubAverage','getSubAverages',function($scope,getAverage,$rootScope,postSubAverage,getSubAverages)  {
=======
app.controller("ListController1", ['$scope','getUserData',function($scope,getUserData)  {

$scope.getData=function(){

getUserData.getDatas().then(function(data){
  $scope.data=data;
  
});

}

}]);


app.controller("ListController2", ['$scope','getAverage', '$rootScope','postSubAverage',function($scope,getAverage,$rootScope,postSubAverage)  {
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
  $scope.subjectAverages = [{
    'subjectName': '',
    'yearSem': '',
    'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':'',
     'facultyComment':'',
     'point':''
  }];
 
 $scope.calculatePercentage = function(val) {
    val.percentage = (parseFloat(val.studentsPassed)*100)/parseFloat(val.studentsAppeared);
    $scope.calAverage();
  };

  $scope.addNew = function(personalDetail) {
    $scope.subjectAverages.push({
      'subjectName': "",
    'yearSem': "",
    'studentsAppeared': "",
     'studentsPassed':"",
     'percentage':""
     
    });
  };
  $scope.parseFloat = function(value) {
    return parseFloat(value);
  };
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.subjectAverages.splice( index, 1);
    $scope.calAverage();
    // if no rows left in the array create a blank array
    if ($scope.subjectAverages.length() === 0){
      $scope.subjectAverages = [];
      $scope.calAverage();
    }
    
  };

  $scope.calAverage=function()
  {
    var total =0;
    angular.forEach($scope.subjectAverages,function(item){
      total += item.percentage;
    });
    $scope.subjectAverages[0].average = (total/$scope.subjectAverages.length).toFixed(2);

    if($scope.subjectAverages[0].average>=90)
      $scope.subjectAverages[0].point=20;
    else if(($scope.subjectAverages[0].average>=80)&&($scope.subjectAverages[0].average<90))
      $scope.subjectAverages[0].point=15;
    else if(($scope.subjectAverages[0].average>=70)&&($scope.subjectAverages[0].average<80))
      $scope.subjectAverages[0].point=10;
    else if(($scope.subjectAverages[0].average>=60)&&($scope.subjectAverages[0].average<70))
      $scope.subjectAverages[0].point=5;
    else
      $scope.subjectAverages[0].point=0;
}
$scope.isDisabled = false;
<<<<<<< HEAD
$scope.isDisabled1=true;
=======
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778

  $scope.saveavg=function(){

  $scope.isDisabled = true; 
<<<<<<< HEAD
  $scope.isDisabled1=false;
=======
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
 $rootScope.progressBarValue=($rootScope.progressBarValue+$scope.subjectAverages[0].point);
 $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
 getAverage.subAverage($scope.subjectAverages[0].average);
 postSubAverage.postData($scope.subjectAverages);
  
}  
<<<<<<< HEAD
$scope.edit=function(){
  $scope.isDisabled=false;
  $scope.isDisabled1=true;
  
  $rootScope.progressBarValue=($rootScope.progressBarValue-$scope.subjectAverages[0].point);
  $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
}

$scope.getData=function(){
 

  getSubAverages.getData().then(function(data){
    if(data){
  $scope.subjectAverages=data;
}
else{
  $scope.subjectAverages=[];
}
})
};
=======
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778

}]);

app.service("postSubAverage",['$http',function($http){
return{
  postData:function(subAverage){
  $http({
    url: '/appraisalform/subaverage',
    method: "POST",
    data: subAverage,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(postData){ //.success is deprecated,so use .then
    alert("Updated Successfully");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
})
}
<<<<<<< HEAD
}}]);



app.factory("getSubAverages",['$http',function($http){
   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/subaverage'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);
=======
}}])
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778


//***************************************LIST CONTROLLER 3***********************************************************




<<<<<<< HEAD
app.controller("ListController3", ['$scope','getAverage','$rootScope','postProcAverage','getProcAverage', function($scope,getAverage,$rootScope,postProcAverage,getProcAverage) {
=======
app.controller("ListController3", ['$scope','getAverage','$rootScope','postProcAverage', function($scope,getAverage,$rootScope,postProcAverage) {
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
  $scope.proctoringAverages = [{
    'studentAlloted': '',
    'yearSem': '',
    'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':'',
     'facultyComment':'',
     'point':''
  }];


  $scope.calculatePercentage = function(val) {
    val.percentage = (parseFloat(val.studentsPassed)*100)/parseFloat(val.studentsAppeared);
    $scope.calAverage();
  };

  $scope.addNew = function(proctoringAverage) {
    $scope.proctoringAverages.push({
    'studentAlloted': "",
    'yearSem': "",
    'studentsAppeared': "",
     'studentsPassed':"",
     'percentage':""
     
    });
  };
  $scope.parseFloat = function(value) {
    return parseFloat(value);
  };
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.proctoringAverages.splice( index, 1);
    $scope.calAverage();
    // if no rows left in the array create a blank array
    if ($scope.proctoringAverages.length() === 0){
      $scope.proctoringAverages = [];
      $scope.calAverage();
    }
    
  };

  $scope.calAverage=function()
  {
    var total =0;
    angular.forEach($scope.proctoringAverages,function(item){
      total += item.percentage;
    })
    $scope.proctoringAverages[0].average = (total/$scope.proctoringAverages.length).toFixed(2);
<<<<<<< HEAD
    if($scope.proctoringAverages[0].average>=70)
      $scope.proctoringAverages[0].point=20;
    else if(($scope.proctoringAverages[0].average>=65)&&($scope.proctoringAverages[0].average<70))
      $scope.proctoringAverages[0].point=15;
    else if(($scope.proctoringAverages[0].average>=60)&&($scope.proctoringAverages[0].average<65))
      $scope.proctoringAverages[0].point=10;
    else if(($scope.proctoringAverages[0].average>=55)&&($scope.proctoringAverages[0].average<60))
=======
    if($scope.proctoringAverages[0].average>=90)
      $scope.proctoringAverages[0].point=20;
    else if(($scope.proctoringAverages[0].average>=80)&&($scope.proctoringAverages[0].average<90))
      $scope.proctoringAverages[0].point=15;
    else if(($scope.proctoringAverages[0].average>=70)&&($scope.proctoringAverages[0].average<80))
      $scope.proctoringAverages[0].point=10;
    else if(($scope.proctoringAverages[0].average>=60)&&($scope.proctoringAverages[0].average<70))
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
      $scope.proctoringAverages[0].point=5;
    else
      $scope.proctoringAverages[0].point=0;

<<<<<<< HEAD

  }
  $scope.isDisabled = false;
  $scope.isDisabled1=true;


    $scope.save=function(){
      // alert($scope.proctoringAverages[0].point);
      // alert($rootScope.progressBarValue)
      $scope.isDisabled = true; 
      $scope.isDisabled1=false;
=======
  }


    $scope.save=function(){
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
      $rootScope.progressBarValue=($rootScope.progressBarValue+$scope.proctoringAverages[0].point);
      $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
    //alert($scope.subjectAverages[0].average);
    getAverage.proctoringAverage($scope.proctoringAverages[0].average);
    //alert(subjectAverages[0].average);
<<<<<<< HEAD
    postProcAverage.postData($scope.proctoringAverages); 
  };


  $scope.edit=function(){
  $scope.isDisabled=false;
  $scope.isDisabled1=true;
  
  $rootScope.progressBarValue=($rootScope.progressBarValue-$scope.proctoringAverages[0].point);
  $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
}


  $scope.getData=function(){
    getProcAverage.getData().then(function(data){
      if(data){
      $scope.proctoringAverages=data;
    }
    else{
      $scope.proctoringAverages=[];
    }
    });
=======
    postProcAverage.postData($scope.subjectAverages); 
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
  };

}]);

app.service("postProcAverage",['$http',function($http){
return{
<<<<<<< HEAD
  postData:function(data){
  $http({
    url: '/appraisalform/proaverage',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}

}}]);

app.factory("getProcAverage",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/proctoringAverage'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);
=======
  postData:function(subAverage){
  $http({
    url: '/appraisalform/subaverage',
    method: "POST",
    data: subAverage,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(postData){ //.success is deprecated,so use .then
    alert("Updated Successfully");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
})
}
}}])

>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778



//*********************************************LISTCONTROLLER 4*********************************

<<<<<<< HEAD
app.controller("ListController4", ['$scope', 'getAverage','$rootScope','postFeedback','getFeedback',function($scope,getAverage,$rootScope,postFeedback,getFeedback) {
=======
app.controller("ListController4", ['$scope', 'getAverage','$rootScope','$http',function($scope,getAverage,$rootScope,$http) {
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
  $scope.studentFeedbacks = [{
    'subjectName': '',
    'yearSem': '',
      'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':'',
     'facultyComment':'',
<<<<<<< HEAD
     'hodComment':'',
=======
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
     'point':''
  }];


  $scope.calculatePercentage = function(val) {
    val.percentage = (parseFloat(val.studentsPassed)*100)/parseFloat(val.studentsAppeared);
    $scope.calAverage();
  };

  $scope.addNew = function(studentFeedback) {
    $scope.studentFeedbacks.push({
      'subjectName': "",
    'yearSem': "",
    'studentsAppeared': "",
     'studentsPassed':"",
     'percentage':""
     
    });
  };
  $scope.parseFloat = function(value) {
    return parseFloat(value);
  };
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.studentFeedbacks.splice( index, 1);
    $scope.calAverage();
    // if no rows left in the array create a blank array
    if ($scope.studentFeedbacks.length() === 0){
      $scope.studentFeedbacks = [];
      $scope.calAverage();
    }
    
  };

  $scope.calAverage=function()
  {
    var total =0;
    angular.forEach($scope.studentFeedbacks,function(item){
      total += item.percentage;
    });
    $scope.studentFeedbacks[0].average = (total/$scope.studentFeedbacks.length).toFixed(2);
      if($scope.studentFeedbacks[0].average>=90)
      $scope.studentFeedbacks[0].point=20;
    else if(($scope.studentFeedbacks[0].average>=80)&&($scope.studentFeedbacks[0].average<90))
      $scope.studentFeedbacks[0].point=15;
    else if(($scope.studentFeedbacks[0].average>=70)&&($scope.studentFeedbacks[0].average<80))
      $scope.studentFeedbacks[0].point=10;
    else if(($scope.studentFeedbacks[0].average>=60)&&($scope.studentFeedbacks[0].average<70))
      $scope.studentFeedbacks[0].point=5;
    else
      $scope.studentFeedbacks[0].point=0;

  
  }
<<<<<<< HEAD
  $scope.isDisabled = false;
$scope.isDisabled1=true;

$scope.edit=function(){
  $scope.isDisabled=false;
  $scope.isDisabled1=true;
  
  $rootScope.progressBarValue=($rootScope.progressBarValue-$scope.studentFeedbacks[0].point);
  $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
}

  $scope.save=function(){
    $scope.isDisabled = true; 
  $scope.isDisabled1=false;
    //alert($scope.subjectAverages[0].average);
    $rootScope.progressBarValue=($rootScope.progressBarValue+$scope.studentFeedbacks[0].point);
    $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
    getAverage.studentFeedback($scope.studentFeedbacks[0].average);
    postFeedback.postData($scope.studentFeedbacks);
     
  };

  $scope.getData=function(){
    getFeedback.getData().then(function(data){
      if(data){
      $scope.studentFeedbacks=data;}
      else{
        $scope.studentFeedbacks=[];
      }
    });
  };

}]);
  

app.service("postFeedback",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/feedback',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);


app.factory("getFeedback",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getfeedback'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

=======


      $scope.save=function(){
    //alert($scope.subjectAverages[0].average);
    $rootScope.progressBarValue=($rootScope.progressBarValue+$scope.studentFeedbacks[0].point);
 $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
    //alert(subjectAverages[0].average);
    $rootScope.progressBar=($rootScope.progressBar+$scope.studentFeedbacks[0].point);
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.studentFeedbacks,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
}]);



<<<<<<< HEAD


=======
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
//***********************************************LIST CONTROLLER 5******************************************************





<<<<<<< HEAD
app.controller("ListController5", ['$scope','$rootScope','postResearch','getResearch','getAverage', function($scope,$rootScope,postResearch,getResearch,getAverage) {
$scope.isDisabled = false;
$scope.save=function(){
    $scope.isDisabled = true;
    $rootScope.progressBarValue=($rootScope.progressBarValue+$scope.researchPoint);
    $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
    postResearch.postData($scope.researchPublications);
    //alert($scope.researchPublications.researchPoint);
    getAverage.researchPoint($scope.researchPublications.researchPoint);
    
    
};  

$scope.getData=function(){

  getResearch.getData().then(function(data){
    $scope.researchPublications=data;
     });
    $scope.point=$scope.researchPublications.scopusNumber*20+$scope.researchPublications.nationalNumber*15+$scope.researchPublications.reputedNumber*10+$scope.researchPublications.journalNumber*5;
    if($scope.point>=20){
      $scope.researchPoint=20;
    }
    else{
      $scope.researchPoint=$scope.point;
    }
    $scope.researchPublications.researchPoint=$scope.researchPoint;

}

  }]);

app.service("postResearch",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/research',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);


app.factory("getResearch",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getResearch'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);



//***************************************LISTCONTROLLER 6***************************************




app.controller("ListController6", ['$scope','$rootScope','getScopusData','postScopusData', function($scope,$rootScope,getScopusData,postScopusData) {

  $scope.addNew = function(scopusDetail) {
    $scope.scopusDetails.push({
    'Title': "",
    'Isbnno': "",
    'Author': "",
    'Reviewed':""
     
  });
=======
app.controller("ListController5", ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {
  $scope.researchPublications = [{
    'researchPaper': "Scopus/SCI",
    'no_Paper': '',
    'maxMark': 20,
    'obtainedMarks':'',
    'facultyComment':''
     
  },
  {
    'researchPaper': "National/International Journal",
    'no_Paper': '',
    'maxMark': 15,
    'obtainedMarks':''
  },
  {
    'researchPaper': "Reputed Conference",
    'no_Paper': '',
    'maxMark': 10,
    'obtainedMarks':''
     
  },
  {
    'researchPaper': "Journal/Conference",
    'no_Paper': '',
    'maxMark': 5,
    'obtainedMarks':''
     
  },
  {
    'researchPaper': "No Journal/Conference",
    'no_Paper': '',
    'maxMark': 0,
    'obtainedMarks':''
     
  }

  ];

$scope.save=function(){
   
   
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.researchPublications,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };  
  }]);



//***************************************LISTCONTROLLER 6***************************************




app.controller("ListController6", ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {
  $scope.scopusDetails = [{
    'JournalDetail': '',
    'JournalNumber': '',
    'reviewDetail': '',
     'author':'',
     'facultyComment':''
     
  }];


 

  $scope.addNew = function(scopusDetail) {
    $scope.scopusDetails.push({
      'JournalDetail': "",
    'JournalNumber': "",
    'reviewDetail': "",
     'author':""
     
     
    });
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.scopusDetails.splice( index, 1);
    $scope.calAverage();
    // if no rows left in the array create a blank array
    if ($scope.scopusDetails.length() === 0){
      $scope.scopusDetails = [];
      
    }
    
  };
<<<<<<< HEAD
  $scope.getData=function(){
    getScopusData.getData().then(function(data){
      if(data){
      $scope.scopusDetails=data;}
      else{
        $scope.scopusDetails=[];
      }
    });
  };



  $scope.save=function(){
    postScopusData.postData($scope.scopusDetails)
  };

  
}]);
app.service("postScopusData",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/postScopusData',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);


app.factory("getScopusData",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getScopusData'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);


=======

  $scope.save=function(){
   
    
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.scopusDetails,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };

  
}]);



>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
//***************************************LISTCONTROLLER 7****************************************************




<<<<<<< HEAD
app.controller("ListController7", ['$scope','$rootScope','getNationalData','postNationalData', function($scope,$rootScope,getNationalData,postNationalData) {

$scope.addNew = function(nationalJournal) {
    $scope.nationalJournals.push({
      'Title': "",
    'Isbnno': "",
    'Reviewed': "",
     'Author':""
=======
app.controller("ListController7", ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {
  $scope.nationalJournals = [{
    'JournalDetail': '',
    'JournalNumber': '',
    'reviewDetail': '',
     'author':'',
     'facultyComment':''
     
  }];


 

  $scope.addNew = function(nationalJournal) {
    $scope.nationalJournals.push({
      'JournalDetail': "",
    'JournalNumber': "",
    'reviewDetail': "",
     'author':""
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
     
     
    });
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.nationalJournals.splice( index, 1);
    
    // if no rows left in the array create a blank array
    if ($scope.nationalJournals.length() === 0){
      $scope.nationalJournals = [];
      
    }
    
  };
<<<<<<< HEAD

    $scope.getData=function(){
    getNationalData.getData().then(function(data){
      if(data){
      $scope.nationalJournals=data;}
      else{
        $scope.nationalJournals=[];
      }
    });
  };
  
    $scope.save=function(){
    postNationalData.postData($scope.nationalJournals)

  };

  
}]);

app.service("postNationalData",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/postNationalData',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);


app.factory("getNationalData",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getNationalData'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);
=======
  $scope.save=function(){
   
    
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.nationalJournals,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };

  
}]);


>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778

//*****************************************LISTCONTROLLER 8*******************************************


<<<<<<< HEAD
app.controller("ListController8", ['$scope', '$rootScope','getReputedData','postReputedData', function($scope,$rootScope,getReputedData,postReputedData) {


  $scope.addNew = function(reputedConference) {
    $scope.reputedConferences.push({
      'Title': "",
    'Conference': "",
    'DetailConference': "",
     'Author':""
=======
app.controller("ListController8", ['$scope', '$rootScope','$http', function($scope,$rootScope,$http) {
  $scope.reputedConferences = [{
    'title': '',
    'type': '',
    'detail': '',
     'author':'',
     'facultyComment':''
     
  }];


 

  $scope.addNew = function(reputedConference) {
    $scope.reputedConferences.push({
      'title': "",
    'type': "",
    'detail': "",
     'author':""
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
     
     
    });
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.reputedConferences.splice( index, 1);
    
    // if no rows left in the array create a blank array
    if ($scope.reputedConferences.length() === 0){
      $scope.reputedConferences = [];
      
    }
    
  };
<<<<<<< HEAD
    $scope.getData=function(){
    getReputedData.getData().then(function(data){
      if(data){
      $scope.reputedConferences=data;}
      else{
        $scope.reputedConferences=[];
      }
    });
  };

  $scope.save=function(){
   postReputedData.postData($scope.reputedConferences);
  };

  
}]);
app.service("postReputedData",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/postReputedData',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);


app.factory("getReputedData",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getReputedData'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);

=======
  $scope.save=function(){
   
   
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.reputedConferences,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };

  
}]);


>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
//******************************************LISTCONTROLLER 9*********************************************




<<<<<<< HEAD
app.controller("ListController9", ['$scope','$rootScope','getJournalData','postJournalData', function($scope,$rootScope,getJournalData,postJournalData) {

  $scope.addNew = function(journalConference) {
    $scope.journalConferences.push({
      'Title': "",
    'Conference': "",
    'DetailConference': "",
     'Author':""
=======
app.controller("ListController9", ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {
  $scope.journalConferences = [{
    'title': '',
    'type': '',
    'detail': '',
     'author':'',
     'facultyComment':''
     
  }];


 

  $scope.addNew = function(journalConference) {
    $scope.journalConferences.push({
      'title': "",
    'type': "",
    'detail': "",
     'author':""
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
     
     
    });
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.journalConferences.splice( index, 1);
    
    // if no rows left in the array create a blank array
    if ($scope.journalConferences.length() === 0){
      $scope.journalConferences = [];
      
    }
    
  };
<<<<<<< HEAD
  $scope.getData=function(){
    getJournalData.getData().then(function(data){
      if(data){
      $scope.journalConferences=data;}
      else{
        $scope.journalConferences=[];
      }
    });
  };
  
  $scope.save=function(){
   postJournalData.postData($scope.journalConferences)
  };

  
}]);

app.service("postJournalData",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/postJournalData',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);


app.factory("getJournalData",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getJournalData'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);

//**********************************************LISTCONTROLLER 10*********************************************


app.controller("ListController10", ['$scope','$rootScope','getBookData','postBookData', function($scope,$rootScope,getBookData,postBookData) {

  $scope.addNew = function(chapterBook) {
    $scope.chapterBooks.push({
      'Title': "",
    'Publisher': "",
    'Isbnno': "",
     'Author':""
=======
  $scope.save=function(){
   
   
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.journalConferences,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };

  
}]);



//**********************************************LISTCONTROLLER 10*********************************************


app.controller("ListController10", ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {
  $scope.chapterBooks = [{
    'title': '',
    'publisher': '',
    'issnNumber': '',
     'author':'',
     'facultyComment':''
     
  }];


 

  $scope.addNew = function(chapterBook) {
    $scope.chapterBooks.push({
      'title': "",
    'publisher': "",
    'issnNumber': "",
     'author':""
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
     
     
    });
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.chapterBooks.splice( index, 1);
    
    // if no rows left in the array create a blank array
    if ($scope.chapterBook.length() === 0){
      $scope.chapterBooks = [];
      
    }
    
  };
<<<<<<< HEAD
    $scope.getData=function(){
    getBookData.getData().then(function(data){
      if(data){
      $scope.chapterBooks=data;}
      else{
        $scope.chapterBooks=[];
      }
    });
  };

 $scope.save=function(){
 postBookData.postData($scope.chapterBooks);  

  };

  
}]);
app.service("postBookData",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/postBookData',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);


app.factory("getBookData",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getBookData'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);

//*****************************************LISTCONTROLLER 11***************************************************


app.controller("ListController11", ['$scope', '$rootScope','postWorkshop','getWorkshopData',function($scope,$rootScope,postWorkshop,getWorkshopData) {
=======
    $scope.save=function(){
   
    
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.chapterBooks,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };

  
}]);


//*****************************************LISTCONTROLLER 11***************************************************


app.controller("ListController11", ['$scope', '$rootScope','$http',function($scope,$rootScope,$http) {
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
  $scope.workshops = [{
    'program': '',
    'duration': '',
    'datePlace': '',
     'organization':'',
<<<<<<< HEAD
     'hodComment':'',
=======
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
     'facultyComment':''
     
  }];


 

  $scope.addNew = function(workshop) {
    $scope.workshops.push({
      'program': "",
    'duration': "",
    'datePlace': "",
     'organization':""
     
     
    });
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.workshops.splice( index, 1);
    
    // if no rows left in the array create a blank array
    if ($scope.workshops.length() === 0){
      $scope.workshops= [];
      
    }
    
  };
    $scope.save=function(){
   
   
<<<<<<< HEAD
     postWorkshop.postData($scope.workshops);
  };

    $scope.getData=function(){
    getWorkshopData.getData().then(function(data){
      if(data){
      $scope.workshops=data;
    }
    else{
      $scope.workshops=[];
    }
    });
  };

}]);

app.factory("getWorkshopData",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getworkshop'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);
  
app.service("postWorkshop",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/workshop',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);



//****************************************************LISTCONTRILLER 12*********************************


app.controller("ListController12", ['$scope', 'getAverage','$rootScope','postAverage','getAverageDatas',function($scope,getAverage,$rootScope,postAverage,getAverageDatas) {
 
  $scope.allAverage=[{
  'subAverage':'',
  'proctoringAverages':'',
  'studentFeedback':'',
  'researchPoint':'',
  'facultyComment':''

 }]; 

$scope.getAverageData=function(){
  getAverageDatas.getData().then(function(data){
    if(data){
  $scope.allAverage=data;}
  else{
    $scope.allAverage=[];
  }
  });
}  

=======
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.workshops,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };

  
}]);



//****************************************************LISTCONTRILLER 12*********************************


app.controller("ListController12", ['$scope', 'getAverage','$rootScope','$http',function($scope,getAverage,$rootScope,$http) {
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
  $scope.import_data=function(){

 $scope.subAverage= getAverage.getsubAverage(); 
 $scope.proctoringAverages=getAverage.getproctoringAverage();
<<<<<<< HEAD
 //alert($scope.proctoringAverages);
 $scope.studentFeedback=getAverage.getstudentFeedback();
 //alert($scope.studentFeedback);
 $scope.researchPoint=getAverage.getresearchPoint();
 //alert($scope.researchPoint)
 $scope.total=0;
 $scope.facultyComment='';
 if($scope.subAverage>=90)
      $scope.subAveragepoint=20;
    else if(($scope.subAverage>=80)&&($scope.subAverage<90))
      $scope.subAveragepoint=15;
    else if(($scope.subAverage>=70)&&($scope.subAverage<80))
      $scope.subAveragepoint=10;
    else if(($scope.subAverage>=60)&&($scope.subAverage<70))
      $scope.subAveragepoint=5;
    else
      $scope.subAveragepoint=0;
  if($scope.proctoringAverages>=70)
      $scope.proctoringAveragespoint=20;
    else if(($scope.proctoringAverages>=65)&&($scope.proctoringAverages<70))
      $scope.proctoringAveragespoint=15;
    else if(($scope.proctoringAverages>=60)&&($scope.proctoringAverages<65))
      $scope.proctoringAveragespoint=10;
    else if(($scope.proctoringAverages>=55)&&($scope.proctoringAverages<60))
      $scope.proctoringAveragespoint=5;
    else
      $scope.proctoringAveragespoint=0;
    if($scope.studentFeedback>=90)
      $scope.studentFeedbackpoint=20;
    else if(($scope.studentFeedback>=80)&&($scope.studentFeedback<90))
      $scope.studentFeedbackpoint=15;
    else if(($scope.studentFeedback>=70)&&($scope.studentFeedback<80))
      $scope.studentFeedbackpoint=10;
    else if(($scope.studentFeedback>=60)&&($scope.studentFeedback<70))
      $scope.studentFeedbackpoint=5;
    else
      $scope.studentFeedbackpoint=0;

  $scope.total=$scope.studentFeedbackpoint+$scope.proctoringAveragespoint+$scope.subAveragepoint+$scope.researchPoint
=======
 $scope.studentFeedback=getAverage.getstudentFeedback();
 $scope.facultyComment='';
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
}
  $scope.save=function(){
   
  $scope.allAverage=[{
<<<<<<< HEAD
  'subAverage':$scope.subAverage,
  'proctoringAverages':$scope.proctoringAverages,
  'studentFeedback':$scope.studentFeedback,
  'researchPoint':$scope.researchPoint,
  'totalPoint':$scope.total,
  'facultyComment':$scope.facultyComment

 }];
    postAverage.postData($scope.allAverage);
  };



}]);


app.service("postAverage",['$http',function($http){
return{
  postData:function(data){
  $http({
    url: '/appraisalform/appraisalpoint',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);


app.factory("getAverageDatas",['$http',function($http){

   return{
  //  alert("de");
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getaverage'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  
=======
  'subAverage':$scope.subAvg,
  'proctoringAverages':$scope.proctoringAvg,
  'studentFeedback':$scope.studentFeed,
  'facultyComment':$scope.facultyComment

 }];
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.allAverage,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };


>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778

}]);


<<<<<<< HEAD
=======

>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
//*****************************************LISTCONTROLLER13*******************************************



<<<<<<< HEAD
app.controller("ListController13", ['$scope','$rootScope','postResponsibility','getResponsibility', function($scope,$rootScope,postResponsibility,getResponsibility) {
=======
app.controller("ListController13", ['$scope','$rootScope','$http', function($scope,$rootScope,$http) {
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
  $scope.additions = [{
    'responsibility': '',
    'assignedBy': '',
    'duration': '',
<<<<<<< HEAD
    'hodComment':'',
=======
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
    'facultyComment':''
     
  }];


 

  $scope.addNew = function(addition) {
    $scope.additions.push({
      'responsibility': "",
    'assignedBy': "",
    'duration': ""
     
     
    });
  };
  
  $scope.removeRow=function(index){       
       // remove the row specified in index
    $scope.additions.splice( index, 1);
    
    // if no rows left in the array create a blank array
    if ($scope.additions.length() === 0){
      $scope.additions= [];
      
    }
    
  };
<<<<<<< HEAD


  $scope.save=function(){
    alert($scope.additions[0].resposibility);
    postResponsibility.postData($scope.additions);
     
  };
    $scope.getData=function(){
    getResponsibility.getData().then(function(data){
      if(data){
      $scope.additions=data;
    }
    else{
      $scope.additions=[];
    }
    });
  };

}]);
  

app.factory("getResponsibility",['$http',function($http){

   return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getResponsibility'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}
  

}]);

app.service("postResponsibility",['$http',function($http){

return{
  postData:function(data){
  $http({
    url: '/appraisalform/resposibility',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);

//*****************************************************************************************************



app.controller("ListController14", ['$scope','submitAppraisal', function($scope,submitAppraisal) {
 
$scope.submit=function(){

  submitAppraisal.postData();

}

 }]);

app.service("submitAppraisal",['$http',function($http){

return{
  postData:function(){
  $http({
    url: '/appraisalform/submitAppraisal',
    method: "POST",
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);

=======
  $scope.save=function(){
   
   
     $http({
    url: '/apprasel',
    method: "POST",
    data: $scope.additions,
    headers: {
             'Content-Type': 'application/json'
    }
}).then(function(data){ //.success is deprecated,so use .then
    alert("done");
})
  .catch(function(err){//using .catch instead of .error as it is deprecated
    console.log("Error in request =>", err)
});
  };
  
}]);
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778



//***************************************SERVICE********************************************************




app.service('getAverage', function() {
  var subAverages=0;
  var proctoringAverages=0;
  var studentFeedbacks=0;
<<<<<<< HEAD
  var researchPoints=0;
  return{
   subAverage:function (sub) {
      this.subAverages=sub;
      //alert()
=======
  return{
   subAverage:function (sub) {
      this.subAverages=sub;
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
      
    },
    getsubAverage:function(){
      return this.subAverages;
    },

    proctoringAverage:function(pro){
        this.proctoringAverages=pro;
<<<<<<< HEAD
        //alert(this.proctoringAverages);
=======
        //alert(proctoringAverages);
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
    },
     getproctoringAverage:function(){
      return this.proctoringAverages;
    },
    studentFeedback:function(feedback){
      this.studentFeedbacks=feedback;
<<<<<<< HEAD
      
    },
     getstudentFeedback:function(){
      return this.studentFeedbacks;
    },
    researchPoint:function (point) {
      this.researchPoints=point;
      alert(this.researchPoints)
      
    },
    getresearchPoint:function(){

      return this.researchPoints;

=======
      //alert(studentFeedbacks);
    },
     getstudentFeedback:function(){
      return this.studentFeedbacks;
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
    }

  };
});


<<<<<<< HEAD

=======
app.factory("getUserData",['$http',function($http){
  
  return{
    getDatas:function(){
    data=$http({
      method: 'GET',
      url: '/appraisalform/getdata'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return data;

   }  
    
}
  
}]);
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778


