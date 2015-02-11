//index.js

$(document).ready(function() {
	$('.cardBody').addClass("hidden");

    $('#firstHeading').on("click", function(){
    	$('.cardBody').addClass("hidden");
    	$('#firstBody').removeClass("hidden");
    });

    $('#secondHeading').on("click", function(){
    	$('.cardBody').addClass("hidden");
    	$('#secondBody').removeClass("hidden");
    });

    $('#thirdHeading').on("click", function(){
    	$('.cardBody').addClass("hidden");
    	$('#thirdBody').removeClass("hidden");
    });

});






//  var position1 = {
// 	$('#Section_one').css('top: 10px')
// 	$('Section_two')
// 	$('Section_three')
// }

// #Section_one {
// 	top: 0px
// }

// #Section_two {
// 	top: 42px;
// }

// #Section_three {	
// 	top: 84px;
// }