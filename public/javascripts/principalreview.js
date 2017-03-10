$(document).ready(function(){
      $('#promote').click(function(){
      var member_id=$(".approved").attr("id");
      var StaffName=$(".approved1").attr("id");
      var email=$(".approved2").attr("id");
      var number={"member_id":member_id,
      				"StaffName":StaffName,
      				'email':email

  				};
      $.post("/appraisalform/directReviewApproved",number);
      location.reload(true);
      });
       $('#reject').click(function(){
      var member_id=$(".rejected").attr("id");
      var StaffName=$(".rejected1").attr("id");
      var email=$(".rejected2").attr("id");
      var number={"member_id":member_id,
      				"StaffName":StaffName,
      				'email':email

  				}
      $.post("/appraisalform/directReviewRejected",number);


      });

      });
