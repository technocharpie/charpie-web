function resize() 
{
	if (window.outerHeight < window.outerWidth) //desktop/laptop
	{
		$('li').each(function() { $(this).css('font-size', '3vw')});
		$('h2').each(function() { $(this).css('font-size', '3.5vw')});
		$('#rights').each(function() { $(this).css('font-size', '2.25vw')});
		$('#about').each(function() { $(this).css('font-size', '1.25vw')});
		$('#right-panel').each(function() { $(this).css('flex-direction', 'row')});
		$('#profile').each(    function() { $(this).css('height', '30%')});
		$('#profile').each(    function() { $(this).css('width', '30%')});
	}
	else //mobile dev
	{
		$('li').each(function() { $(this).css('font-size', '6vh')});
		$('h2').each(function() { $(this).css('font-size', '7vh')});
		$('#rights').each(function() { $(this).css('font-size', '4.5vh')});
		$('#about').each(function() { $(this).css('font-size', '2.5vh')});
		$('#right-panel').each(function() { $(this).css('flex-direction', 'column')});
		$('#profile').each(function() { $(this).css('height', '80%')});
		$('#profile').each(function() { $(this).css('width', '80%')});
	}
}