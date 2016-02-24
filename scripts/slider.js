$(document).ready(function(){

	$(".nextLink").on("click", function(event){

		var currentActiveImage = $('.image-shown');
		var nextActiveImage = currentActiveImage.next();
		$('.image-shown').fadeIn('slow', function(){

		if (nextActiveImage.length == 0)
		{
			nextActiveImage = $('.carousel-inner img').first();
		}

		currentActiveImage.removeClass('image-shown').addClass('image-hidden').css('z-index',10);
		nextActiveImage.addClass('image-shown').removeClass('image-hidden').css('z-index', 20);

		$('.carousel-inner img').not([currentActiveImage,nextActiveImage]).css('z-index',1);

		event.preventDefault();
	});
	});

 	$('.previousLink').on('click', function(event){
 		var currentActiveImage=$('.image-shown');
 		var nextActiveImage=currentActiveImage.prev();

 		if (nextActiveImage.length == 0)
 		{
 			nextActiveImage=$('.carousel-inner img').last();
 		}

 		currentActiveImage.removeClass('image-shown').addClass('image-hidden').css('z-index', -10);
 		nextActiveImage.addClass('image-shown').removeClass('image-hidden').css('z-index',20);

 		$('.carousel-inner img').not([currentActiveImage,nextActiveImage]).css('z-index',1);

 		event.preventDefault();
 	});
});
