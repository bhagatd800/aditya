var app =angular.module("hodReview",[]);
app.controller("hodReviewController",['$scope','getAppraisalDatas','submitAppraisals',function($scope,getAppraisalDatas,submitAppraisals){

$scope.hodComment={

'subjectAverageComment':'',
'proctoringAverageComment':'',
'feedbackComment':'',
'researchComment':'',
'scopusComment':'',
'nationalComment':'',
'reputedConferenceComment':'',
'journalConferenceComment':'',
'chapterBookComment':'',
'workshopComment':'',
'pointEarnedComment':'',
'addResponsibilityComment':''

};

$scope.getAppraisalData=function(){
getAppraisalDatas.getData().then(function(data){

$scope.appraisalData=data;

});

}

$scope.appraisalSubmit=function(){

submitAppraisals.upload($scope.hodComment);

}


}]);


app.factory("getAppraisalDatas",['$http',function($http){

	return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/hodReviewData'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}


}])

app.service("submitAppraisals",['$http',function($http){

return{
  upload:function(data){
  $http({
    url: '/appraisalform/hodreviewsubmit',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}
}}]);