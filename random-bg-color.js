/**
 * Random-bg-color v1.0.0S
 * (c) 2016 Hashir Hussain
 * License: MIT
 */

(function(win, doc) {
    'use strict';

    function init() {
        var bgColors = {};
        bgColors.name = 'name called';
        return bgColors;
    }

    win.bgColors = (typeof(bgColors) === "undefined") ? init() : 'bgColors is already defined';
    // if(typeof(bg-colors)===undefined){
    // 	win.bg-colors = init();
    // }
})(window, document);
