AOS.init(); var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();(function(){var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];s1.async=true;s1.src='https://embed.tawk.to/'+tawkkey+'/default';s1.charset='UTF-8';s1.setAttribute('crossorigin','*');s0.parentNode.insertBefore(s1,s0);})(); function setLoadedTawkTo() { var mid, wid, tid, ifr, ind, tidc, ifrc, indc, tidw; if ( $( 'iframe[title="chat widget"]' ).length ) { mid = $( 'iframe[title="chat widget"]' ).eq( 0 ).parent().attr( 'id' ); wid = $( 'iframe[title="chat widget"]' ).eq( 0 ).attr( 'id' ); } if ( mid == 'tawkchat-container' ) { wid = $( 'iframe[title="chat widget"]' ).eq( 1 ).attr( 'id' ); } ifr = document.getElementById( wid ); var ind = ifr.contentDocument || ifr.contentWindow.document; tid = $( ind ).find( "#newMessagesBar" ).prev().find( '.thin' ).parent().attr( 'id' ); $( ind ).find( 'head' ).append( '<style type="text/css">#'+ tid +' { padding: 0 !important; display: none !important; } #popoutChat { padding: 0 !important; display: none !important; }</style>' ); tidc = $( 'iframe[title="chat widget"]' ).eq( 1 ).attr( 'id' ); if ( mid == 'tawkchat-container' ) { tidc = $( 'iframe[title="chat widget"]' ).eq( 0 ).attr( 'id' ); ifrc = document.getElementById( tidc ); var indc = ifrc.contentDocument || ifrc.contentWindow.document; $( indc ).find( 'head' ).append( '<style type="text/css">#tawkchat-status-text-container { border: 2px solid rgb(255, 255, 255) !important; }</style>' ); tidw = $( 'iframe[title="chat widget"]' ).eq( 1 ).attr( 'id' ); $( '#'+ tidw ).appendAttr( 'style', 'width: calc(100% - env(safe-area-inset-left) - env(safe-area-inset-right)) !important; margin-left: env(safe-area-inset-left) !important; margin-right: env(safe-area-inset-right) !important;' ); } else { $( '#'+ tidc ).appendAttr( 'style', 'border: 2px solid rgb(255, 255, 255) !important;' ); ifrc = document.getElementById( tidc ); var indc = ifrc.contentDocument || ifrc.contentWindow.document; $( indc ).find( 'head' ).append( '<style type="text/css">#tawkchat-status-text-container { border-radius: 50% !important; -webkit-border-radius: 50% !important; -moz-border-radius: 50% !important; }</style>' ); } if ( $( 'body#index.chat' ).length ) { Tawk_API.maximize(); } }; Tawk_API.onLoad = function() { setLoadedTawkTo(); }; function openLiveChat() { Tawk_API.toggle(); }; $( window ).scroll( function() { var h = $( window ).scrollTop(); if ( h > 200 ) { $( '#scrollToTop' ).removeClass( 'hidden' ); $( '#scrollToTop' ).addClass( 'show' ); } else { $( '#scrollToTop' ).removeClass( 'show' ); $( '#scrollToTop' ).addClass( 'hidden' ); } } ); $( document ).ready( function() { $('head').append( "<script>window.dataLayer = window.dataLayer || []; function gtag() { dataLayer.push( arguments ); } gtag( 'js', new Date() ); gtag( 'config', \'"+gantag+"\' );</script>" ); var d=new Date(); $( 'address .year' ).text( $.format.date(d,"yyyy") ); $( '#linkedin' ).append( '<script type="text/javascript" src="https://platform.linkedin.com/badges/js/profile.js" async defer></script><div class="LI-profile-badge"  data-version="v1" data-size="large" data-locale="en_US" data-type="vertical" data-theme="dark" data-vanity="jiho-lee-dev"><a class="LI-simple-link" href="https://www.linkedin.com/in/jiho-lee-dev?trk=profile-badge">Jiho Lee</a></div>' ); $( 'footer .profile .pic' ).append( '<figure><img src="'+proPic+'" alt="Jiho Lee" /></figure>' ); $( 'footer .profile .card .phone' ).append( '<a href="tel:+'+phone.replace(/[^0-9]/g,'')+'" title="Phone">'+phone+'</a>' ); $( 'footer .profile .card .email' ).append( '<a href="mailto:'+email+'" title="Email">'+email+'</a>' ); $( 'footer .profile .card .link a.linkedin' ).attr( 'href', linkedinLink ); $( 'footer .profile .card .link.linkedin' ).append( '<img src="https://static.licdn.com/scds/common/u/images/logos/linkedin/logo_linkedin_flat_white_93x21.png" alt="LinkedIn" />' ); if ( $( 'body#index.chat' ).length == 0 ) { d.setMinutes(d.getMinutes()-20*60+30); var yd=$.format.date(d,"yyyy-MM-dd HH:"); var pd=$.format.date(d,"MM/dd/yyyy HH:"); var yt=pd; d.setDate(d.getDate()+30-1-1); pd+=$.format.date(d, "dd"); d.setDate(d.getDate()-30+10); pd+=$.format.date(d,":dd"); $( '.datetime time' ).attr( 'datetime', pd.replace( yt, yd ) ); $( '.datetime time' ).text( pd ); $( 'a.btn[title="Resume"]' ).attr( 'data-src', 'https://'+ domain + resume ); $( 'a.btn.mailto' ).attr( 'href', 'mailto:'+ email ); $.getJSON( "/dist/data/proj.json", function ( data, status ) { $( 'dd.project .project-container' ).append( '<div class="list"></div>' ); var srcProj = "proj"; $.each( data.projects, function( idx, i ) { if ( i.source != "" && i.source != undefined ) { srcProj = i.source; } $( '#proj'+ i.group +' .list' ).append( '<div class="item"><a href="javascript:;" class="proj" data-jsbox="proj" data-type="image" data-src="/dist/assets/img/proj/proj_'+ srcProj +'.png" data-caption="'+ i.description +'" title="'+ i.title +'"><img src="/dist/assets/img/proj/proj_'+ srcProj +'_thumbnail.png" alt="'+ i.title +'" /><span class="title">'+ i.title +'</span></a></div>' ); } ); $( 'dd.project .project-container' ).addClass( 'thumbnails-jsper-container' ); $( 'dd.project .list' ).addClass( 'jsper-wrapper' ); $( 'dd.project .list .item' ).addClass( 'jsper-slide' ); $( '.thumbnails-jsper-container' ).append( '<div class="jsper-button-prev"></div>' ); $( '.thumbnails-jsper-container' ).append( '<div class="jsper-button-next"></div>' ); projectThumbnailsJsper = new Jsper( '.thumbnails-jsper-container', { direction: 'horizontal', loop: false, slidesPerView: 'auto', centeredSlides: false, spaceBetween: 10, slideToClickedSlide: true, navigation: { nextEl: '.jsper-button-next', prevEl: '.jsper-button-prev', }, runCallbacksOnInit: true, on: { init: function () { $( '.thumbnails-jsper-container' ).addClass( 'loaded' ); } } } ); } ); $( 'a.btn[title="Resume"]' ).jsbox( { hash: false, animationEffect: 'zoom', buttons : [ 'download', 'fullScreen', 'close' ], afterLoad: function( instance, current ) { $( '.jsbox-button--download' ).css( 'display', 'inline-block' ); $( '.jsbox-button--download' ).removeAttr( 'href' ); $( '.jsbox-button--download' ).attr( 'href', $( 'a.btn[title="Resume"]' ).attr( 'data-src' ).replace( 'https://'+ domain, '' ) ); } } ); projectGalleryJsbox = $().jsbox( { selector: 'dd.project a.proj[data-jsbox="proj"]', infobar: true, loop: true, buttons: [ 'zoomInOut', 'slideShow', 'thumbs', 'download', 'shareOn', 'fullScreen', 'close' ], animationEffect: 'zoom', transitionEffect: 'slide', hash: false, thumbs: { autoStart: true, }, afterLoad: function( instance, current ) { $( '.jsbox-thumbs' ).addClass( 'jsper-container' ); $( '.jsbox-thumbs .jsbox-thumbs__list' ).addClass( 'jsper-wrapper' ); $( '.jsbox-thumbs .jsper-wrapper a' ).addClass( 'jsper-slide' ); if ( $( '.jsbox-thumbs .jsper-slide' ).length > 1 ) { var curIdx = $( '.jsper-slide.jsbox-thumbs-active' ).attr( 'data-index' ); var jsboxJsper = new Jsper( '.jsbox-thumbs', { direction: 'horizontal', loop: false, slidesPerView: 'auto', centeredSlides: true, paginationClickable: false, spaceBetween: 5, lazyLoading: true } ); jsboxJsper.slideTo( parseInt( curIdx, 10 ), 300 ); } } } ); } $( "#scrollToTop" ).click( function( e ) { var h = $( window ).scrollTop(); e.preventDefault(); $( "html, body" ).animate( { scrollTop: 0 }, { duration: h / 10, specialEasing: { width: "linear", height: "easeOutBounce" } } ); return false; } );
	//
} );
$( window ).on( 'resize orientationchange', function() {
	//
} );
