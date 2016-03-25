/**
 * Random-bg-color v1.0.0S
 * (c) 2016 Hashir Hussain
 * License: MIT
 */

(function(win, doc) {
    'use strict';

    function init() {}
    init.prototype.colors = function(colors) {
        this.colors = colors;
    };
    init.prototype.targetElements = function(targetElements) {
        this.targetElements = targetElements;
    };
    init.prototype.apply = function() {
        var color = this.colors[Math.floor(Math.random() * this.colors.length)];
        doc.getElementById(this.targetElements).style.background = color;
    };
    win.bgColors = (typeof(win.bgColors) === "undefined") ? new init() : 'bgColors is already defined';
})(window, document);