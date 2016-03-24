/**
 * Random-bg-color v1.0.0S
 * (c) 2016 Hashir Hussain
 * License: MIT
 */

(function(win, doc) {
    'use strict';

    function init(colors, targetElements) {
        this.colors = colors || [];
        this.targetElements = targetElements || [];
    }

    init.prototype.colors = function(colors) {
        this.colors = colors;
    };

    init.prototype.targetElements = function(targetElements) {
        this.targetElements = targetElements;
    }
    init.prototype.apply = function() {

    };

    win.bgColors = (typeof(win.bgColors) === "undefined") ? new init() : 'bgColors is already defined';
})(window, document);
