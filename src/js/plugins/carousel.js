/*---- carousel landscape hero ----*/
$(document).ready(function(){
	
	var carouselTarget = $('.owl-carousel');
	// parameters
	var cnav;
	var cloop;
	var cmargin;
	var citems;
	var cnavText;
	var cnavSpeed; //arrow click
	var csmartSpeed;// bullet click
	var cdotsSpeed;
	var ccontrolsAriaHidden;
	var cmouseDrag;
	var ctouchDrag;
	var cdots;
	var cslideBy;
	var cstagePadding;
	// mobile params
	var mobnav;
	var mobdots;
	var mobitems;
	var mobstagePadding;
	var mobmargin;
	// 768 params
	var tabnav;
	var tabdots;
	var tabitems;
	var tabstagePadding;
	var tabmargin;
	// 992 params
	var desknav;
	var deskdots;
	var deskitems;
	var deskstagePadding;
	var deskmargin;
	// xl params
	var xlnav;
	var xldots;
	var xlitems;
	var xlstagePadding;
	var xlmargin;

	$(carouselTarget).each(function(){
		// target definition
		if ($(this).closest('.it-carousel-wrapper').hasClass('it-carousel-landscape-abstract-3')){
			cnav=true ;
			cloop=false ;
			cmargin = 24;
			citems=3 ;
			cnavText=[] ;
			cnavSpeed = 300 ; //arrow click
			csmartSpeed = 500 ;// bullet click
			cdotsSpeed = 200 ;
			ccontrolsAriaHidden = true ;
			cmouseDrag = true ;
			ctouchDrag = true ;
			cdots=false ;
			cslideBy='page';
			cstagePadding = cstagePadding;
			// mobile params
			mobnav= false;
			mobdots= true;
			mobitems= 1;
			mobstagePadding= 40;
			mobmargin = 0;
			// 768 params
			tabnav= false;
			tabdots= true;
			tabitems= 2;
			tabstagePadding= 40;
			tabmargin = 0;
			// 992 params
			desknav= false;
			deskdots= true;
			deskitems= 3;
			deskstagePadding= 0;
			deskmargin = 0;
			// xl params
			xlnav= false;
			xldots= true;
			xlitems= 3;
			xlstagePadding= 0;
			xlskmargin = 0;

			// carousel 3 col with shadow
			if ($(this).hasClass('it-card-bg')){
				mobstagePadding= 40;
				mobmargin = 24;
				tabstagePadding= 40;
				tabmargin = 24;
				deskstagePadding= 12;
				deskmargin = 24;
				xlstagePadding= 12;
				xlskmargin = 24;
			}
		}

		//carousel settings//
		$(this).owlCarousel(
			{
			//carousel parameters
			nav: cnav,
			loop: cloop,
			margin:24, //cmargin
			items: citems,
			navText: cnavText,
			navSpeed: cnavSpeed, //arrow click
			smartSpeed: csmartSpeed,// bullet click
			dotsSpeed: cdotsSpeed,
			navElement:'button',
			dotElement:'button',
			controlsAriaHidden:ccontrolsAriaHidden,
			mouseDrag : cmouseDrag,
			touchDrag : ctouchDrag,
			dots: cdots,
			slideBy:cslideBy,
			stagePadding: cstagePadding, //cstagePadding,
			responsive : {
				// breakpoint from 0 up
				0 : {
					nav:mobnav,
					dots:mobdots,
					items:mobitems,
					stagePadding: mobstagePadding,
					margin:mobmargin,
				},
				// breakpoint from 768 up
				768 : {
					nav: tabnav,
					dots: tabdots,
					stagePadding: tabstagePadding,
					items: tabitems,
					margin:tabmargin,
				},
				// breakpoint from 992 up
				992 : {
					nav:desknav,
					dots:deskdots,
					items:deskitems,
					stagePadding: deskstagePadding,
					margin:deskmargin,
				},
				// breakpoint from 1200 up
				1200 : {
					nav: xlnav,
					dots: xldots,
					stagePadding: xlstagePadding,
					items: xlitems,
					margin:xlmargin,
				}
				
		}

		});
	})
	

});