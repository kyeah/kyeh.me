var Longform = function(){
	this.wideWidth = 0.7;

	this._wideContent = null;
};

Longform.prototype.initialize = function() {
	hljs.initHighlightingOnLoad();
	
	this.retina();

	if(Modernizr && !Modernizr.touch && window.innerWidth > 768) {
		this.parallaxBackground();
		this.resizeWideContent();
	}

	this.bindEvents();	
};

Longform.prototype.parallaxBackground = function() {
	$(window).stellar({ horizontalScrolling: false });
};

Longform.prototype.retina = function() {
	if(!window.devicePixelRatio || window.devicePixelRatio < 2 || window.innerWidth < 1025) {
		return;
	}

	this.retinaBackground();
};

Longform.prototype.retinaBackground = function() {
	$('[data-bg2x]').each(function(){
		$(this).css('background-image', 'url(' + $(this).attr('data-bg2x') + ')').addClass('am-parallax-background')
	});
};

Longform.prototype.bindEvents = function() {
	$('body').on('click', '.am-open-menu', $.proxy(this.toggleMenu, this));
	$('body').on('submit', '.am-subscribe-form[target="_blank"]', $.proxy(this.disableForm, this));
	$(window).on('resize', $.proxy(this.resizeWideContent, this));
};

Longform.prototype.toggleMenu = function(e) {
	$('nav').toggleClass('am-menu-expanded');

	e.stopPropagation();
	e.preventDefault();
};

Longform.prototype.disableForm = function(e) {
	setTimeout(function(){
		$(e.target).find('input, select, button').attr('disabled', 'disabled');
	}, 500);
};

Longform.prototype.resizeWideContent = function() {
	if(width * this.wideWidth < 769) {
		return;
	}

	var width = window.innerWidth;

	if(this._wideContent == null) {
		this._wideContent = $('.am-wide-width, .am-full-width');
	}

	var self = this;

	$(this._wideContent).each(function(){
		if(width < 769 || $(this).hasClass('am-wide-width') && width * self.wideWidth < 769) {
			$(this).css('left', 'auto')
				.css('width', 'inherit')
				.css('margin-left', '0');
		} else {
			$(this).css('left', '-' + ((width - $(this).parent().width()) / 2) + 'px');

			if($(this).hasClass('am-wide-width')) {
				$(this).css('width', (width * self.wideWidth) + 'px')
					.css('margin-left', (width * self.wideWidth / 4) + 'px')
			} else {
				$(this).css('width', (width) + 'px');
			}
		}
	});
};

// initialize the JS
var _lf = new Longform();
$(function(){
	_lf.initialize();
});