this.skynotif = function(){
	$(".support").click(function(e){
	$(".notif").slideDown("slow")
	})
	$("#skydesignbody,.logo,.menuing,.classslid,.codingcen2").click(function(e){
	$(".notif").fadeOut("slow")
	})
};
$(document).ready(function(){
	skynotif();
});