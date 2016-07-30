$(document).ready(function(){
	init();		
	
	$('nav').find('li').each(function(){
		var id = $(this).attr('value');
		var waypoint = new Waypoint({
				element: document.getElementById('section-' + id),
				handler: function() {
// 					var id = this.element.id.replace('waypoint', '');
					updateMenuState(id);
		  			},
		  		offset: '-10px'
		  		});
	});	
});

function init() { 
	// : INFO : homepage tag animation init
	$('.tag-sweep-to-left').typer(['SOFTWARE DEVELOPER', 
			'WEB DEVELOPER', 
			'UI/UX DEVELOPER', 
			'&DESIGNER']);
	
	// : INFO : init button event listeners	
	$('.hamburger').click(function(){
		$(this).toggleClass('is-active');
		$(this).toggleClass('hamburger-close');
		$('#navigation').toggleClass('nav-is-active');
	});
	
	// : INFO : init menu button listeners	
	$('nav').find('li').click(function(){
		var id = $(this).attr('value');
		updateMenuState(id);
		$('html, body').animate({scrollTop:$('section#section-'+id).offset().top}, 600);
		$('#navigation').toggleClass('nav-is-active');		
	});

}

function updateMenuState(id) {
	$('nav').find('li').each(function(){
		if(id === $(this).attr('value')) {
			$(this).addClass('active');
		}
		else {
			$(this).removeClass('active');
		}
	});
}


(function($){
    $.fn.typer = function(text, options){
        options = $.extend({}, {
            char: '',
            delay: 3000,
            duration: 600,
            endless: true,
            onType: $.noop,
            afterAll: $.noop,
            afterPhrase: $.noop
        }, options || text);

        text = $.isPlainObject(text) ? options.text : text;
        text = $.isArray(text) ? text : text.split(" ");

        return this.each(function(){
            var elem = $(this),
                isVal = {input:1, textarea:1}[this.tagName.toLowerCase()],
                isTag = false,
                timer,
                c = 0;

            (function typetext(i) {
                var e = ({string:1, number:1}[typeof text] ? text : text[i]) + '',
                    char = e.substr(c++, 1);

                if( char === '<' ){ isTag = true; }
                if( char === '>' ){ isTag = false; }
                elem[isVal ? "val" : "html"](e.substr(0, c) + ($.isFunction(options.char) ? options.char() : options.char || ' '));
                if(c <= e.length){
                    if( isTag ){
                        typetext(i);                       
                    } else {
                        timer = setTimeout(typetext, options.duration/10, i);
                    }
                    options.onType(timer);
                } else {
                    c = 0;
                    i++;

                    if (i === text.length && !options.endless) {
                        return;
                    } else if (i === text.length) {	                                        
                        i = 0;
                    }
                    timer = setTimeout(typetext, options.delay, i);
					setTimeout(function(){
						 elem.toggleClass('tag-sweep-to-left-hover');
					}, (options.duration/10)+100)
					setTimeout(function(){
						 elem.toggleClass('tag-sweep-to-left-hover');
					}, options.delay-100)	
                    if(i === text.length - 1) {
	                    options.afterAll(timer)	                    
                    };

                    options.afterPhrase(timer);
                }
            })(0);
        });
    };
}(jQuery));