"use strict";
$(document).ready(function(){
	$('body').on('click','a', function()
	{
		$('.cache').hide();
		var val =$(this).attr('href');
		$(val).show();

	});

  

//var url = "https://s.idsympa.com/u-4.json";
//var url = "user-4.json";

$.getJSON("user-4.json",function(json){
	var template = $('#tout').html();
	var rendered = Mustache.render(template,json);
	$('body').html(rendered);
});

});







