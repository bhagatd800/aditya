var app =angular.module("vcReview",[]);
app.controller("vcReviewController",['$scope','getAppraisalDatas','submitAppraisals',function($scope,getAppraisalDatas,submitAppraisals){

$scope.principalComment={
'review':''
}

$scope.getAppraisalData=function(){
getAppraisalDatas.getData().then(function(data){

$scope.appraisalData=data;
$scope.hodComment.email=$scope.appraisalData.generalInformation.email;
$scope.hodComment.name=$scope.appraisalData.generalInformation.staffName;
//alert($scope.principalComment.name);
});

}

$scope.promote=function(){

submitAppraisals.promote($scope.principalComment);

}


$scope.reject=function(){

submitAppraisals.reject($scope.principalComment);

}


}]);




app.factory("getAppraisalDatas",['$http',function($http){

	return{
    getData:function(){
    Datas=$http({
      method: 'GET',
      url: '/appraisalform/getReviewforVC'
  }).then(function(response) {
      
      return response.data;
      
    })
      
    return Datas;

   }  
    
}


}])

app.service("submitAppraisals",['$http',function($http){

return{
  promote:function(data){
  $http({
    url: '/appraisalform/principalReviewPromote',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
},
  reject:function(data){
  $http({
    url: '/appraisalform/principalReviewReject',
    method: "POST",
    data: data,
    headers: {
             'Content-Type': 'application/json'
    }
})
}

}}]);