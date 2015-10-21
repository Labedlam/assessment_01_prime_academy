//console.log("hello there");
var clickedTracker=0
$(document).ready(function(){
//console.log("hello there");
addContainer();
deleteContainer();
changeColor();
// $("#content").on("click","newContainer"function(){
// 	$(this).find(".delete").remove();
// 	console.log("delete please")
// });


});

function addContainer(){
	$("#buttonHolder").on("click","button",function(){
	var $el="<div class='newContainer'>"
	+"<button class='delete'>Delete</button>"
	+"<button class='change'>Change</button>"
	+"<p class='Counter'>"+clickedTracker+"</p>"
	"</div>";

	$("#content").append($el);
	clickedTracker++;
	console.log("clicked");
});


};

function deleteContainer(){
	$("#content").on("click", ".delete",function(){
		$(this).parent().remove();
		console.log("im working");
	});
};

function changeColor(){

	$("#content").on("click",".change",function(){

	 $(this).parent().toggleClass("highlight");
		console.log("colorchange");
	});
};






