var $hamburger = $(".hamburger");
$menu = $(".container-menu");
$header = $(".header");
$wrapper = $("#site-wrapper");


$hamburger.click(function (e) {
    'use strict';
    $menu.toggleClass("toggled");
    $hamburger.toggleClass("is-active");
    $wrapper.toggleClass("collapse");

});