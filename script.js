

$(document).ready(function() {	
	$(".1").click(function(){
  $("#p1").slideToggle("slow");
  $(".GW").slideToggle("slow");
});

$(".a1").click(function(){
  $(".a1").addClass("green");
});
$(".b1").click(function(){
  $(".b1").addClass("red");
});
});