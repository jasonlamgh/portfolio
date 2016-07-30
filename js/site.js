$(document).ready(function(){
	init();	
	
	
	 $('img[src$=".svg"]').each(function() {
        var $img = jQuery(this);
        var imgURL = $img.attr('src');
        var attributes = $img.prop("attributes");

        $.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Remove any invalid XML tags
            $svg = $svg.removeAttr('xmlns:a');

            // Loop through IMG attributes and apply on SVG
            $.each(attributes, function() {
                $svg.attr(this.name, this.value);
            });

            // Replace IMG with SVG
            $img.replaceWith($svg);
        }, 'xml');
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