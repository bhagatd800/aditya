$('.upload-btn').on('click', function (){
    $('#upload-input').click();
});

$('#upload-input').on('change', function(){

  var files = $(this).get(0).files;

  if (files.length > 0){
    // create a FormData object which will be sent as the data payload in the
    // AJAX request

    var formData = new FormData();

    // loop through all the selected files and add them to the formData object
    for (var i = 0; i < files.length; i++) {
      var file = files[i];

      // add the files to formData object for the data payload
      formData.append('uploads[]', file, file.name);
     
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

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.pr-bank').text(percentComplete + '%');
            $('.pr-bank').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
              //$('.progress-bar').html('Done');
              $('.pr-bank').html(file.name);
              $('.upload-btn').prop("disabled", true);
              jAlert('Your File is uploaded successfully you can download it on your next login ', 'Confirm');

            }

          }

        }, false);

        return xhr;
      }
    });

  }
});

$('.upload-btnadhar').on('click', function (){
    $('#upload-inputadhar').click();
    $('.pr-adhar').text('0%');
    $('.pr-adhar').width('0%');
});

$('#upload-inputadhar').on('change', function(){

  var files = $(this).get(0).files;

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

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.pr-adhar').text(percentComplete + '%');
            $('.pr-adhar').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
               $('.pr-adhar').html(file.name);
              $('.uploadbtn-ssc').attr("disabled", true);
             // jAlert('Your File is uploaded successfully you can download it on your next login ', 'Confirm');

            }

          }

        }, false);

        return xhr;
      }
    });

  }
});

$('.upload-btnpassport').on('click', function (){
    $('#upload-inputpassport').click();
    $('.pr-passport').text('0%');
    $('.pr-passport').width('0%');
});

$('#upload-inputpassport').on('change', function(){

  var files = $(this).get(0).files;

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

          if (evt.lengthComputable) {
            // calculate the percentage of upload completed
            var percentComplete = evt.loaded / evt.total;
            percentComplete = parseInt(percentComplete * 100);

            // update the Bootstrap progress bar with the new percentage
            $('.pr-passport').text(percentComplete + '%');
            $('.pr-passport').width(percentComplete + '%');

            // once the upload reaches 100%, set the progress bar text to done
            if (percentComplete === 100) {
               $('.pr-passport').html(file.name);
              $('.upload-btnpassport').prop("disabled", true);
              jAlert('Your File is uploaded successfully you can download it on your next login ', 'Confirm');
            }

          }

        }, false);

        return xhr;
      }
    });

  }
});

  