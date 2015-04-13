$(document).ready(function(){
	$('#tweet-controls').hide();
	$('.tweet-compose').on('click', function(){
		$(this).animate({height:'66px'}, 50);
	});
	$('#mainTweet').on('click', function(){
		$('#tweet-controls').fadeIn();
	});
	$('html').click(function() {
		$('.tweet-compose').animate({height:'33px'}, 50);
		$('#tweet-controls').fadeOut(50);
	});
	$('.tweet-compose').click(function(event) {
    	event.stopPropagation();
	});
	$('.tweet-compose').each(function() {
        var $this = $(this);
        var counter = $this.parent().find('.counter');
        var maxlength = $this.attr('maxlength');

        counter.text(maxlength);

        $this.bind('input keyup keydown', function() {
            var value = $this.val();

            if(value.length > 0, value.length < 130) {
            	$('.counter').css({'color' : '#999'});
                counter.text(maxlength - $this.val().length);
            }else if (value.length >= 130){
            	$('.counter').css({'color' : 'red'});
            	counter.text(maxlength - $this.val().length);
            }
            else {
                counter.text(maxlength);
            }
        });
    });
    $('#tweet-submit').click(function(){
    	var newTweet = function(userpic, name, username, str, time){
    		
    	}
    	$('#stream').prepend
    });
});