var app = angular.module("myapp", []);


app.controller("ListController0", ['$scope','$rootScope',function($scope,$rootScope)  {

$rootScope.progressBar=0;
$rootScope.progressBarValue=0;

  }]);

app.controller("ListController1", ['$scope','getUserData','postGenInfo',function($scope,getUserData,postGenInfo)  {

$scope.gendata=[{

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
'collegeName':'',
'experienceFrom':'',
'experienceTo':'',
'totalExperience':'',
'otherFrom':'',
'otherTo':'',
'otherTotalExperience':''

}];

$scope.getData=function(){

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
  $scope.subjectAverages = [{
    'subjectName': '',
    'yearSem': '',
    'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':'',
     'facultyComment':'',
     'hodComment':'',
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
$scope.isDisabled1=true;

  $scope.saveavg=function(){

  $scope.isDisabled = true; 
  $scope.isDisabled1=false;
 $rootScope.progressBarValue=($rootScope.progressBarValue+$scope.subjectAverages[0].point);
 $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
 getAverage.subAverage($scope.subjectAverages[0].average);
 postSubAverage.postData($scope.subjectAverages);
  
}  
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


//***************************************LIST CONTROLLER 3***********************************************************




app.controller("ListController3", ['$scope','getAverage','$rootScope','postProcAverage','getProcAverage', function($scope,getAverage,$rootScope,postProcAverage,getProcAverage) {
  $scope.proctoringAverages = [{
    'studentAlloted': '',
    'yearSem': '',
    'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':'',
     'facultyComment':'',
     'hodComment':'',
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
    if($scope.proctoringAverages[0].average>=90)
      $scope.proctoringAverages[0].point=20;
    else if(($scope.proctoringAverages[0].average>=80)&&($scope.proctoringAverages[0].average<90))
      $scope.proctoringAverages[0].point=15;
    else if(($scope.proctoringAverages[0].average>=70)&&($scope.proctoringAverages[0].average<80))
      $scope.proctoringAverages[0].point=10;
    else if(($scope.proctoringAverages[0].average>=60)&&($scope.proctoringAverages[0].average<70))
      $scope.proctoringAverages[0].point=5;
    else
      $scope.proctoringAverages[0].point=0;

  }
  $scope.isDisabled = false;
$scope.isDisabled1=true;


    $scope.save=function(){
      $scope.isDisabled = true; 
  $scope.isDisabled1=false;
      $rootScope.progressBarValue=($rootScope.progressBarValue+$scope.proctoringAverages[0].point);
      $rootScope.progressBar=(10/8)*$rootScope.progressBarValue;
    //alert($scope.subjectAverages[0].average);
    getAverage.proctoringAverage($scope.proctoringAverages[0].average);
    //alert(subjectAverages[0].average);
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
  };

}]);

app.service("postProcAverage",['$http',function($http){
return{
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



//*********************************************LISTCONTROLLER 4*********************************

app.controller("ListController4", ['$scope', 'getAverage','$rootScope','postFeedback','getFeedback',function($scope,getAverage,$rootScope,postFeedback,getFeedback) {
  $scope.studentFeedbacks = [{
    'subjectName': '',
    'yearSem': '',
      'studentsAppeared': '',
     'studentsPassed':'',
     'percentage':'',
     'average':'',
     'facultyComment':'',
     'hodComment':'',
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
    //alert(subjectAverages[0].average);
    $rootScope.progressBar=($rootScope.progressBar+$scope.studentFeedbacks[0].point);
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
  

}]);





//***********************************************LIST CONTROLLER 5******************************************************





app.controller("ListController5", ['$scope','$rootScope','postResearch', function($scope,$rootScope,postResearch) {
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
   
   
     postResearch.postData($scope.researchPublications)
  };  
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



//***************************************LISTCONTROLLER 7****************************************************




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



//*****************************************LISTCONTROLLER 8*******************************************


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


//******************************************LISTCONTROLLER 9*********************************************




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


app.controller("ListController11", ['$scope', '$rootScope','postWorkshop','getWorkshopData',function($scope,$rootScope,postWorkshop,getWorkshopData) {
  $scope.workshops = [{
    'program': '',
    'duration': '',
    'datePlace': '',
     'organization':'',
     'hodComment':'',
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
  'hodComment':'',
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

  $scope.import_data=function(){

 $scope.subAverage= getAverage.getsubAverage(); 
 $scope.proctoringAverages=getAverage.getproctoringAverage();
 //alert($scope.proctoringAverages);
 $scope.studentFeedback=getAverage.getstudentFeedback();
 //alert($scope.studentFeedback);
 $scope.total=0;
 $scope.facultyComment='';
}
  $scope.save=function(){
   
  $scope.allAverage=[{
  'subAverage':$scope.subAverage,
  'proctoringAverages':$scope.proctoringAverages,
  'studentFeedback':$scope.studentFeedback,
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
  

}]);


//*****************************************LISTCONTROLLER13*******************************************



app.controller("ListController13", ['$scope','$rootScope','postResponsibility','getResponsibility', function($scope,$rootScope,postResponsibility,getResponsibility) {
  $scope.additions = [{
    'responsibility': '',
    'assignedBy': '',
    'duration': '',
    'hodComment':'',
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




//***************************************SERVICE********************************************************




app.service('getAverage', function() {
  var subAverages=0;
  var proctoringAverages=0;
  var studentFeedbacks=0;
  return{
   subAverage:function (sub) {
      this.subAverages=sub;
      //alert()
      
    },
    getsubAverage:function(){
      return this.subAverages;
    },

    proctoringAverage:function(pro){
        this.proctoringAverages=pro;
        //alert(this.proctoringAverages);
    },
     getproctoringAverage:function(){
      return this.proctoringAverages;
    },
    studentFeedback:function(feedback){
      this.studentFeedbacks=feedback;
      
    },
     getstudentFeedback:function(){
      return this.studentFeedbacks;
    }

  };
});





