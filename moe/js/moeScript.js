$("document").ready(function () {
    // MAIN NAV
    $('#main-menu').smartmenus({
        subMenusSubOffsetX: 1,
        subMenusSubOffsetY: -8
    });
    // LATEST NEWS SLIDER
    var $LatestNews = $('.latestNewsSlider').flickity({
        contain: true,
        accessibility: true,
        prevNextButtons: false,
        pageDots: false,
        autoPlay: 10000
    });
    // Flickity instance
    var flkty = $LatestNews.data('flickity');
    // elements
    var $cellButtonGroup = $('.button-group--cells');
    var $cellButtons = $cellButtonGroup.find('.button');
    // update selected cellButtons
    $LatestNews.on('cellSelect', function () {
        $cellButtons.filter('.is-selected')
		  .removeClass('is-selected');
        $cellButtons.eq(flkty.selectedIndex)
		  .addClass('is-selected');
    });
    // select cell on button click
    $cellButtonGroup.on('click', '.button', function () {
        var index = $(this).index();
        $LatestNews.flickity('select', index);
    });
    // ARTICLE/SUBPAGE CONTENT SLIDER
    $('#articleSlider').flickity({
        contain: true,
        prevNextButtons: true,
        pageDots: true,
        wrapAround: true,
        imagesLoaded: true
    });
    // HERO SLIDER
    $('#moeHeroSlider').layerSlider({
        responsiveUnder: 960,
        layersContainer: 960,
        pauseOnHover: false,
        autoPlayVideos: false,
        skin: 'v5',
        autoStart: true,
        skinsPath: '/Portals/_default/Skins/MOE/sliderSkins/'
    });
    // TIP SLIDER
    //$('#tipSlider').layerSlider({
    //    autoStart: false,
    //    skin: 'v5',
    //    skinsPath: '/Portals/_default/Skins/MOEsliderSkins/'
    //});
    // STATISTICS
    $('#statModal').on('shown.bs.modal', function (e) {
        equalheight('.cl_statModal .col-md-4');
    })
    // EQUALHEIGHT
    equalheight('.miscBoxesTop .col-md-4');
    equalheight('.eservices .serviceItem');    
    equalheight('.serviceDropdown li .boxService');
    equalheight('.footerCont .leftContent > li');
    // BOOTSTRAP DATEPICKER
    $('#campingDatePicker').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down",
            moreText: 'Read More ([COUNT])'
        }
    });
    $('.MainDatePicker').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down",
            moreText: 'Read More ([COUNT])'
        }
    });
    $('.moeDatePicker').datetimepicker({
        icons: {
            time: "fa fa-clock-o",
            date: "fa fa-calendar",
            up: "fa fa-arrow-up",
            down: "fa fa-arrow-down",
            moreText: 'Read More ([COUNT])'
        }
    });
    // BOOTSTRAP SELECT
    $('.moeSelect').selectpicker();
    // 
    $('.serviceDropdown li .serviceList').css('display', 'none');
    $('.services .btn').click(function () {
        $('.serviceList').fadeOut(300);
        var takeID = $(this).attr('id');
        // $('#' + takeID + 'open').fadeIn("300", function () {
        //     servicesScroller();
        // });
        $('#' + takeID + 'open').fadeIn("300");
        return false;
    });
    $('.services .BTNLNK').click(function () {
        $('.serviceList').fadeOut(300);
        var takeID = $(this).attr('id').replace('LINK', '');
        // $('#' + takeID + 'open').fadeIn("300", function () {
        //     servicesScroller();
        // });
        $('#' + takeID + 'open').fadeIn("300");
        return false;
    });
    $(".hideServices a").click(function () {
        var takeID = $(this).parents('.serviceDropdown > li').find('.btn').attr('id');
        $('#' + takeID + 'open').fadeOut("500", function () {
            $(this).parent().find('.maxlist-more').fadeOut(300);
        });
        return false;
    });
    // 
    $("#uploadPhotoVideo").fileinput({
        'showUpload': false,
        'previewFileType': 'any',
        'showPreview': false,
        'showRemove': false,
        'captionClass': 'moeUpload'
    });
    $(".Uploader").fileinput({
        'showUpload': false,
        'previewFileType': 'any',
        'showPreview': false,
        'showRemove': false,
        'captionClass': 'moeUpload'
    });
    //
    $('.galleryItemWrapper').each(function () { // the containers for all your galleries
        $(this).magnificPopup({
            delegate: 'a.galleryItem',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
    //
    var BG = readCookie("MOEbg");
    if (BG != null) {
        setBG(BG);
    }
    //
    Flickity.createMethods.push('_createPrevNextCells');

    Flickity.prototype._createPrevNextCells = function () {
        this.on('cellSelect', this.setPrevNextCells);
    };
    Flickity.prototype.setPrevNextCells = function () {
        // remove classes
        if (this.previousCell) {
            classie.remove(this.previousCell.element, 'is-previous');
        }
        if (this.nextCell) {
            classie.remove(this.nextCell.element, 'is-next');
        }
        // set cells
        this.previousCell = this.cells[this.selectedIndex - 1];
        this.nextCell = this.cells[this.selectedIndex + 1];
        // add classes
        if (this.previousCell) {
            classie.add(this.previousCell.element, 'is-previous');
        }
        if (this.nextCell) {
            classie.add(this.nextCell.element, 'is-next');
        }
    };
    // 
    var $moeInitiative = $('.moeInitSlider').flickity({
        contain: true,
        accessibility: false,
        prevNextButtons: false,
        pageDots: true,
        autoPlay: false,
        cellAlign: 'center',
        wrapAround: true
    });
    var moeFlkty = $moeInitiative.data('flickity');
    $moeInitiative.on('cellSelect', function () {

    })
    $('.showInfo').click(function () {
        $(this).parents('.moeInitContent').find('.moreInfo').animate({ left: '0', opacity: 1 });
        $(this).parents('.moeInitSlider').find('.flickity-page-dots').animate({opacity: 0}).css({display: 'none'});
        $(this).addClass('disable');

    });
    $('.hideInfo').click(function () {
        $(this).parents('.moreInfo').animate({ left: '-80%', opacity: 0 });
        $(this).parents('.moeInitContent').find('.showInfo').removeClass('disable');
        $(this).parents('.moeInitSlider').find('.flickity-page-dots').animate({opacity: 1}).css({display: 'block'});
    });
    // 
    $('.moeVerticalSlider').serialScroll({
       target: '.moeVerticalSections',
       items: 'li',
       prev: 'a.prev',
       next: 'a.next',
       axis: 'xy',
       navigation: '.moeVerticalNavigation li a',
       duration: 700,
       force: true
    });
    // 
    $('.moeVerticalNavigation ul li a').click(function () {
        $(this).parents('.moeVerticalNavigation').find('a').removeClass('active');
        $(this).addClass('active');
        return false;
    });
    // 
    $('.initImage').imagefill();
    // 
    var BG = readCookie("MOEbg");
    if (BG != null) {
        setBG(BG);
    }
    // LIGHT BOX > SUBPAGE > PHOTOS
    $('.mapGallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a.galleryMAP',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    });
    //
    $('.media-gallery-page').each(function () {
        $(this).magnificPopup({
            delegate: 'a.mdGal',
            type: 'image',
            gallery: {
                enabled: true
            }
        });
    }); 
    // LIST AND THUMB > SERVICES
    $('.viewServiceAsList').click(function (){ 
        $(this).parents('.eservices').find('.serviceItem').removeClass('grid-group-item');
        $(this).parents('.eservices').find('.serviceItem').addClass('list-group-item');
        equalheight('.eservices .serviceItem');
    });
    $('.viewServiceAsThumb').click(function (){ 
        $(this).parents('.eservices').find('.serviceItem').removeClass('list-group-item');
        $(this).parents('.eservices').find('.serviceItem').addClass('grid-group-item');
        equalheight('.eservices .serviceItem');
    });

        $('.appLinks2 a').click(function (){ 
        $('.online-poll').slideToggle('slow,swing');
        return false;
    });
    $('.close-button').click(function (){ 
        $('.online-poll').slideToggle('slow,swing');
        return false;
    });
	$('.media-gallery').each(function () {
            $(this).magnificPopup({
                type: 'iframe',
                delegate: 'a.video',
                iframe: {
                    markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '</div>',
                    patterns: {
                        dailymotion: {

                            index: 'dailymotion.com',

                            id: function (url) {
                                var m = url.match(/^.+dailymotion.com\/(video|hub)\/([^_]+)[^#]*(#video=([^_&]+))?/);
                                if (m !== null) {
                                    if (m[4] !== undefined) {

                                        return m[4];
                                    }
                                    return m[2];
                                }
                                return null;
                            },

                            src: 'http://www.dailymotion.com/embed/video/%id%'

                        },
                        youtube: {
                            index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                            id: 'v=', // String that splits URL in a two parts, second part should be %id%
                            // Or null - full URL will be returned
                            // Or a function that should return %id%, for example:
                            // id: function(url) { return 'parsed id'; } 

                            src: '//www.youtube.com/embed/%id%?autoplay=1' // URL that will be set as a source for iframe. 
                        },
                        vimeo: {
                            index: 'vimeo.com/',
                            id: '/',
                            src: '//player.vimeo.com/video/%id%?autoplay=1'
                        },
                        gmaps: {
                            index: '//maps.google.',
                            src: '%id%&output=embed'
                        }
                    },
                    srcAction: 'iframe_src',
                }
            });
    });
            
});

// FUNCTION > SERVICE SCROLLER
// function servicesScroller() {
//     $(".lista2").als({
//         visible_items: 5,
//         scrolling_items: 1,
//         orientation: "vertical",
//         circular: "no",
//         autoscroll: "no"
//     });
// }

// FUNCTION > RESPONSIVE EQUAL DIV HEIGHT 
equalheight = function (container) {
    var currentTallest = 0,
    currentRowStart = 0,
    rowDivs = new Array(),
    $el,
    topPosition = 0;
    $(container).each(function () {

        $el = $(this);
        $($el).height('auto')
        topPostion = $el.position().top;
        // console.log(topPostion);
        if (currentRowStart != topPostion) {
            for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
                rowDivs[currentDiv].height(currentTallest);
            }
            rowDivs.length = 0; // empty the array
            currentRowStart = topPostion;
            currentTallest = $el.height();
            rowDivs.push($el);
        } else {
            rowDivs.push($el);
            currentTallest = (currentTallest < $el.height()) ? ($el.height()) : (currentTallest);
        }
        for (currentDiv = 0 ; currentDiv < rowDivs.length ; currentDiv++) {
            // console.log(currentTallest);
            rowDivs[currentDiv].height(currentTallest);
        }
    });
}

// Set Background
function setBG(BGvalue) {
    createCookie("MOEbg", BGvalue, 10);
    $('#BG_Green').removeClass('active');
    $('#BG_Dark').removeClass('active');
    $('#BG_Maroon').removeClass('active');
    $('#BG_Blue').removeClass('active');
    $('body').removeClass("Green").removeClass("Dark").removeClass("Maroon").removeClass("Blue");
    $('body').addClass(BGvalue);
    $('#BG_' + BGvalue).addClass('active');
}
//
function createCookie(name, value, days) {
    var expires;
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toGMTString();
    } else {
        expires = "";
    }
    document.cookie = encodeURIComponent(name) + "=" + encodeURIComponent(value) + expires + ";";
}
//
function readCookie(name) {
    var nameEQ = encodeURIComponent(name) + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) === 0) return decodeURIComponent(c.substring(nameEQ.length, c.length));
    }
    return null;
}
function eraseCookie(name) {
    createCookie(name, "", -1);
}

// WINDOW LOAD
$(window).load(function () {
    equalheight('.miscBoxesTop .col-md-4');
    equalheight('.serviceDropdown li .boxService');
    equalheight('.footerCont .leftContent > li');
    equalheight('.eservices .serviceItem'); 
    // servicesScroller();
});
// WINDOW RESIZE
$(window).resize(function () {
    equalheight('.miscBoxesTop .col-md-4'); 
    equalheight('.serviceDropdown li .boxService');
    equalheight('.footerCont .leftContent > li');
    equalheight('.eservices .serviceItem'); 
    // servicesScroller();
});

// renadom slider           
    var description = [
  "sliders/slide01/Assets/slide.html",
  "sliders/slide02/Assets/slide.html",
  "sliders/slide03/Assets/slide.html",
  "sliders/slide04/Assets/slide.html",
  "sliders/slide05/Assets/slide.html",
  "sliders/slide06/Assets/slide.html",
  "sliders/slide07/Assets/slide.html",
  "sliders/slide08/Assets/slide.html",
  "sliders/slide09/Assets/slide.html",
  "sliders/slide010/Assets/slide.html"      
];

var size = description.length
var x = Math.floor(size*Math.random())
document.getElementById('EdgeID').data=description[x];
    