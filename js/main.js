// A $( document ).ready() block.
$( document ).ready(function() {

setTimeout(function(){ 
	$('h1').textillate({ in: { effect: 'fadeInDownBig' } });
}, 3000);

	$( ".btn-elephant-jump" ).click(function() {


		        $("h1").html("hello " + $(".name-input").val() );
		    };


	$( ".btn-party-hat" ).click(function() {

		$ (".hat-img").animate(
		    {
		        top: "86px"
		    },
		 
		    // Duration
		    600,
		 
		    // Callback to invoke when the animation is finished
		    function() {
		        $("h1").html("hello " + $(".name-input").val() );
		    }
		).css("display","block");
	});

});