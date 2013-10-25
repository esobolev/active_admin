//= require jquery
//= require jquery-ui
//= require jquery_ujs

//= require active_admin/application


$(document).ready(function(){
  if($(".alert").size() > 0) {
    $(".alert").delay("5000").fadeOut();
  }

  $('.tags-input').tagsInput({
    'height':'32px',
    'width':'75.4%',
  });

  // // 1. Listen to change event
  // $('.file_preview').on('change', function() {
  //   alert(1);
  //   target_img = $('img', $(this).next());
  //   console.log(target_img);
  //   // 2. Check if it has the FileReader class
  //   if (!this.files) {
  //     // 2.1. Old enough to assume a real path
  //     setPreview(this.value, target_img);
  //   }
  //   else {
  //     // 2.2. Read the file content.
  //     var reader = new FileReader();

  //     reader.onload = function(e) {
  //       console.log(e.target.result.result)
  //       setPreview(e.target.result.result, target_img);
  //     };

  //     reader.readAsDataURL(this.files[0]);
  //   }
  // });

  // function setPreview(url, target) {
  //   // Do preview things.
  //   target.attr('src', url);
  // }
  
});