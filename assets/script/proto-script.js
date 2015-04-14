function constructTocItems(items, category) {
    var links = $();
    for (var i = 0; i < items.length; i++) {
        var el = document.createElement('li');
        var link = document.createElement('a');
        link.href =  '#' + items[i];
        // link.className = 'btn';
        var linkText = document.createTextNode(items[i].replace(/-/g, ' '));
        link.appendChild(linkText);
        el.appendChild(link);
        links = links.add($(el));

        // attach click event handler to scroll to element
        $(link).bind('click', function(event) {
            var href = event.target.href;
            href = href.substring(href.indexOf('#'));
            protoScrollToSection(href);
        });
    }
    return links;
}
function protoScrollToSection(clickedHref) {
    // this function replaces the native browser hash targeting. Because of the fixed top nav, we need to offset all hash targeting upwards, so that the nav doesn't cover the target area.
    if (typeof clickedHref !== 'string' || clickedHref === '') {return false;}

    var targetEl = $('div' + clickedHref);

    // scroll to correct div
    $('html,body').animate({scrollTop: targetEl.offset().top - 100}, 1);

    // add hash to url
    var url = document.location.href;
    var hash = document.location.hash;

    // replace hash manually if it doesn't already match current clicked element or if it's empty
    if (hash !== clickedHref){
        url = url.replace(hash, clickedHref);
    } else if (hash === '') {
        url = url + clickedHref;
    }
    document.location.href = url;

    return false;
}

$(document).ready(function(){

    var currentPage = "${param['currentPage']}";
    var menuTitle = $('.pro-menu-title');
    var timer;

    function triggerMenu() {
        menuTitle.trigger('click');
    }

    // If current page param is set, highlight current page in nav
    if (typeof currentPage !== 'undefined' && $('.pro-nav-' + currentPage).length > 0) {
        $('.pro-nav-list').children('li').removeClass('current').filter('.pro-nav-' + currentPage).addClass('current');
    }
    
    // Move the closeThis button from the <dt> to the <dd> and add closing functionality 
    $('.pro-menu-title .closeThis').clone(true).remove().appendTo('.pro-menu-body').addClass('closeMenu');
    $('.pro-menu').find('a.closeThis').click(function(){
        menuTitle.trigger('click');
    });


    $('.pro-menu').bind({
        mouseenter: function() {
                clearTimeout(timer);
            if( !menuTitle.hasClass('open') ) {
                triggerMenu();
            }
        },
        mouseleave: function() {
            if( menuTitle.hasClass('open') ) {
                timer = window.setTimeout(triggerMenu, 500);
            }
        }
    });


	/* Generate table of contents (TOC):

	- TOC is constructed by indexing each $('.section-wrap'), grabbing its ID and setting it as a TOC item
	- While script is collecting table of content items, it also inserts a "back to top" link after each section
	- TOCs are local to a current tab ($('.tab-content-body'));

	NOTE TO DEVELOPER: 
	Since the script uses ID to generate the table of contents, if you remove the ID from a .section-wrap, that element will not be included in the TOC.

	*/
	var usageToc = {};
	$('.has-toc').each(function(){
        var category = $(this).attr('id').slice(4); // grab the id of each tab container, set this as current category
        usageToc[category] = [];    // add category to usageToc object

        // loop through all .section-wraps to collect TOC items
        $(this).find('.section-wrap').each(function(){

            // add "back to top" link at the end of each section
            var backToTop = '<div class="toTop"><a href="#top">back to top</a></div>';

            // if current section-wrap contains any .example-wraps, add "back to top" link after those too
            if($(this).find('.example-wrap').length > 0){
             $(this).find('.example-wrap').after(backToTop);
         }
         else {
            $(this).after(backToTop);
        }

            // collect ids to construct table of contents
            if($(this).attr('id') !== ''){
                usageToc[category].push($(this).attr('id'));
            }
        });

        // add table of contents links to DOM
        $(this).find('.toc').append(constructTocItems(usageToc[category], category));
    });


    // instantiate higlight.js code highlighting
    $('.codeBlock pre').each(function(i, e) {
        hljs.highlightBlock(e, null, false);
    });

    // trigger artificial hash targetting.
    // if($(document.location.hash).length > 0){
    //     console.log('trying to hash to element');
    //     protoScrollToSection(document.location.hash);
    // }

    var newFAQ = new fxcm.ui.ExpandableSet('someWrapperID', 'newControlLinkID');

});

