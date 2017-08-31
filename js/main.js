// A $( document ).ready() block.
$( document ).ready(function() {

	setTimeout(function(){ 
	$('.h1').textillate({ in: { effect: 'rollIn' } });
	}, 3000);

	$( ".btn-name-elephant" ).click(function() {
		$("h1").html("This is " + $(".name-input").val() + " the elephant." );
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

	$("#age").text(stringAge);
	console.log(stringAge)
});

var d = new Date();
var b = new Date (1991,3,12);
var day = 86400000;
var year = day * 365;
var yearsOld = (d - b)/year;
console.log(yearsOld);
var daysOld = (d - b)/day;
console.log(daysOld);

var yearsRounded = Math.floor(yearsOld);
var daysRounded = Math.floor(daysOld % 365);

var stringAge = "You are: " + yearsRounded + " years and " + daysRounded + " days old.";
