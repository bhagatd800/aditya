$(document).ready(function(){

<<<<<<< HEAD
  $(".edit").each(function(){
            $(this).click(function (e) {
    e.preventDefault();
      //alert('hai');
        var  td_to_append=$(this).closest("td");
        var $item = $(this).closest("td")   // Finds the closest row <tr> 
                       .find(".data"); 
         var $edt=$(this).closest("td")   // Finds the closest row <tr> 
                       .find(".edit");
       var id=$item.attr('id');
       var value=$item.text();

        var data={};

       $edt.hide();
       $item.hide();
       td_to_append.append("<input type='text' class=''style='width:100px;height:30px;border-radius:3px;' id='eddata' value='"+value+"'/><button type='button' id='updt' class='btn btn-info btn-circle'><i class='glyphicon glyphicon-ok'></i></button><button type='button' id='cncl' class='btn btn-warning btn-circle'><i class='glyphicon glyphicon-remove'></i></button>");

      $("#updt").click(function () {

        var text=$(this).closest("td").find("#eddata");
        var upval=text.val();
        data[id]=upval;
        alert(JSON.stringify(data));
          $.post("/updatemydata",data).done(function(data, textStatus, jqXHR) 
      {

          //alert(data);
          $item.show();
          $item.text(upval);
          td_to_append.find('input,button').remove();
          $edt.show();
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
          $item.show();
           td_to_append.find('input,button').remove();
          $edt.show();
      });



          
      });   

      $("#cncl").click(function () {
          $item.show();
           td_to_append.find('input,button').remove();
          $edt.show();

            

      });   
});



});


  $('input[type="checkbox"]').click(function(){
            if($(this).is(":checked")){
                var tdoorno= $("#PermanentDoorno").text();
                var tstreet= $("#PermanentStreet").text();
                var tcity= $("#PermanentCity").text();
                var tcountry= $("#PermanentCountry").text();
                var tzipcode= $("#Permanentzipcode").text();
                taddress={};
                taddress['TemporaryDoorno']=tdoorno;
                taddress['TemporaryStreet']=tstreet;
                taddress['TemporaryCity']=tcity;
                taddress['TemporaryCountry']=tcountry;
                taddress['Temporaryzipcode']=tzipcode;
                //alert(JSON.stringify(taddress));
                
                $.post("/updatemydata",taddress).done(function(data, textStatus, jqXHR) 
      {

          //alert(data);
          $('#TemporaryDoorno').text(tdoorno);
                $('#TemporaryStreet').text(tstreet);
                $('#TemporaryCity').text(tcity);
                $('#TemporaryCountry').text(tcountry);
                $('#Temporaryzipcode').text(tzipcode);
                

          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });    
                
            }
        });


$("#addbtn-ex").click(function () {
    //alert('hai');
        var experience={};
        experience['College']=$("#excollege").val();

        experience['From']=$("#exfrom").val();

        experience['To']=$("#exto").val();

        experience['InYears']=$("#exyears").val();
      //  alert(JSON.stringify(experience));
          $.post("/experience",experience).done(function(data, textStatus, jqXHR) 
      {
          $("#excollege").val("");
          $("#exfrom").val("");

        $("#exto").val("");

        $("#exyears").val("");

          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your experience added successfullyyyy....',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });



          });


/* adding scopus certifictes */

$("#addbtn-s").click(function () {
    //alert('hai')

        var scopus={};
        scopus['Title']=$("#stitle").val();

        scopus['Isbnno']=$("#sisbnno").val();

        scopus['Author']=$("#sauthor").val();
        scopus['Reviewed']=$("#sreviewed").val();
        scopus['Year']=$("#acyear").val();
      //  alert(JSON.stringify(experience));
          $.post("/scopus",scopus).done(function(data, textStatus, jqXHR) 
      {
          $("#stitle").val("");
          $("#sisbnno").val("");

        $("#sauthor").val("");

        $("#acyear").val("");

          //alert(data);
          $.notify({
  // options
  icon: 'glyphicon glyphicon-warning-sign',
  title: '',
  message: 'Your scopus/SCI paper was added successfullyyyy....',
  
},{
  // settings
  element: 'body',
  position: null,
  type: "success",
  allow_dismiss: true,
  newest_on_top: false,
  showProgressbar: false,
  placement: {
    from: "top",
    align: "center"
  },
  offset: 20,
  spacing: 10,
  z_index: 1031,
  delay: 5000,
  timer: 1000,
  url_target: '_blank',
  mouse_over: null,
  animate: {
    enter: 'animated fadeInDown',
    exit: 'animated fadeOutUp'
  },
  onShow: null,
  onShown: null,
  onClose: null,
  onClosed: null,
  icon_type: 'class',
  template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
    '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
    '<span data-notify="icon"></span> ' +
    '<span data-notify="title">{1}</span> ' +
    '<span data-notify="message">{2}</span>' +
    '<div class="progress" data-notify="progressbar">' +
      '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
    '</div>' +
    '<a href="{3}" target="{4}" data-notify="url"></a>' +
  '</div>' 
});
          
      }).fail(function(jqXHR, textStatus, errorThrown) 
      {
          alert('network connection busy try again');
      });



          });


      
/* adding national certifictes */

$("#addbtn-n").click(function () {
    //alert('hai')

        var national={};
        national['Title']=$("#ntitle").val();

        national['Isbnno']=$("#nisbnno").val();

        national['Author']=$("#nauthor").val();
        national['Reviewed']=$("#nreviewed").val();
        national['Year']=$("#acnyear").val();
       // alert(JSON.stringify(experience));
          $.post("/national",national).done(function(data, textStatus, jqXHR) 
      {
          $("#ntitle").val("");
          $("#nisbnno").val("");
          $("#nauthor").val("");
          $("#nreviewed").val("");
          $("#acnyear").val("");
          //alert(data);
          $.notify({
  // options
            icon: 'glyphicon glyphicon-warning-sign',
            title: '',
            message: 'Your national/international paper was added successfullyyyy....',
            
          },{
            // settings
            element: 'body',
            position: null,
            type: "success",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
              from: "top",
              align: "center"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
              enter: 'animated fadeInDown',
              exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
              '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
              '<span data-notify="icon"></span> ' +
              '<span data-notify="title">{1}</span> ' +
              '<span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>' 
          });
                    
                }).fail(function(jqXHR, textStatus, errorThrown) 
                {
                    alert('network connection busy try again');
                });



                    });

    /*add reputed papers*/

    $("#addbtn-r").click(function () {
    //alert('hai')

        var reputed={};
        reputed['Title']=$("#rtitle").val();

        reputed['Conference']=$("#rconf").val();

        reputed['DetailConference']=$("#rdetail").val();
        reputed['Author']=$("#rauthor").val();
        reputed['Year']=$("#ryear").val();
      //  alert(JSON.stringify(experience));
          $.post("/reputed",reputed).done(function(data, textStatus, jqXHR) 
      {
          $("#rtitle").val("");
          $("#rconf").val("");
          $("#rauthor").val("");
          $("#rdetail").val("");
          $("#ryear").val("");
          //alert(data);
          $.notify({
  // options
            icon: 'glyphicon glyphicon-warning-sign',
            title: '',
            message: 'Your nreputed/conference paper was added successfullyyyy....',
            
          },{
            // settings
            element: 'body',
            position: null,
            type: "success",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
              from: "top",
              align: "center"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
              enter: 'animated fadeInDown',
              exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
              '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
              '<span data-notify="icon"></span> ' +
              '<span data-notify="title">{1}</span> ' +
              '<span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>' 
          });
                    
                }).fail(function(jqXHR, textStatus, errorThrown) 
                {
                    alert('network connection busy try again');
                });



                    });

      /*journal papers */
      $("#addbtn-j").click(function () {
    //alert('hai')

        var journal={};
        journal['Title']=$("#jtitle").val();

        journal['Conference']=$("#jconf").val();

        journal['DetailConference']=$("#jdetail").val();
      journal['Author']=$("#jauthor").val();
        journal['Year']=$("#jyear").val();
      //  alert(JSON.stringify(experience));
          $.post("/journal",journal).done(function(data, textStatus, jqXHR) 
      {
          $("#jtitle").val("");
          $("#jconf").val("");
          $("#jauthor").val("");
          $("#jdetail").val("");
          $("#jyear").val("");
          //alert(data);
          $.notify({
  // options
            icon: 'glyphicon glyphicon-warning-sign',
            title: '',
            message: 'Your journal/conference paper was added successfullyyyy....',
            
          },{
            // settings
            element: 'body',
            position: null,
            type: "success",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
              from: "top",
              align: "center"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
              enter: 'animated fadeInDown',
              exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
              '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
              '<span data-notify="icon"></span> ' +
              '<span data-notify="title">{1}</span> ' +
              '<span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>' 
          });
                    
                }).fail(function(jqXHR, textStatus, errorThrown) 
                {
                    alert('network connection busy try again');
                });



                    });

          $("#addbtn-c").click(function () {
    //alert('hai')

        var chapter={};
        chapter['Title']=$("#ctitle").val();

        chapter['Isbnno']=$("#cisbn").val();

        chapter['Author']=$("#cauthor").val();
        chapter['Publisher']=$("#cpublisher").val();
        chapter['Year']=$("#cyear").val();
      //  alert(JSON.stringify(experience));
          $.post("/chapter",chapter).done(function(data, textStatus, jqXHR) 
      {
          $("#ctitle").val("");
          $("#cisbn").val("");
          $("#cauthor").val("");
          $("#cpublisher").val("");
          $("#cyear").val("");
          //alert(data);
          $.notify({
  // options
            icon: 'glyphicon glyphicon-warning-sign',
            title: '',
            message: 'Your chapter/book  was added successfullyyyy....',
            
          },{
            // settings
            element: 'body',
            position: null,
            type: "success",
            allow_dismiss: true,
            newest_on_top: false,
            showProgressbar: false,
            placement: {
              from: "top",
              align: "center"
            },
            offset: 20,
            spacing: 10,
            z_index: 1031,
            delay: 5000,
            timer: 1000,
            url_target: '_blank',
            mouse_over: null,
            animate: {
              enter: 'animated fadeInDown',
              exit: 'animated fadeOutUp'
            },
            onShow: null,
            onShown: null,
            onClose: null,
            onClosed: null,
            icon_type: 'class',
            template: '<div data-notify="container" class="col-xs-11 col-sm-3 alert alert-{0}" role="alert">' +
              '<button type="button" aria-hidden="true" class="close" data-notify="dismiss">×</button>' +
              '<span data-notify="icon"></span> ' +
              '<span data-notify="title">{1}</span> ' +
              '<span data-notify="message">{2}</span>' +
              '<div class="progress" data-notify="progressbar">' +
                '<div class="progress-bar progress-bar-{0}" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100" style="width: 0%;"></div>' +
              '</div>' +
              '<a href="{3}" target="{4}" data-notify="url"></a>' +
            '</div>' 
          });
                    
                }).fail(function(jqXHR, textStatus, errorThrown) 
                {
                    alert('network connection busy try again');
                });



                    });


});



=======


});
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
$('#upload-ssc').on('click', function (){
    $('#upload-ssc').click();
   
});

$('#uploadbtn-ssc').unbind().bind('click', function(){

  var files = $('#upload-ssc').get(0).files;
  var yearofpass= $('#inputsscy').val();
  var insti=$('#inputssci').val();
 // alert(yearofpass);
  //alert(insti);

  var SSC={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(SSC);

  $.post("/uped",{SSC:rj}).done(function(data, textStatus, jqXHR) 
{

//alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    //alert('network connection failed  please try again');
});



  //alert(SSC);
  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request

    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsssc[]', file, file.name);
     
    }


    $.ajax({
      url: '/upload/4',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          $("#uploadbtn-ssc").attr("value","Saved");
          $(".ssc :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});

$('#upload-inter').on('click', function (){
    $('#upload-inter').click();
  
});

$('#uploadbtn-inter').on('click', function(){

  var files = $('#upload-inter').get(0).files;

  var yearofpass= $('#inputintery').val();
  var insti=$('#inputinteri').val();
 // alert(yearofpass);
  //alert(insti);

  var Inter={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(Inter);

  $.post("/uped",{Inter:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsinter[]', file, file.name);
    }

    $.ajax({
      url: '/upload/5',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          $("#uploadbtn-inter").attr("value","Saved");
          $(".inter :input").attr("disabled", true);
          
        }, false);

        return xhr;
      }
    });

  }
});

$('#upload-ug').on('click', function (){
    $('#upload-ug').click();
   
});

$('#uploadbtn-ug').on('click', function(){

  var files = $('#upload-ug').get(0).files;

  var yearofpass= $('#inputugy').val();
  var insti=$('#inputugi').val();
 // alert(yearofpass);
  //alert(insti);

  var UG={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(UG);

  $.post("/uped",{UG:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsug[]', file, file.name);
    }

    $.ajax({
      url: '/upload/6',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

          $("#uploadbtn-ug").attr("value","Saved");
          $(".ug :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});

  $('.upload-pg').on('click', function (){
    $('#upload-pg').click();
    
});

$('#uploadbtn-pg').on('click', function(){

  var files = $('#upload-pg').get(0).files;

  var yearofpass= $('#inputpgy').val();
  var insti=$('#inputpgi').val();
 // alert(yearofpass);
  //alert(insti);

  var PG={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(PG);

  $.post("/uped",{PG:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});


  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadspg[]', file, file.name);
    }

    $.ajax({
      url: '/upload/7',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-pg").attr("value","Saved");
          $(".pg :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});

<<<<<<< HEAD

$('#uploadbtn-phd').on('click', function(){

  var files = $('#upload-phd').get(0).files;

  var yearofpass= $('#inputphdy').val();
  var insti=$('#inputphdi').val();
 // alert(yearofpass);
  //alert(insti);

  var PHD={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(PHD);
  //alert(rj);
  $.post("/uped",{PHD:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});


  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsphd[]', file, file.name);
    }

    $.ajax({
      url: '/upload/8',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-phd").attr("value","Saved");
          $(".phd :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});

  $('#uploadbtn-other').on('click', function(){

  var files = $('#upload-other').get(0).files;

  var yearofpass= $('#inputothery').val();
  var insti=$('#inputotheri').val();
 // alert(yearofpass);
  //alert(insti);

  var Other={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(Other);
  //alert(rj);
  $.post("/uped",{Other:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});


  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsother[]', file, file.name);
    }

    $.ajax({
      url: '/upload/9',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-other").attr("value","Saved");
          $(".other :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});



  $('.upload-bank').on('click', function (){
    
    $('#upload-bank').click();
  });

$('#uploadbtn-bank').on('click', function(){

  var files = $('#upload-bank').get(0).files;

  /*var yearofpass= $('#inputpgy').val();
  var insti=$('#inputpgi').val();
 // alert(yearofpass);
  //alert(insti);

  var PG={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(PG);

  $.post("/uped",{PG:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});

*/
  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsbank[]', file, file.name);
    }

    $.ajax({
      url: '/upload/1',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-bank").attr("value","Saved");
          $(".bank :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});






  $('.upload-adhar').on('click', function (){
    
    $('#upload-adhar').click();
  });

$('#uploadbtn-adhar').on('click', function(){

  var files = $('#upload-adhar').get(0).files;

  /*var yearofpass= $('#inputpgy').val();
  var insti=$('#inputpgi').val();
 // alert(yearofpass);
  //alert(insti);

  var PG={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(PG);

  $.post("/uped",{PG:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});

*/
  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadsadhar[]', file, file.name);
    }

    $.ajax({
      url: '/upload/2',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-adhar").attr("value","Saved");
          $(".adhar :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});




  $('.upload-passport').on('click', function (){
    
    $('#upload-passport').click();
  });

$('#uploadbtn-passport').on('click', function(){

  var files = $('#upload-passport').get(0).files;

  var passportno= $('#passportno').val();
  var passportissue=$('#plsissue').val();
  var dateofissue=$('#dtofissue').val();
  var validity=$('#validity').val();
 // alert(yearofpass);
  //alert(insti);

  var Passportdetails={

    Passportno:passportno,
    PlaceOfIssue:passportissue,
    DateOfIssue:dateofissue,
    Validity:validity
  };
  var rj=JSON.stringify(Passportdetails);
    alert(rj)
  $.post("/uped",{Passportdetails:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);

}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});


  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadspassport[]', file, file.name);
    }

    $.ajax({
      url: '/upload/3',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-passport").attr("value","Saved");
          $(".passport :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});


$('.upload-pancard').on('click', function (){
    
    $('#upload-pancard').click();
  });

$('#uploadbtn-pancard').on('click', function(){

  var files = $('#upload-pancard').get(0).files;

  /*var yearofpass= $('#inputpgy').val();
  var insti=$('#inputpgi').val();
 // alert(yearofpass);
  //alert(insti);

  var PG={

    YearOfPass:yearofpass,
    Institution:insti,
  };
  var rj=JSON.stringify(PG);

  $.post("/uped",{PG:rj}).done(function(data, textStatus, jqXHR) 
{

alert(data);
}).fail(function(jqXHR, textStatus, errorThrown) 
{
    alert('network connection failed  please try again');
});

*/
  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request
    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploadspancard[]', file, file.name);
    }

    $.ajax({
      url: '/upload/10',
      type: 'POST',
      data: formData,
      processData: false,
      contentType: false,
      success: function(data){
          console.log('upload successful!\n' + data);
      },
      xhr: function() {
        // create an XMLHttpRequest
        var xhr = new XMLHttpRequest();

        // listen to the 'progress' event
        xhr.upload.addEventListener('progress', function(evt) {

         $("#uploadbtn-pancard").attr("value","Saved");
          $(".pancard :input").attr("disabled", true);
          

        }, false);

        return xhr;
      }
    });

  }
});
=======
  
>>>>>>> 345c6492e86dfaea09cb270cc52b7970b2c40778
