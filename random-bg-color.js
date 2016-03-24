/**
 * Random-bg-color v1.0.0S
 * (c) 2016 Hashir Hussain
 * License: MIT
 */

(function(win, doc) {
    'use strict';

    function bgColor() {
        this.colors = [];
        this.targetElements = [];
    }

    bgColor.prototype.colors = function(colors) {
        this.colors = colors;
    };

    bgColor.prototype.targetElements = function(targetElements) {
        this.targetElements = targetElements;
    }

    function init() {
        var bgColors = {};
        /**
         * [targetElements if length is 0 then backgroun color will applied to Body. Therefore it is must to pass at least one value]
         * @type {Array}
         */
        bgColors.targetElements = bgColors.targetElements || '';
        /**
         * [colors if length is 0 then resultant background colors will be random]
         * @type {Array}
         */
        bgColors.colors = bgColors.colors || [];
        return bgColors;
    }
    win.bgColors = (typeof(bgColors) === "undefined") ? init() : 'bgColors is already defined';
})(window, document);
