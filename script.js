

$(document).ready(function() {	
	$(".first").click(function(){
		$(this).next().slideToggle("slow");
	});
	
	$(".sixteenth").click(function(){
		$(this).next().slideToggle("slow");
	});
	
	$(".twentysixth").click(function(){
		$(this).next().slideToggle("slow");
	});
	
	$(".thirtysecond").click(function(){
		$(this).next().slideToggle("slow");
	});
	
	$(".thirtyfifth").click(function(){
		$(this).next().slideToggle("slow");
	});
	

	$(".correct").click(function(){
		$(this).addClass("green");
	});
	$(".wrong").click(function(){
		$(this).addClass("red");
	});
});