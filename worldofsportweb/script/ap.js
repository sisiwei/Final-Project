$(function() {

	$(".sphere1").each(function(){
		var id = $(this).attr("id");
		if (id){
	
			var menu = $('<option value="' + id + '">' + id + '</option>')
			$("select").append(menu)
		}
	});


	$( "#countrymenu" ).change(function() {
     var country =   $( this ).val() ;
     $(".sphere1").hide();
     $("#"+country).show();
    });
});



	