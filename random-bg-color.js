/**
 * Random-bg-color v1.0.0S
 * (c) 2016 Hashir Hussain
 * License: MIT
 */

(function(win, doc) {
    'use strict';

    function init(colors, targetElements) {
        this.colors = colors || [];
        this.targetElements = targetElements || '';
    }

    init.prototype.colors = function(colors) {
        return this.colors = colors;
    };

    init.prototype.targetElements = function(targetElements) {
        return this.targetElements = targetElements;
    }
    init.prototype.apply = function() {
        var color = this.colors[Math.floor(Math.random() * this.colors.length)];
        doc.getElementById(this.targetElements).style.backgroundColor = color;
    };

    win.bgColors = (typeof(win.bgColors) === "undefined") ? new init() : 'bgColors is already defined';
})(window, document);
