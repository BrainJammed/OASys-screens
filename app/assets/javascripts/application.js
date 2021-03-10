/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}



$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})



$( document ).ready(function() {




    
  $("#sexualOffenceYes").click(function(){
    	$(".hiddenDate").show();
	});

	$("#sexualOffenceNo").click(function(){
    	$(".hiddenDate").hide();
	});

  $("#childConYes").click(function(){
      $(".childCon").show();
  });

  $("#childConNo").click(function(){
      $(".childCon").hide();
  });

  $('.rsr').click(function() {
     if($('#lduDiv1').is(':checked') && $('#kentTeamA').is(':checked')) 
      { 
        $("#button").attr("onclick","location.href = 'assessmentDetailsUpdated.html';");

      }
  });




  	



	







	







});