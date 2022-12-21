var ww, wh;

function adjustSizes(){
	ww = $(window).width();
	wh = $(window).height();
	
	if (ww > wh) $('#rotator').css({ 'width' : wh, 'height' : wh, 'left' : ((ww / 2) - (wh / 2)) });
	else $('#rotator').css({ 'width' : ww, 'height' : ww, 'left' : 0 });
}

$(function(){

	adjustSizes();
	$(window).resize(function(){ adjustSizes(); });
	
	setTimeout(function(){	 
		$('#viewport').removeClass('loading'); 
	}, 1000);
	
	// on click
	$('#menu a').click(function(e){
		e.preventDefault();
		
		if (!$(this).parents('li').hasClass('active')){
			
			$('#menu li').removeClass('active');
			$(this).parents('li').addClass('active');
			
			$('#viewport').addClass('zoom');
		
			mytarget = $(this).attr('href');
			myindex = $(mytarget).index('.page') + 1;
			
			$('#rotator').removeClass();
			$('#rotator').addClass('r' + myindex);
			
			setTimeout(function(){	 
	    		$('#viewport').removeClass('zoom'); 
	    	}, 900);
		}
		
	});
	
});
