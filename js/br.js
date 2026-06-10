/*===========================================================*/
/*	Preloader 
/*===========================================================*/	

//<![CDATA[
	$(window).load(function() { // makes sure the whole site is loaded
		setTimeout(function() { // wait to ensure IBE loaded.
        	$("#loader").slideUp("slow" );
		}, 12);
	})
//]]>