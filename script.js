//show and hide the input field
$(".fa-pencil-square-o").click(function() {
	$("input[type='text']").fadeToggle();
});

//check and uncheck a to-do
$("ul").on("click", "li", function() {
	$(this).toggleClass("done");
});

//delete a to-do
$("ul").on("click", "span", function(event) {
	$(this).parent().fadeOut(500, function() {
		$(this).remove();
	});
	event.stopPropagation();
});

//create a new to-do
$("input[type='text']").keypress(function(event) {
	if(event.which === 13){
		var newTodo = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-eraser'></i></span> " + newTodo + "</li>");
	}
})