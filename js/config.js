/* --------------------------------------------------------------------------
 * File        : config.js
 * Version     : 1.0
 * Author      : indonez
 * Author URI  : http://www.indonez.com
 *
 * Indonez Copyright 2019 All Rights Reserved.
 * -------------------------------------------------------------------------- 
 * javascript handle initialization
    1. Homepage uikit slideshow 
    2. Active Menu Jquery
    3. Dynamic Breadcrumb Jquery
 * -------------------------------------------------------------------------- */

(function ($) {

    "use strict";

    let themeApp = {
        //----------- 1. Homepage uikit slideshow -----------
        theme_homeSlideshow: function () {
            let slideshow = UIkit.slideshow('.in-slideshow', {
                autoplay: true,
                autoplayInterval: 7000,
                animation: 'fade',
                minHeight: 123,
                maxHeight: 410
            });
        },
        // theme init
        theme_init: function () {
            themeApp.theme_homeSlideshow();
            //themeApp.theme_activeMenu();
            //themeApp.theme_dynamicBreadcrumb();
        }
    }

    jQuery(document).ready(function ($) {
        themeApp.theme_init();

        var currentUrl = location.pathname;
        
        $('ul.uk-navbar-nav li a').each(function(){
            var $this = $(this);
            
            // if the current path is like this link, make it active
            //console.log($this.attr('href').indexOf(currentUrl) + $this.attr('href'));
            
            //home / inicio
            if (currentUrl === "/"){
                //do nothing
            } else {

                var $split = currentUrl.split('/');

                if($this.attr('href').indexOf(currentUrl) !== -1){
                    $this.addClass('active');
                    $this.parents('div.uk-navbar-dropdown').siblings('a').addClass('active')
                } else if($this.attr('href').indexOf($split[1]) !== -1) {
                        $this.addClass('active');
                    $this.parents('div.uk-navbar-dropdown').siblings('a').addClass('active')
                }
            }
        })

        $('ul.uk-nav-primary li a').each(function(){
            var $this = $(this);
        
            // if the current path is like this link, make it active
            //console.log($this.attr('href').indexOf(currentUrl) + $this.attr('href'));
            
            //home / inicio
            if (currentUrl === "/"){
                //do nothing
            } else {
                if($this.attr('href').indexOf(currentUrl) !== -1){
                    $this.addClass('active');
                    $this.parents('div.uk-navbar-dropdown').siblings('a').addClass('active')
                }
            }
        })
        
    });

})(jQuery);

