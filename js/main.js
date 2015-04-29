// A $( document ).ready() block.
$( document ).ready(function() {

setTimeout(function(){ 
$('.h1').textillate({ in: { effect: 'rollIn' } });
}, 3000);

	$( ".btn-name-elephant" ).click(function() {
		$("h1").html("This is " + $(".name-input").val() );
	});

	$( ".btn-party-hat" ).click(function() {

		$ (".hat-img").animate(
		    {
		        top: "103px"
		    },
		 
		    // Duration
		    600
		).css("display","block");
	});

	$( ".btn-next-text" ).click(function() {
		$("h1").html("It is " + $(".name-input").val() );
	});

});