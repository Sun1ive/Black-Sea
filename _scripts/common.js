$(window).on("load",function() {
	let windowHeight = $(document).height();
	let speedStep = 3;
	let timeScrolling = windowHeight / speedStep;

	$(".scrollTop").click(function(event) {
		$("html, body").animate({
			scrollTop: 0
		}, timeScrolling);
	});
});


$(function(){

	$("#form").submit(function(){
		$.ajax({
			type: "POST", 
			url:  "../php/mail.php",
			data: $(this).serialize()
		}).done(function(){
			console.log(this);
			alert("Thanks");
		});
		return false;
	});
});