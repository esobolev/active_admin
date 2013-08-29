//= require jquery
//= require jquery-ui
//= require jquery_ujs

//= require active_admin/application


$(document).ready(function(){
  if($(".alert").size() > 0) {
    $(".alert").delay("5000").fadeOut();
  }
});