$( document ).ready(function(){

	$('select').material_select();
    $(".button-collapse").sideNav({
      edge: "right",       // sideNav slides from right side after clicking hamburger icon
      closeOnClick: true   // Closes side-nav on <a> clicks, useful for Angular/Meteor
    });
    $('.parallax').parallax();
})