$(document).ready(function(){
  $('#oferta').hide();
});
$('#pokazoferte').mouseover(function(){
  $(this).css("cursor", "crosshair");
  $('#oferta').show(2000);
});

$('#pokazoferte').mouseout(function(){
  $('#oferta').hide("slow");
});

$('#first').mouseover(function() {
  $(this).css("cursor", "pointer");
  $('#first p').css("visibility","visible");
  $('#first img').css('opacity',0.2);
});


$('#first').click(function() {
if (   $('#przepis').css("display")=='block'){
  $('#przepis').css("display","none");
}
else {
  $('#przepis').css("display","block");
}
});

$('#first').mouseout(function() {
  $('#first p').css("visibility","hidden");
  $('#first img').css("opacity",1);
});



$('#second').mouseover(function() {
  $(this).css("cursor", "pointer");
  $('#second p').css("visibility","visible");
    $('#second img').css('opacity',0.2);
});

$('#second').click(function() {
if (   $('#przepis2').css("display")=='block'){
  $('#przepis2').css("display","none");
}
else {
  $('#przepis2').css("display","block");
}
});


$('#second').mouseout(function() {
  $('#second p').css("visibility","hidden");
  $('#second img').css("opacity",1);
  
});


$('#third').mouseover(function() {
  $(this).css("cursor", "pointer");
  $('#third p').css("visibility","visible");
    $('#third img').css('opacity',0.2);

});

$('#third').click(function() {
if (   $('#przepis3').css("display")=='block'){
  $('#przepis3').css("display","none");
}
else {
  $('#przepis3').css("display","block");
}
});
$('#third').mouseout(function() {
  $('#third p').css("visibility","hidden");
    $('#third img').css("opacity",1);

});


