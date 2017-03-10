
<<<<<<< HEAD
$(document).ready(function(){

	$(".badge").each(function(){
        var value=parseInt($(this).text());
        if(value<3){
        	$(this).css('background-color', 'green');
        }
        else if(value==3){
        	$(this).css('background-color', 'orange');	
        }
        else{
        	$(this).css('background-color', 'red');	
        }
    });
	$(".approve").click(function() {
    	var $item = $(this).closest("tr")   // Finds the closest row <tr> 
                       .find(".id")     // Gets a descendent with class="nr"
                       .val();         // Retrieves the text within <td>
   		var $approve=$(this).closest("tr")						
                       .find(".approve")
    	var $reject=$(this).closest("tr")						
                       .find(".reject")
    	var $approveorreject=$(this).closest("tr").find(".approveorreject")
    	//alert($item); 


    	$.post("/gatepass/approve",{"_id":$item}).done(function(data, textStatus, jqXHR) 
		{

			//alert(data);
			$approve.hide();
			$reject.hide();
			$approveorreject.append( "<p>Approved</p>" );

		}).fail(function(jqXHR, textStatus, errorThrown) 
		{
    		alert('network connection busy try again');
		});


	});

	

	$(".reject").click(function() {
	    var $item = $(this).closest("tr")   // Finds the closest row <tr> 
	                       .find(".id")     // Gets a descendent with class="nr"
	                       .val();         // Retrieves the text within <td>
	   	var $approve=$(this).closest("tr")						
	                       .find(".approve")
	    var $reject=$(this).closest("tr")						
	                       .find(".reject")
	    var $approveorreject=$(this).closest("tr").find(".approveorreject")
	    //alert($item); 
	    $approve.hide();
		$reject.hide();
		$approveorreject.append( "<input type='text' style='height:30px'id='reson'/><input style='margin-left:5px;height:30px'type='submit' id='resonsub'/>" );

		$("#resonsub").click(function(){
		 	var $reson=$("#reson").val();
	    	$.post("/gatepass/reject",{"_id":$item,"RejectedReason":$reson}).done(function(data, textStatus, jqXHR) 
			{

		  		//alert(data);
		  		$approveorreject.find('input').remove();
		  		$approveorreject.append( "<p>Rejected</p>" );

			}).fail(function(jqXHR, textStatus, errorThrown) 
			{
		    	alert('network connection busy try again');
		    	$approveorreject.find('input').remove();
		    	$approve.show();
		    	$reject.show();
			});

		});


	});



});
=======
/*
$(document).ready(function(){

var data={
           College:"AEC",
           Departmentname:"CIVIL" 
        }
    //call $.ajax here

$.post("/getdata",{"x":"1","y":"2","z":"3"}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('failed');
});


});
*/
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
